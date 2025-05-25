"use client"
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const HeroBanner = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
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

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  // Image carousel effect
  useEffect(() => {
    if (!imagesLoaded) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Increased interval for better performance

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, imagesLoaded]);

  // Optimized animations
  useEffect(() => {
    if (!imagesLoaded) return;

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
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <section
        ref={heroRef}
        className="relative sm:mt-20 h-[100vh] overflow-hidden bg-gray-100"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-primary">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative sm:mt-32 h-[100vh] overflow-hidden"
    >
      <div className="absolute inset-0 flex hero-parallax">
        {images.map((src, idx) => (
          <div
            key={src}
            className="hero-image absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: idx === currentIndex ? 1 : 0,
            }}
          >
            <Image
              src={src}
              alt={`Hero image ${idx + 1}`}
              fill
              priority={idx === 0}
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/30 flex items-center justify-center">
        <div className="text-center text-white p-6 hero-content max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Trusted by 1000+ patients
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Personalized{" "}
            <span className="text-primary/90 relative">
              Physiotherapy
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-primary/60"
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
            <Button size="lg" className="px-8 py-6 rounded-full text-base">
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 rounded-full text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  clipRule="evenodd"
                />
              </svg>
              Watch Video
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
