import { ChildrenProps } from "@/types/global";
import React from "react";
import SignUpSteps from "./signup-steps";

export default function AuthLayout({ children }: ChildrenProps) {
  return (
    <div>
      <SignUpSteps />
      {children}
    </div>
  );
}
