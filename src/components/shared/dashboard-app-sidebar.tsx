"use client";

import { type LucideIcon } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardNavMain } from "./dashboard-nav-main";
import { DashboardNavSwitcher } from "./dashboard-nav-switcher";
import { DashboardNavUser } from "./dashboard-nav-user";

// This is sample data.

export type AppSideBarType = {
  data: {
    user: { name: string; email: string; avatar: string };
    teams: {
      name: string;
      logo: LucideIcon;
      plan: string;
    }[];
    navMain: {
      title: string;
      url: string;
      icon?: LucideIcon | undefined;
      isActive?: boolean;
      items?: {
        title: string;
        url: string;
      }[];
    }[];
  };
  sidbarProps?: React.ComponentProps<typeof Sidebar>;
};

export function DashboardAppSidebar({ sidbarProps, data }: AppSideBarType) {
  return (
    <Sidebar collapsible="icon" {...sidbarProps}>
      <SidebarHeader>
        <DashboardNavSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <DashboardNavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <DashboardNavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
