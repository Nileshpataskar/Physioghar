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
      className=" h-fit  lg:pt-24  bg-gradient-to-b from-white via-blue-50 to-blue-50 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto relative">
    
        <div className="physio-text space-y-10">
          <div className="bg-blue-950/95 p-7 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-900 max-w-4xl mx-auto flex flex-col gap-7">
            <p className="text-lg sm:text-2xl md:text-3xl text-blue-100 text-center font-regular mb-2">
              <span className="text-blue-50 font-bold">Physiotherapy</span> is a science-based healthcare profession that focuses on improving movement, function, and quality of life. Using a combination of manual therapy, targeted exercises, education, and modern equipment.
            </p>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base sm:text-lg md:text-xl text-blue-900 text-center font-semibold">
                It's not just about treating pain—it's about finding the root cause and empowering safe, sustainable recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPhysiotherapy;
