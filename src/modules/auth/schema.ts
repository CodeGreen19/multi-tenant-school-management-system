import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 char")
    .max(128, "Password must be at most 128 char"),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const onboardingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z
    .string()
    .min(3, "slug must be at least 3 char")
    .max(30, "Password must be at most 30 char"),
});

export type OnboardingSchemaType = z.infer<typeof onboardingSchema>;
