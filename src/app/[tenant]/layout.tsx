import TenantDashboardLayout from "@/modules/tenant-dashboard/ui/layout/tenant-dashboard-layout";
import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default async function Layout({
  children,
  params,
}: ChildrenProps & { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  return (
    <TenantDashboardLayout tenantId={tenant}>{children}</TenantDashboardLayout>
  );
}
