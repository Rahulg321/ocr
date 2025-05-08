"use client";

import Link from "next/link";
import {
  BookOpen,
  ChevronDown,
  CreditCard,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
const navLinks = [
  { label: "Product", href: "#", hasDropdown: true }, // Using '#' as placeholder, adjust as needed
  { label: "Pricing", href: "/pricing" },
  { label: "Contact us", href: "/contact" },
];

export default function Header({ session }: { session: Session | null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const renderNavLink = (
    link: { label: string; href: string; hasDropdown?: boolean },
    isMobile: boolean = false
  ) => {
    const commonClasses = "cursor-pointer";
    const mobileClasses = isMobile ? "py-2" : "";

    if (link.hasDropdown) {
      return (
        <div
          key={link.label}
          className={`flex items-center gap-1 ${commonClasses} ${mobileClasses}`}
        >
          <span>{link.label}</span>
          <ChevronDown size={16} />
        </div>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.href}
        className={`${commonClasses} ${mobileClasses}`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <div className="relative px-4 sm:px-6">
      <div className="bg-[#1e1e1e] rounded-full mx-auto max-w-5xl mt-6 px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Logo Placeholder */}
          <Link href="/" aria-label="Home">
            <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center">
              <div className="bg-[#1e1e1e] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-white">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {session ? (
            <ProfileMenu session={session} />
          ) : (
            <Button
              className="text-gray-300 transition-colors hover:text-white"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute z-10 mt-2 w-full max-w-5xl left-1/2 transform -translate-x-1/2 px-4">
          <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-4 text-white">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => renderNavLink(link, true))}
              {session ? (
                <div className="mt-4 py-3">
                  <ProfileMenu session={session} />
                </div>
              ) : (
                <button
                  className="mt-4 w-full rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileMenu({ session }: { session: Session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src={session.user.image || "https://github.com/shadcn.png"}
            alt="@shadcn"
          />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
        <span className="flex items-center font-medium text-gray-300">
          Account <ChevronDown />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link
            href={`/profile/${session.user.id}`}
            className="flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            My Learnings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link
            href={`/profile/${session.user.id}/learnings`}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Exam History
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={`/profile/${session.user.id}/info`}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link
            href={`/profile/${session.user.id}/subscription`}
            className="flex items-center gap-2"
          >
            <CreditCard className="h-4 w-4" />
            Subscription
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut()}
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
