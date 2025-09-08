import { auth } from "@/lib/auth";
import { initTRPC } from "@trpc/server";
import { headers } from "next/headers";
import { cache } from "react";
// export const createTRPCContext = cache(async () => {
//   /**
//    * @see: https://trpc.io/docs/server/context
//    */
//   return { userId: "user_123" };
// });

export const myCreateContext = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
    asResponse: true,
  });

  console.log("wow");

  return session ?? {};
});

type Context = Awaited<ReturnType<typeof myCreateContext>>;

const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
