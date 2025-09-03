import { ChildrenProps } from "@/types/global";
import React from "react";

export default function TenantMarketingLayout({ children }: ChildrenProps) {
  return (
    <div>
      <div>Layout</div>
      {children}
    </div>
  );
}
