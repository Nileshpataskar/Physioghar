/*eslint-disabled */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate?: Date;
  accentColor?: string;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({
  targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Default: 30 days from now
  onComplete = () => console.log("Countdown completed"),
  accentColor = "#D4AF37", // Default gold color
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        onComplete(); // Will only run once
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Add onComplete to dependency array

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto bg-transparent py-4 sm:py-6 md:py-8 px-2 sm:px-4">
      <div className="flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center">
              <motion.div
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-1 sm:mb-2"
                style={{ color: accentColor }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.div>
              <motion.div
                className="text-[10px] xs:text-xs sm:text-sm tracking-widest"
                style={{ color: `${accentColor}B3` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {unit.label}
              </motion.div>
            </div>

            {index < timeUnits.length - 1 && (
              <motion.div
                className="h-8 xs:h-10 sm:h-12 w-[1px] self-start mt-1 sm:mt-2 hidden xs:block"
                style={{ backgroundColor: `${accentColor}4D` }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 32 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        className="text-center mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base italic font-light"
        style={{ color: `${accentColor}99` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.05, color: accentColor }}
      >
        Anticipate the Extraordinary
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
