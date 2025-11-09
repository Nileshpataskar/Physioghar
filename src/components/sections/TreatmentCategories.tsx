import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/lib/Categories";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

// Utility to chunk array into pairs
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const TreatmentCategories = () => {
  const [activeSlides, setActiveSlides] = useState<{ [key: string]: number }>(
    () => Object.fromEntries(categories.map((cat) => [cat.id, 0]))
  );
  const [selectedCondition, setSelectedCondition] =
    useState<ConditionItem | null>(null);
  const [paused, setPaused] = useState<{ [key: string]: boolean }>(() =>
    Object.fromEntries(categories.map((cat) => [cat.id, false]))
  );
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedCondition(null);
      }
    };

    if (selectedCondition) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedCondition]);

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedCondition) {
        setSelectedCondition(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedCondition]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCondition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCondition]);

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
    <section className="bg-gradient-to-b from-white to-gray-50 py-14 sm:py-16 lg:py-24 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto border border-gray-200 bg-white rounded-3xl shadow-xl p-4 sm:p-8 lg:p-12">
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">What We Treat</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 font-normal">
            Comprehensive physiotherapy for a wide range of conditions.
          </p>
        </motion.div>

        {chunkArray(categories, 2).map((categoryPair, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex flex-col sm:flex-row gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-20 ${categoryPair.length === 1 ? 'justify-center' : ''}`}
          >
            {categoryPair.map((category) => {
              const activeIndex = activeSlides[category.id] || 0;
              const activeCondition = category.conditions[activeIndex];
              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="flex-1 bg-white border border-gray-200 shadow-md rounded-2xl sm:rounded-3xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12 flex flex-col items-center"
                  style={{ minWidth: 0 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-7 text-center tracking-tight">
                    {category.title}
                  </h3>
                  <div className="flex flex-col items-center w-full">
                    <div
                      className="relative w-full max-w-2xl h-60 sm:h-72 lg:h-80 mb-5 group rounded-2xl sm:rounded-3xl shadow border border-gray-200 bg-gray-50 overflow-hidden transition-all duration-300"
                      onMouseEnter={() => setPaused((prev) => ({ ...prev, [category.id]: true }))}
                      onMouseLeave={() => setPaused((prev) => ({ ...prev, [category.id]: false }))}
                    >
                      {/* Left arrow */}
                      <button
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-900 hover:text-white text-gray-900 rounded-full p-2 border border-gray-300 shadow-md transition-all duration-200"
                        onClick={() => goLeft(category.id, category.conditions.length)}
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      {/* Right arrow */}
                      <button
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-900 hover:text-white text-gray-900 rounded-full p-2 border border-gray-300 shadow-md transition-all duration-200"
                        onClick={() => goRight(category.id, category.conditions.length)}
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-5 h-5" />
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
                        <div className="relative w-full h-full">
                          <Image
                            src={activeCondition.image}
                            alt={activeCondition.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                            quality={85}
                            priority={activeIndex === 0}
                            className="object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-500 border border-gray-100"
                            loading={activeIndex === 0 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUND..."
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/70 to-transparent p-4 sm:p-6 rounded-b-2xl sm:rounded-b-3xl">
                          <h4 className="text-white text-xl sm:text-2xl font-semibold drop-shadow">
                            {activeCondition.name}
                          </h4>
                        </div>
                      </motion.div>
                    </div>
                    {/* Slider dots */}
                    <div className="flex gap-2 sm:gap-3 justify-center mb-3 sm:mb-4">
                      {category.conditions.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border shadow focus:outline-none transition-all duration-200 ${
                            idx === activeIndex
                              ? "bg-gray-900 border-gray-900 scale-110 shadow"
                              : "bg-gray-100 border-gray-300"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                          onClick={() => goToSlide(category.id, idx)}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-center max-w-xl mt-2 px-4 font-normal">
                      {activeCondition.description?.slice(0, 140)}
                      {activeCondition.description &&
                        activeCondition.description.length > 140 &&
                        "..."}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
        ))}

        {/* Modal for condition details */}
        <AnimatePresence>
          {selectedCondition && (
            <motion.div
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCondition(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={modalRef}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-2xl">
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedCondition.image}
                      alt={selectedCondition.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                      quality={90}
                      priority
                      className="object-cover rounded-t-2xl"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUND..."
                    />
                  </div>
                  <button
                    className="absolute top-3 right-3 bg-white/80 hover:bg-gray-900 hover:text-white text-gray-900 rounded-full p-2 border border-gray-200 shadow focus:outline-none z-10"
                    onClick={() => setSelectedCondition(null)}
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    About this condition
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg mb-4">
                    {selectedCondition.description || "Detailed information about this condition will be available soon."}
                  </p>
                  {selectedCondition.treatments && selectedCondition.treatments.length > 0 && (
                    <>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                        Treatment approaches
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedCondition.treatments.map((treatment, idx) => (
                          <li
                            key={idx}
                            className="flex items-start bg-gray-50 p-2 sm:p-3 rounded-lg text-gray-900"
                          >
                            <span className="text-gray-600 mr-2 mt-0.5">•</span>
                            <span className="text-base">
                              {treatment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="mt-6 sm:mt-8 flex justify-end">
                    <button
                      className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md text-base focus:outline-none"
                      onClick={() => setSelectedCondition(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TreatmentCategories;
