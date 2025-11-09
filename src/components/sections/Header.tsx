"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { CalendarIcon, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/Categories";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [treatDropdownOpen, setTreatDropdownOpen] = useState(false);
  const treatDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-2"
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
              className={`transition-all duration-300 group-hover:scale-105 w-20 sm:w-28 md:w-32 ${
                isScrolled ? "w-20 sm:w-28" : "w-24 sm:w-32 md:w-36"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav Dropdown */}
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => {
                if (treatDropdownTimeout.current) clearTimeout(treatDropdownTimeout.current);
                setTreatDropdownOpen(true);
              }}
              onMouseLeave={() => {
                treatDropdownTimeout.current = setTimeout(() => setTreatDropdownOpen(false), 200);
              }}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 ${treatDropdownOpen ? 'ring-2 ring-primary/20 bg-primary/20' : ''}`}
                aria-haspopup="true"
                aria-expanded={treatDropdownOpen}
              >
                What We Treat
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${treatDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-72 bg-white border border-primary/10 rounded-2xl shadow-2xl z-50 transition-all duration-200 ${treatDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => {
                  if (treatDropdownTimeout.current) clearTimeout(treatDropdownTimeout.current);
                  setTreatDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  treatDropdownTimeout.current = setTimeout(() => setTreatDropdownOpen(false), 200);
                }}
                style={{ minWidth: '16rem' }}
              >
                <ul className="py-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        className="block px-6 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg font-medium transition-colors duration-150"
                        onClick={() => {
                          setTreatDropdownOpen(false);
                          const el = document.getElementById(cat.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        {cat.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Existing CTA Buttons */}
            <Button
              size="lg"
              className="rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={() => {
                const el = document.getElementById('booking');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 text-gray-600" />
            ) : (
              <Menu className="h-8 w-8 text-gray-600" />
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
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Menu Content */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-[72px] right-0 w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="p-6 space-y-4">
          {/* Mobile Dropdown */}
          <div>
            <div className="font-semibold text-primary mb-2">What We Treat</div>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-150"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById(cat.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 200);
                    }}
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Existing Mobile Buttons */}
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full px-6 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-medium">Request Callback</span>
          </Button>
          <Button
            size="lg"
            className="w-full rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            onClick={() => {
              setIsMenuOpen(false);
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 200);
            }}
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
