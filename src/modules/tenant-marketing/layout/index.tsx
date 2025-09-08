import { ChildrenProps } from "@/types/global";
import React from "react";
import TenantMarketingNav from "../components/tenant-marketing-nav";

export default function TenantMarketingLayout({ children }: ChildrenProps) {
  return (
    <div>
      <TenantMarketingNav />
      {children}
    </div>
  );
}
