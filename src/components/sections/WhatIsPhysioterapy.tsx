"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIsPhysiotherapy = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".physio-text",
          {
            y: 30,
            opacity: 0,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          }
        );
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="physio-text space-y-6 sm:space-y-20">
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed font-normal mb-8">
            <span className="text-primary font-bold">Physiotherapy</span> is a
            science-based healthcare profession that focuses on improving
            movement, function, and quality of life. Using a combination of
            manual therapy, targeted exercises, education, and modern equipment.
          </p>

          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-primary/10 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-primary text-center font-medium leading-relaxed">
              It's not just about treating pain—it's about finding the root
              cause of the problem and helping patients recover in a safe,
              sustainable way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPhysiotherapy;
