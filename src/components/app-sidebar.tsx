"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Bug,
  Code2,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  LineChart,
  Map,
  PieChart,
  Settings2,
  SlidersHorizontal,
  SquareTerminal,
  TestTube,
} from "lucide-react";

import { NavDashboard } from "@/components/nav-dashboard";
import { NavCharts } from "@/components/nav-charts";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navDashboard: [
    {
      title: "Main",
      url: "/user-dashboard/main",
      icon: Home,
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navCharts: [
    {
      title: "My Charts",
      url: "/user-dashboard/my-charts",
      icon: LineChart,
      collapseOnSelect: true,
    },
    {
      title: "Broken",
      url: "#",
      icon: Bug,
    },
    {
      title: "Code Editor",
      url: "#",
      icon: Code2,
    },
    {
      title: "Strategy Tester",
      url: "#",
      icon: TestTube,
    },
    {
      title: "Optimization",
      url: "#",
      icon: SlidersHorizontal,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const {
    open,
    setOpen,
    openMobile: _openMobile,
    setOpenMobile: _setOpenMobile,
    isMobile: _isMobile,
    state,
  } = useSidebar();
  const openedByHover = React.useRef(false);
  const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const navDashboard = data.navDashboard.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }));

  const navCharts = data.navCharts.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }));

  const handleMouseEnter = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }

    if (state === "collapsed" && !open) {
      openedByHover.current = true;
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }

    if (openedByHover.current) {
      hoverTimeout.current = setTimeout(() => {
        openedByHover.current = false;
        setOpen(false);
      }, 100);
    }
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  return (
    <Sidebar
      collapsible="icon"
      className="dark z-50 border-r border-border bg-[hsl(0,0%,11%)] text-foreground transition-all duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <SidebarHeader className="border-b border-border bg-[hsl(0,0%,11%)]">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-[hsl(0,0%,11%)]">
        <NavDashboard items={navDashboard} />
        <NavCharts items={navCharts} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="border-t border-border bg-[hsl(0,0%,11%)]">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
