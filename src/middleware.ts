import { NextResponse } from "next/server";

// Constants for subdomain names
// const SUBDOMAINS = {
//   CONSOLE: "console",
//   AUTH: "auth",
// } as const;

// Environment configuration
// const CONFIG = {
//   baseAuthUrl: serverEnv.BASE_AUTH_URL,
//   baseConsoleUrl: serverEnv.BASE_CONSOLE_URL,
// } as const;

// Utility function to create a redirect URL
// const createRedirectUrl = (
//   baseUrl: string,
//   pathname: string,
//   requestUrl: string,
//   prefixLength: number
// ): URL => {
//   return new URL(`${baseUrl}/${pathname.substring(prefixLength)}`, requestUrl);
// };

// Utility function to create a rewrite URL
// const createRewriteUrl = (path: string, requestUrl: string): URL => {
//   return new URL(path, requestUrl);
// };

export async function middleware() {
  // Pass through unmatched requests
  return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher: ["/((?!api|_next|[\\w-]+\\.\\w+).*)"],
};

// const { pathname } = request.nextUrl;
// const subdomain = extractSubdomain(request);

// const sessionCookie = getSessionCookie(request);

// console.log("sessionCookie =>", sessionCookie);

// // Handle redirects based on pathname
// if (pathname.startsWith("/auth")) {
//   return NextResponse.redirect(
//     createRedirectUrl(CONFIG.baseAuthUrl, pathname, request.url, 6)
//   );
// }

// if (pathname.startsWith("/console")) {
//   return NextResponse.redirect(
//     createRedirectUrl(CONFIG.baseConsoleUrl, pathname, request.url, 9)
//   );
// }

// // Handle subdomain-based routing
// if (subdomain === SUBDOMAINS.CONSOLE) {
//   return NextResponse.rewrite(
//     createRewriteUrl(`/console${pathname}`, request.url)
//   );
// }

// if (subdomain === SUBDOMAINS.AUTH) {
//   if (pathname === "/") {
//     return NextResponse.redirect(createRewriteUrl("/sign-up", request.url));
//   }
//   return NextResponse.rewrite(
//     createRewriteUrl(`/auth${pathname}`, request.url)
//   );
// }

// // Handle tenant-based routing
// if (subdomain) {
//   return NextResponse.rewrite(
//     createRewriteUrl(`/tenant/${subdomain}${pathname}`, request.url)
//   );
// }
