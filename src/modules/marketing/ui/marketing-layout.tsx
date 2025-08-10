import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function MarketingLayout({ children }: ChildrenProps) {
  return (
    <div>
      <h1>Marketing Layout</h1>
      <div>{children}</div>
    </div>
  );
}
