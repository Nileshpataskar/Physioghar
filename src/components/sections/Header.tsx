"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CalendarIcon, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group">
            <Image
              src="/logo.png"
              alt="Physio Ghar Logo"
              width={140}
              height={45}
              className={`transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "w-28 sm:w-32" : "w-32 sm:w-36"
              }`}
              priority
            />
          </Link>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">Request Callback</span>
            </Button>
            <Button
              size="lg"
              className="rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed top-[72px] right-0 w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full px-6 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
          >
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-medium">Request Callback</span>
          </Button>
          <Button
            size="lg"
            className="w-full rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            <CalendarIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">Book Appointment</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
