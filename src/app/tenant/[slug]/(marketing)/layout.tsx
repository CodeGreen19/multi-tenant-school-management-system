import TenantMarketingLayout from "@/modules/tenant-marketing/layout";
import { ChildrenProps } from "@/types/global";
import React from "react";

export default function layout({ children }: ChildrenProps) {
  return <TenantMarketingLayout>{children}</TenantMarketingLayout>;
}
