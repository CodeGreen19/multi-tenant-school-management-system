"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type StepsType = {
  svgPath: string;
  title: "Account" | "Onboarding" | "Payments";
  path: string;
};
const steps: StepsType[] = [
  {
    path: "/auth/sign-up",
    svgPath: "/google.svg",
    title: "Account",
  },
  {
    path: "/auth/onboarding",
    svgPath: "/google.svg",
    title: "Onboarding",
  },
  {
    path: "/auth/payment",
    svgPath: "/google.svg",
    title: "Payments",
  },
];
export default function SignUpSteps() {
  return (
    <div className="p-6">
      <div className="max-w-3xl m-auto border-b flex items-center justify-between">
        {steps.map((step) => (
          <div className={cn("p-4 px-6")} key={step.path}>
            <Link href={step.path}>{step.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
