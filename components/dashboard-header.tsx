"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showRunButton?: boolean;
}

export default function DashboardHeader({
  title,
  subtitle,
  showRunButton = false,
}: HeaderProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-xl font-semibold md:text-2xl">{title}</h1>
          <p className="text-xs text-muted-foreground md:text-sm">
            {subtitle || currentDate}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        {showRunButton && (
          <Button className="bg-gray-200 text-gray-700 hover:bg-gray-300">
            Run <span className="ml-1">→</span>
          </Button>
        )}
      </div>
    </div>
  );
}
