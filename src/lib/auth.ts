import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db";
import { organization, admin } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  session: {
    cookieCache: {
      enabled: true,
    },
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: ".localhost.test",
    },
  },
  trustedOrigins: [
    "https://auth.ahmedsolution.xyz",
    "https://console.ahmedsolution.xyz",
    "https://ahmedsolution.xyz",
  ],
  // trustedOrigins: [
  //   "http://auth.localhost.test:3000",
  //   "http://console.localhost.test:3000",
  //   "http://app.localhost.test:3000",
  // ],

  plugins: [organization(), admin(), nextCookies()],
});
