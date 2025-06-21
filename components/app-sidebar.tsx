"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  ChevronUp,
  Clock,
  Settings,
  User2,
  File,
  Activity,
  FileText,
  Play,
  ChevronDown,
  Home,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOutDialog from "./dialogs/SignOutDialog";

const navigationItems = [
  {
    title: "Overview",
    href: "/overview",
    icon: Home,
  },

  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart2,
  },
  {
    title: "History",
    href: "/history",
    icon: Clock,
  },

  {
    title: "Playground",
    href: "/playground",
    icon: Play,
  },

  {
    title: "Extract",
    href: "/extract",
    icon: FileText,
  },

  {
    title: "Activity Log",
    href: "/activity-log",
    icon: Activity,
  },

  {
    title: "Usage",
    href: "/usage",
    icon: BarChart2,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset" className="">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title} className="mb-2">
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="mr-3 h-6 w-6" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 className="h-6 w-6" /> Username
                  <ChevronUp className="ml-auto h-5 w-5" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/notifications">
                    <span>Notifications</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <SignOutDialog />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
