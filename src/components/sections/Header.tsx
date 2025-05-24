"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { CalendarIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/95 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center group"
          >
            <Image
              src="/logo.png"
              alt="Physio Ghar Logo"
              width={140}
              height={45}
              className={`transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "w-32" : "w-36"
              }`}
              priority
            />
          </Link>

          {/* CTA Buttons */}
          <div className={`flex items-center gap-4 transition-all duration-300 ${
            isScrolled ? "" : "hidden sm:flex"
          }`}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
