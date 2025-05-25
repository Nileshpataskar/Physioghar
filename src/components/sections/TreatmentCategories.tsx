import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/Categories";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ConditionItem {
  name: string;
  image: string;
  description?: string;
  treatments?: string[];
}

export interface CategoryTab {
  id: string;
  title: string;
  conditions: ConditionItem[];
}

const AUTO_SLIDE_INTERVAL = 2500;

const TreatmentCategories = () => {
  // Track the current slide for each category
  const [activeSlides, setActiveSlides] = useState<{ [key: string]: number }>(
    () => Object.fromEntries(categories.map((cat) => [cat.id, 0]))
  );
  const [selectedCondition, setSelectedCondition] =
    useState<ConditionItem | null>(null);
  // Track pause state for each category
  const [paused, setPaused] = useState<{ [key: string]: boolean }>(() =>
    Object.fromEntries(categories.map((cat) => [cat.id, false]))
  );

  // Auto-slide effect for each category
  useEffect(() => {
    const timers = categories.map((cat) => {
      if (paused[cat.id]) return null;
      return setInterval(() => {
        setActiveSlides((prev) => {
          const next = { ...prev };
          next[cat.id] = (next[cat.id] + 1) % cat.conditions.length;
          return next;
        });
      }, AUTO_SLIDE_INTERVAL);
    });
    return () => timers.forEach((timer) => timer && clearInterval(timer));
  }, [paused]);

  // Helper to go to next/prev slide
  const goToSlide = (catId: string, idx: number) => {
    setActiveSlides((prev) => ({ ...prev, [catId]: idx }));
    setPaused((prev) => ({ ...prev, [catId]: true }));
  };
  const goLeft = (catId: string, len: number) => {
    setActiveSlides((prev) => ({
      ...prev,
      [catId]: (prev[catId] - 1 + len) % len,
    }));
    setPaused((prev) => ({ ...prev, [catId]: true }));
  };
  const goRight = (catId: string, len: number) => {
    setActiveSlides((prev) => ({
      ...prev,
      [catId]: (prev[catId] + 1) % len,
    }));
    setPaused((prev) => ({ ...prev, [catId]: true }));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-[100%] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary sm:text-5xl mb-3">
            What We Treat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy for a wide range of conditions
          </p>
        </motion.div>

        {/* Render each category as a section with a slider */}
        {categories.map((category) => {
          const activeIndex = activeSlides[category.id] || 0;
          const activeCondition = category.conditions[activeIndex];
          return (
            <section
              key={category.id}
              className="mb-20 py-12 px-2 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 "
            >
              <h3 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-col items-center">
                <div
                  className="relative w-full max-w-2xl h-80 mb-6 group rounded-3xl shadow-2xl border-2 border-primary/10 bg-white overflow-hidden transition-all duration-300"
                  onMouseEnter={() =>
                    setPaused((prev) => ({ ...prev, [category.id]: true }))
                  }
                  onMouseLeave={() =>
                    setPaused((prev) => ({ ...prev, [category.id]: false }))
                  }
                >
                  {/* Left arrow */}
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary/90 hover:text-white text-primary rounded-full p-2 shadow-xl border border-primary/20 transition-all duration-200 scale-110 hover:scale-125"
                    onClick={() =>
                      goLeft(category.id, category.conditions.length)
                    }
                    aria-label="Previous slide"
                  >
                    <ChevronLeft />
                  </button>
                  {/* Right arrow */}
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary/90 hover:text-white text-primary rounded-full p-2 shadow-xl border border-primary/20 transition-all duration-200 scale-110 hover:scale-125"
                    onClick={() =>
                      goRight(category.id, category.conditions.length)
                    }
                    aria-label="Next slide"
                  >
                    <ChevronRight />
                  </button>
                  <motion.div
                    key={activeCondition.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
                    onClick={() => setSelectedCondition(activeCondition)}
                  >
                    <Image
                      src={activeCondition.image}
                      alt={activeCondition.name}
                      fill
                      sizes="(max-width: 900px) 100vw, (max-width: 1600px) 70vw, 50vw"
                      quality={50}
                      className="object-cover rounded-3xl shadow-2xl group-hover:scale-110 group-hover:shadow-3xl transition-transform duration-500 border-2 border-primary/10"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-3xl">
                      <h4 className="text-white text-2xl font-semibold drop-shadow-lg">
                        {activeCondition.name}
                      </h4>
                    </div>
                  </motion.div>
                </div>
                {/* Slider dots */}
                <div className="flex gap-3 justify-center mb-4">
                  {category.conditions.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-200 shadow-md ${
                        idx === activeIndex
                          ? "bg-primary border-primary scale-125 shadow-xl"
                          : "bg-white border-gray-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => goToSlide(category.id, idx)}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg text-center max-w-xl mt-2">
                  {activeCondition.description?.slice(0, 140)}
                  {activeCondition.description &&
                    activeCondition.description.length > 140 &&
                    "..."}
                </p>
              </div>
            </section>
          );
        })}

        {/* Modal for condition details */}
        {selectedCondition && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCondition(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-primary/20"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedCondition.image}
                  alt={selectedCondition.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end rounded-t-2xl">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white drop-shadow">
                      {selectedCondition.name}
                    </h2>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 bg-white/30 hover:bg-primary/80 hover:text-white text-primary rounded-full p-2 shadow-lg transition-colors duration-200"
                  onClick={() => setSelectedCondition(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  About this condition
                </h3>
                <p className="text-gray-700 mb-6">
                  {selectedCondition.description ||
                    "Detailed information about this condition will be available soon."}
                </p>

                {selectedCondition.treatments &&
                  selectedCondition.treatments.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Treatment approaches
                      </h3>
                      <ul className="space-y-3">
                        {selectedCondition.treatments.map((treatment, idx) => (
                          <li
                            key={idx}
                            className="flex items-start bg-gray-50 p-3 rounded-lg"
                          >
                            <span className="text-primary mr-2 mt-0.5">•</span>
                            <span className="text-gray-700">{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                <div className="mt-8 flex justify-end">
                  <button
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                    onClick={() => setSelectedCondition(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TreatmentCategories;
