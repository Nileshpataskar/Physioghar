"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Vision = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-3xl mx-auto relative">
        <div
          ref={cardRef}
          className="bg-white/90 backdrop-blur-md border border-primary/10 shadow-xl rounded-2xl px-6 sm:px-10 py-10 sm:py-14 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-2">
            Our Vision
          </h2>
          <div className="w-16 h-1 bg-primary/40 rounded-full mb-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            We envision a future where every individual—regardless of age, location, or financial background—has access to affordable, physiotherapy services.
          </p>

          {/* <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-8">
            We aim to deliver comprehensive care in orthopaedic, neurological, paediatric, post surgical, women health, geriatric, sports, ergonomic, and cardio-respiratory physiotherapy.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-8">
            Our goal is to bring expert rehabilitation to every doorstep, empowering individuals to move better, live stronger, and heal faster.
          </p> */}

          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-5 sm:p-7 rounded-xl shadow border border-primary/10 max-w-2xl mx-auto mt-2">
            <p className="text-base sm:text-lg md:text-xl text-primary  text-center font-medium leading-normal">
              "A place where healing begins with kindness, movement is celebrated and every patient feels empowered to live their best life."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
