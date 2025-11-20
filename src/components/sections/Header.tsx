"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { CalendarIcon, Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/Categories";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [treatDropdownOpen, setTreatDropdownOpen] = useState(false);
  const treatDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

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

  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);
    setTreatDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Height of sticky header
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-emerald-100/50 py-3"
          : "bg-transparent py-5"
      )}
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
              className={cn(
                "transition-all duration-300 group-hover:scale-105 object-contain",
                isScrolled ? "w-24 sm:w-28" : "w-28 sm:w-36"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Dropdown */}
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
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full font-medium transition-all duration-200",
                  treatDropdownOpen
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
                aria-haspopup="true"
                aria-expanded={treatDropdownOpen}
              >
                What We Treat
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    treatDropdownOpen ? "rotate-180" : ""
                  )}
                />
              </button>

              <AnimatePresence>
                {treatDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-emerald-100/50 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <div className="px-4 py-2 text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50/50 rounded-lg mb-1">
                        Conditions
                      </div>
                      <ul className="space-y-0.5">
                        {categories.map((cat) => (
                          <li key={cat.id}>
                            <button
                              onClick={() => handleScrollTo(cat.id)}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors duration-150 flex items-center justify-between group"
                            >
                              {cat.title}
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">→</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-primary hover:bg-primary/5 font-medium"
                onClick={() => handleScrollTo('contact')}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                className="rounded-full px-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => handleScrollTo('booking')}
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span className="font-semibold">Book Appointment</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
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
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="font-bold text-lg text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <div className="font-semibold text-primary mb-3 text-sm uppercase tracking-wider">What We Treat</div>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => handleScrollTo(cat.id)}
                          className="w-full text-left block px-4 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-150 font-medium"
                        >
                          {cat.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 space-y-3 bg-gray-50">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-primary/20 text-primary hover:bg-primary/5"
                  onClick={() => handleScrollTo('contact')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Request Callback
                </Button>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                  onClick={() => handleScrollTo('booking')}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
