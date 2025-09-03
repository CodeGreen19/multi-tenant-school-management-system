import { ChildrenProps } from "@/types/global";
import React from "react";

export default function layout({ children }: ChildrenProps) {
  return <div>{children}</div>;
}
