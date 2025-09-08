import { authRouter } from "../actions/auth.actions";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  auth: authRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
