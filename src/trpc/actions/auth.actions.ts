import { createTRPCRouter, publicProcedure } from "@/trpc/init";

import { auth } from "@/lib/auth";
import { onboardingSchema, signUpSchema } from "@/modules/auth/schema";
import { getMessage } from "@/lib/helpers";
import { headers } from "next/headers";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure.input(signUpSchema).mutation(async ({ input }) => {
    await auth.api.signUpEmail({
      body: {
        name: input.fullName,
        email: input.email,
        password: input.password,
      },
    });
    return getMessage("auth.signup.success");
  }),

  onboarding: publicProcedure.input(onboardingSchema).mutation(async () => {
    // const data = await auth.api.createOrganization({
    //   body: {
    //     name: input.name,
    //     slug: input.slug,
    //     userId: "MR8TeuET6sLXYYRrxh24g5lzCQ6Pfk4l",
    //   },
    // });
    const data = await auth.api.getSession({
      headers: await headers(),
    });

    console.log("route=>", data);

    return getMessage("org.signup.success");
  }),
});
