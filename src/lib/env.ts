import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),
    ROOT_DOMAIN: z.string(),
    BASE_URL: z.string(),
    NODE_ENV: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
export const clientEnv = createEnv({
  client: {},
  runtimeEnv: {},
});
