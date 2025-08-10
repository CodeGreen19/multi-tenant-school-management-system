import MarketingLayout from "@/modules/marketing/ui/marketing-layout";
import { ChildrenProps } from "@/types/global-types";
import React from "react";

export default function Layout({ children }: ChildrenProps) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
