"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Product", href: "#", hasDropdown: true }, // Using '#' as placeholder, adjust as needed
  { label: "Pricing", href: "/pricing" },
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link
            href="/login"
            className="bg-white text-black px-3 sm:px-4 py-1.5 rounded-md font-medium text-sm sm:text-base whitespace-nowrap"
          >
            Sign in
          </Link>

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
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
