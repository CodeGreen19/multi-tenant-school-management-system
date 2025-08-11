import AuthPageLayout from "@/modules/auth/ui/auth-layout";
import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function Layout({ children }: ChildrenProps) {
  return <AuthPageLayout>{children}</AuthPageLayout>;
}
