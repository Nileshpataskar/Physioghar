"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

export const HeroBanner = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/hero/img1.webp",
    "/hero/img2.webp",
    "/hero/img3.webp",
    "/hero/img4.webp",
    "/hero/img5.webp",
    "/hero/img6.webp",
    "/hero/img7.webp",
  ];

  // Image carousel effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Slower rotation for better UX
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Optimized animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified parallax effect
      gsap.to(".hero-parallax", {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Optimized content animation
      gsap.fromTo(
        ".hero-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative sm:mt-32 h-screen min-h-[600px] max-h-[900px] overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 flex hero-parallax rounded-2xl shadow-2xl  overflow-hidden">
        {images.map((src, idx) => (
          <div
            key={src}
            className={clsx(
              "hero-image absolute inset-0 transition-opacity duration-1000 will-change-transform",
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image
              src={src}
              alt={`Physiotherapy clinic view ${idx + 1}`}
              fill
              priority={idx === 0}
              className={cn(
                "object-cover transition-transform duration-[7000ms] ease-linear",
                idx === currentIndex ? "scale-110" : "scale-100"
              )}
            />
            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center hero-content">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
              Expertise  <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                Physiotherapy 
              </span>
              {" "}care
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
              Personalized physiotherapy care designed to help you move better, feel better, and live better. Wherever you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 sm:pt-4 px-4">
              <Button
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-base sm:text-lg font-semibold shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                onClick={() => handleScrollTo('booking')}
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                onClick={() => handleScrollTo('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              idx === currentIndex
                ? "bg-emerald-400 w-8"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 hidden lg:flex flex-col items-center gap-2 z-20 text-white/50">
        <span className="text-xs uppercase tracking-widest rotate-90 origin-right translate-x-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
};
