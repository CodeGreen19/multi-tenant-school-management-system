import { ChildrenProps } from "@/types/global-types";
import React from "react";
import TenantNav from "./components/tenant-nav";

export default function TenantMarketinglayout({
  children,
}: ChildrenProps & { tenant: string }) {
  return (
    <div>
      <TenantNav />
      <div className="flex items-center justify-center min-h-52">
        {children}
      </div>
    </div>
  );
}
