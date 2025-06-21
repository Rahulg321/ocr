import {
  Bell,
  HelpCircle,
  FileText,
  CreditCard,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SidebarHeader() {
  return (
    <header className="flex h-14 md:h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2 md:gap-4">
        <SidebarTrigger className="md:hidden" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <div className="flex aspect-square size-5 md:size-6 items-center justify-center rounded bg-primary text-primary-foreground text-xs font-bold">
                P
              </div>
              <span className="hidden sm:inline">Personal Team</span>
              <span className="sm:hidden">Team</span>
              <ChevronDown className="size-3 md:size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Personal Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="size-4" />
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <CreditCard className="size-4" />
          Get Free Credits
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <HelpCircle className="size-4" />
          Help
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <FileText className="size-4" />
          Docs
        </Button>
        <Button className="bg-primary hover:bg-primary/90">Upgrade Plan</Button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center gap-2">
        <Button variant="ghost" size="icon" className="size-8 md:size-10">
          <Bell className="size-4" />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8 md:size-10">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col gap-4 mt-8">
              <Button variant="outline" className="justify-start gap-2">
                <CreditCard className="size-4" />
                Get Free Credits
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <HelpCircle className="size-4" />
                Help
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <FileText className="size-4" />
                Docs
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Upgrade Plan
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
