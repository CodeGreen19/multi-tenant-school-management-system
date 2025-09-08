import TenantLayout from "@/modules/tenant-dashboard/layout";
import { ChildrenProps } from "@/types/global";
import React from "react";

export default function layout({ children }: ChildrenProps) {
  return <TenantLayout>{children}</TenantLayout>;
}
