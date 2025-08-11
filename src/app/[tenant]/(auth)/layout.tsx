import AuthPageLayout from "@/modules/auth/ui/auth-layout";
import TenantAuthPageLayout from "@/modules/tenant-auth/ui/tenant-auth-layout";
import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function Layout({ children }: ChildrenProps) {
  return <TenantAuthPageLayout>{children}</TenantAuthPageLayout>;
}
