import { tenants } from "@/constants/global-constants";
import React from "react";

export interface ChildrenProps {
  children: React.ReactNode;
}

export type TanentsKey = keyof typeof tenants;
