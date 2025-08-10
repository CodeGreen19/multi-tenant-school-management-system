import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function DashboardLayout({ children }: ChildrenProps) {
  return (
    <div>
      <h1>Dashboard layout</h1>
      <div>{children}</div>
    </div>
  );
}
