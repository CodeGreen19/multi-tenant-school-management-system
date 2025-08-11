import { ChildrenProps } from "@/types/global-types";
import React from "react";
import MarketingNav from "./components/marketing-nav";

export default function MarketingLayout({ children }: ChildrenProps) {
  return (
    <div>
      <MarketingNav />
      <div>{children}</div>
    </div>
  );
}
