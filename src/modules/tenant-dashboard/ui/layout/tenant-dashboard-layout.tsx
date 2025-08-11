import { ChildrenProps } from "@/types/global-types";

import { DashboardAppSidebar } from "@/components/shared/dashboard-app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DashboardProfileSettings } from "@/components/shared/dashboard-nav-profile";

export default function TenantDashboardLayout({
  children,
  tenantId,
}: ChildrenProps & { tenantId: string }) {
  return (
    <SidebarProvider>
      <DashboardAppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between h-16 shrink-0  gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center  gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Admin Panel</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <DashboardProfileSettings
              user={{
                avatar: "/dashboard.svg",
                email: "email@gmail.com",
                name: "Altaf",
              }}
            />
          </div>
        </header>
        <div className="px-4 py-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
