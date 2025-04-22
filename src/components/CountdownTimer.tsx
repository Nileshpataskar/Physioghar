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
  }, [targetDate]); // <-- removed `onComplete`

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto bg-transparent py-8 px-4">
      <div className="flex justify-center items-center space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center">
              <motion.div
                className="text-4xl md:text-6xl font-light text-[#D4AF37] mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.div>
              <motion.div
                className="text-xs md:text-sm tracking-widest text-[#D4AF37]/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {unit.label}
              </motion.div>
            </div>

            {index < timeUnits.length - 1 && (
              <motion.div
                className="h-12 w-[1px] self-start mt-2"
                style={{ backgroundColor: `${accentColor}4D` }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 48 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        className="text-center mt-8 text-sm md:text-base italic font-light"
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
