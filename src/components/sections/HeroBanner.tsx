"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
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
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Optimized animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified parallax effect
      gsap.to(".hero-parallax", {
        y: "20%", // Reduced parallax amount
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Smoother scrubbing
        },
      });

      // Optimized content animation
      gsap.fromTo(
        ".hero-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          clearProps: "all" // Clean up after animation
        }
      );
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative sm:mt-32 h-[100vh] overflow-hidden"
    >
      <div className="absolute inset-0 flex hero-parallax rounded-2xl shadow-2xl overflow-hidden">
        {images.map((src, idx) => (
          <div
            key={src}
            className={clsx(
              "hero-image absolute inset-0 transition-opacity duration-1000 will-change-transform",
              idx === currentIndex ? "z-10" : "z-0"
            )}
            style={{
              opacity: idx === currentIndex ? 1 : 0,
              transform: idx === currentIndex ? "scale(1.05)" : "scale(1)",
              transition: "opacity 1s, transform 1.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <Image
              src={src}
              alt={`Hero image ${idx + 1}`}
              fill
              priority={idx === 0}
              quality={40}
              sizes="100vw"
              className="object-cover rounded-2xl"
            />
            {/* Soft gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-primary/30" />
          </div>
        ))}
        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={clsx(
                "w-3 h-3 rounded-full border-2 border-white bg-white/40 transition-all duration-300 shadow",
                idx === currentIndex && "bg-primary border-primary scale-125 shadow-lg"
              )}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-6 hero-content max-w-4xl animate-fade-in">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expertise{" "}
            <span className="text-blue-950/90 relative">
              Physiotherapy
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-blue-950/60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            Care
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Personalized Physiotherapy Care. Wherever You Are
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 rounded-full text-base"
              onClick={() => {
                const el = document.getElementById('booking');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Book Consultation
            </Button>

          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
