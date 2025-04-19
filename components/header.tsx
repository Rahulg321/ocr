"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative px-4 sm:px-6">
      <div className="bg-[#1e1e1e] rounded-full mx-auto max-w-5xl mt-6 px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center">
            <div className="bg-[#1e1e1e] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded" />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-white">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Product</span>
              <ChevronDown size={16} />
            </div>
            <span className="cursor-pointer">Pricing</span>
            <span className="cursor-pointer">Contact us</span>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="bg-white text-black px-3 sm:px-4 py-1.5 rounded-md font-medium text-sm sm:text-base whitespace-nowrap"
          >
            Sign in
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute z-10 mt-2 w-full max-w-5xl left-1/2 transform -translate-x-1/2 px-4">
          <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-4 text-white">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Product</span>
                <ChevronDown size={16} />
              </div>
              <span className="cursor-pointer">Pricing</span>
              <span className="cursor-pointer">Contact us</span>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
