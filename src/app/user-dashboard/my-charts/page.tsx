"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { RightPanel } from "@/components/right-panel";
import { ChartPageFooter } from "@/components/chart-page-footer";
import { ChartContainer } from "@/components/chart-container";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function UserDashboardMyChartsPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="absolute left-[3rem] right-0 top-0 bottom-0 flex flex-col">
        <header className="h-10 shrink-0 border-b-4 border-border">
        </header>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <ChartContainer />
            </div>
            <ChartPageFooter />
          </div>
          <RightPanel />
        </div>
      </div>
    </SidebarProvider>
  );
}
