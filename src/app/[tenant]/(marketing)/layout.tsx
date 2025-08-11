import TenantMarketinglayout from "@/modules/tenant-marketing/ui/tenant-marketing-layout";
import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default async function Layout({
  children,
  params,
}: ChildrenProps & { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  return (
    <TenantMarketinglayout tenant={tenant}>{children}</TenantMarketinglayout>
  );
}
