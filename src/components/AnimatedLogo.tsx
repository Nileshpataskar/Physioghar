import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
  color?: string;
  accentColor?: string;
}

const AnimatedLogo = ({
  size = 300,
//   accentColor = "#D4AF37", // Gold color
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
        "0 0 5px rgba(138, 112, 71, 0.2)",
        "0 0 15px rgba(138, 112, 71, 0.4)",
        "0 0 5px rgba(138, 112, 71, 0.2)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="flex items-center justify-center bg-transparent"
      style={{ width: size, height: size }}
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={logoVariants}
        className="relative flex items-center justify-center"
      >
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            border: `2px solid #111`,
            boxShadow: `0 0 15px #111`,
          }}
          variants={pulseVariants}
          animate="pulse"
        />

        {/* Inner circle */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size * 0.8,
            height: size * 0.8,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            border: `1px solid #122e33`,
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
            style={{ color: '#111' }}
          >
            <div className="text-4xl font-light mb-2">PHYSIO</div>
            <div className="text-5xl font-medium">GHAR</div>
            <div className="text-xs mt-4 tracking-widest">PREMIUM CARE</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
