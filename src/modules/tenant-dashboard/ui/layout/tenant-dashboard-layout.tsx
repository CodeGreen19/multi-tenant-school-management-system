import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function TenantDashboardLayout({
  children,
  tenantId,
}: ChildrenProps & { tenantId: string }) {
  return (
    <div className="font-lexand font-light antialiased">
      <h4>{tenantId}</h4>
      {children}
    </div>
  );
}
