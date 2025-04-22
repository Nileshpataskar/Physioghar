'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedLogo from "@/components/AnimatedLogo";
import CountdownTimer from "@/components/CountdownTimer";

const Home = () => {
  const [showSignature, setShowSignature] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate target date (10 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 21);

  useEffect(() => {
    // Show signature after animation sequence (3 seconds)
    const timer = setTimeout(() => {
      setShowSignature(true);
    }, 3000);

    // Mark page as loaded
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  // Updated color scheme
  const colors = {
    background: {
      from: "#f0e9d8",
      to: "#e0d5c0",
    },
    text: "#2a1e14",
    accent: "#9c7a3c",
    highlight: "#c09a5b",
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b text-[#2a1e14]"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, ${colors.background.from}, ${colors.background.to})` 
      }}
    >
      {/* Particle Background */}
      <ParticleBackground particleColor={colors.accent} />

      {/* Initial loading overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: colors.background.from }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-light tracking-widest"
              style={{ color: colors.accent }}
            >
              PHYSIOGHAR
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-8 sm:h-12 md:h-16"
        style={{ 
          background: `linear-gradient(to right, ${colors.accent}10, ${colors.accent}20, ${colors.accent}10)` 
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-16"
        style={{ 
          background: `linear-gradient(to right, ${colors.accent}10, ${colors.accent}20, ${colors.accent}10)` 
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-12">
        {/* Logo Section */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-12 w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <AnimatedLogo 
            color={colors.text} 
            accentColor={colors.accent} 
            size={300}
          />
        </motion.div>

        {/* Coming Soon Text */}
        <motion.div
          className="mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-thin tracking-[0.15em] xs:tracking-[0.2em]"
            style={{ color: colors.highlight }}
          >
            COMING SOON
          </h1>
          <div
            className="mx-auto mt-2 sm:mt-3 h-[1px] w-32 xs:w-40 sm:w-48"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.highlight}, transparent)` 
            }}
          ></div>
        </motion.div>

        {/* Countdown Section */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16 w-full max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <CountdownTimer
            targetDate={targetDate}
            accentColor={colors.accent}
          />
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showSignature ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 text-center font-serif text-xs sm:text-sm tracking-wider sm:tracking-widest"
          style={{ color: `${colors.accent}E6` }}
        >
          <div
            className="mb-1 h-[1px] w-24 sm:w-32"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.accent}80, transparent)` 
            }}
          ></div>
          <p>Developed and Created by</p>
          <p className="mt-1 text-sm sm:text-base font-light">Nilesh and Shubham</p>
          <div
            className="mt-1 h-[1px] w-24 sm:w-32"
            style={{ 
              background: `linear-gradient(to right, transparent, ${colors.accent}80, transparent)` 
            }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
