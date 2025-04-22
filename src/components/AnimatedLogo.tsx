import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
  color?: string;
  accentColor?: string;
}

const AnimatedLogo = ({
  size = 300,
  accentColor = "#D4AF37", // Default gold color
  color = "#111",
}: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance of the logo for a more dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Pulse animation for the outer ring
  const pulseVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      opacity: [0.8, 0.95, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Shimmer animation for the text
  const shimmerVariants = {
    shimmer: {
      opacity: [0.7, 1, 0.7],
      textShadow: [
        `0 0 5px ${accentColor}33`,
        `0 0 15px ${accentColor}66`,
        `0 0 5px ${accentColor}33`,
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Rotate animation for decorative elements
  const rotateVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex items-center justify-center bg-transparent w-full">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={logoVariants}
        className="relative flex items-center justify-center"
        style={{ width: '100%', maxWidth: size, height: 'auto', aspectRatio: '1/1' }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute rounded-full opacity-20"
          style={{
            width: '95%',
            height: '95%',
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative rotating ring */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{
            border: `1px dashed ${accentColor}80`,
            borderRadius: '50%',
          }}
          variants={rotateVariants}
          animate="rotate"
        />

        {/* Outer pulsing ring */}
        <motion.div
          className="absolute rounded-full w-full h-full"
          style={{
            border: `2px solid ${accentColor}`,
            boxShadow: `0 0 15px ${accentColor}80`,
          }}
          variants={pulseVariants}
          animate="pulse"
        />

        {/* Inner circle */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '80%',
            height: '80%',
            background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
            border: `1px solid ${accentColor}40`,
            boxShadow: `inset 0 0 20px rgba(0,0,0,0.05)`,
          }}
        />

        {/* Logo text */}
        <motion.div
          className="text-center z-10"
          variants={shimmerVariants}
          animate="shimmer"
        >
          <div
            className="font-serif tracking-wider"
            style={{ color: color }}
          >
            <div className="text-2xl xs:text-3xl sm:text-4xl font-light mb-1 sm:mb-2">PHYSIO</div>
            <div className="text-3xl xs:text-4xl sm:text-5xl font-medium" style={{ color: accentColor }}>GHAR</div>
            <div 
              className="text-[10px] xs:text-xs mt-2 sm:mt-4 tracking-widest"
              style={{ color: `${color}99` }}
            >
              PREMIUM CARE
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
