import MarketingLayout from "@/modules/marketing/layout";
import { ChildrenProps } from "@/types/global";
import React from "react";

export default function layout({ children }: ChildrenProps) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
