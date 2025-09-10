import { myCreateContext } from "@/trpc/init";
import { appRouter } from "@/trpc/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const ALLOWED_ORIGINS = [
  "https://auth.ahmedsolution.xyz",
  "https://console.ahmedsolution.xyz",
  "https://ahmedsolution.xyz",
  /\.localhost.test:3000$/, // allow any tenant subdomain
];
// const ALLOWED_ORIGINS = [
//   "http://localhost.test:3000",
//   "http://auth.localhost.test:3000",
//   "http://console.localhost.test:3000",
//   /\.localhost.test:3000$/, // allow any tenant subdomain
// ];

function corsHeaders(origin: string | null): Record<string, string> {
  if (!origin) return {};

  const isAllowed = ALLOWED_ORIGINS.some((o) =>
    typeof o === "string" ? o === origin : o.test(origin)
  );

  if (!isAllowed) return {};

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin), // ✅ always Record<string, string>
  });
}

async function handler(req: Request) {
  const origin = req.headers.get("origin");

  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: myCreateContext,
  });

  // clone + add CORS headers
  const headers = new Headers(response.headers);
  Object.entries(corsHeaders(origin)).forEach(([k, v]) => {
    headers.set(k, v);
  });

  return new Response(await response.text(), {
    status: response.status,
    headers,
  });
}

export { handler as GET, handler as POST };

// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import { myCreateContext } from "@/trpc/init";
// import { appRouter } from "@/trpc/routers/_app";
// const handler = (req: Request) =>
//   fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     router: appRouter,
//     createContext: myCreateContext,
//   });
// export { handler as GET, handler as POST };
