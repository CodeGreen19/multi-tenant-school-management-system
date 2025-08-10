import DashboardLayout from "@/modules/admin-dashboard/ui/layout/dashboard-layout";
import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function Layout({ children }: ChildrenProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
