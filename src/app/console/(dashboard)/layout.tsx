import ConsoleLayout from "@/modules/console/layout";
import { ChildrenProps } from "@/types/global";
import React from "react";

export default function layout({ children }: ChildrenProps) {
  return <ConsoleLayout>{children}</ConsoleLayout>;
}
