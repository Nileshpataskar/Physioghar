import React from "react";
import Image from "next/image";

interface ProcessStep {
  title: string;
  description?: React.ReactNode;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description: (
      <span className="block text-sm sm:text-base text-blue-100/90 font-normal mt-2 leading-relaxed">
        • Detailed Case History
        <br />• Physical Examination
        <br />• Explanation & Assessment
      </span>
    ),
    image: "/process/consultation.jpg",
  },
  {
    title: "Treatment begins",
    description: (
      <span className="block text-sm sm:text-base text-blue-100/90 font-normal mt-2 leading-relaxed">
        • Hands-on Manual Therapy
        <br />• Targeted Exercises
        <br />• Pain Management Techniques
      </span>
    ),
    image: "/process/treatment.jpg",
  },
  {
    title: "Personalised recovery plan ",
    description: (
      <span className="block text-sm sm:text-base text-blue-100/90 font-normal mt-2 leading-relaxed">
        • Custom Exercise Program
        <br />• Home Care Instructions
        <br />• Recovery Timeline
      </span>
    ),
    image: "/process/recovery.jpg",
  },
  {
    title: "Progress Monitoring",
    description: (
      <span className="block text-sm sm:text-base text-blue-100/90 font-normal mt-2 leading-relaxed">
        • Regular Assessments
        <br />• Adjustments to Treatment
        <br />• Goal Tracking
      </span>
    ),
    image: "/process/progress.jpg",
  },
  {
    title: "Post treatment care",
    description: (
      <span className="block text-sm sm:text-base text-blue-100/90 font-normal mt-2 leading-relaxed">
        • Maintenance Exercises
        <br />• Prevention Strategies
        <br />• Follow-up Support
      </span>
    ),
    image: "/process/posttreatment.jpg",
  },
];

const FirstVisit: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white flex flex-col items-center justify-center py-14 lg:pt-24 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto w-full border border-blue-900/40 bg-blue-950/95 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 mb-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-50 mb-4 uppercase tracking-wide drop-shadow-lg">Our Process for your</h2>
          <span className="inline-block bg-blue-50/25 text-blue-50 rounded-full px-6 py-2.5 text-base sm:text-lg font-semibold tracking-wider shadow-lg backdrop-blur-sm mb-6">First Physiotherapy Visit</span>
          <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience our comprehensive approach to physiotherapy, designed to guide you through every step of your recovery journey.
          </p>
        </div>
        <div className="relative w-full flex flex-col items-center">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300/60 via-blue-400/50 to-blue-300/60 -translate-x-1/2 z-0" />
          <div className="flex flex-col w-full">
            {processSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-3 w-full min-h-[240px] gap-4 mb-6"
                >
                  {/* Left content */}
                  <div className="flex items-center justify-end pr-4">
                  {isLeft && (
                    <div className="text-right max-w-sm flex flex-col items-end space-y-3">
                      <span className="text-xs font-bold text-blue-950 bg-blue-50 rounded-full px-4 py-1.5 shadow-md">Step {idx + 1}</span>
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-50 drop-shadow-md mb-1">
                        {step.title}
                      </div>
                      <div className="my-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={240}
                          height={140}
                          className="object-cover w-[240px] h-[140px] rounded-xl shadow-xl border-2 border-blue-200/50 bg-blue-50"
                        />
                      </div>
                      <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-3 border border-blue-800/30">
                        {step.description}
                      </div>
                    </div>
                  )}
                </div>
                  {/* Timeline center column */}
                  <div className="relative flex flex-col items-center justify-center py-4">
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 rounded-full bg-blue-50 border-[3px] border-blue-300 shadow-lg ring-4 ring-blue-950/50" />
                    </div>
                    {/* Connector line (except last) */}
                    {idx !== processSteps.length - 1 && (
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 z-0"
                        style={{
                          height: "calc(100% + 1rem)",
                          width: "2px",
                          background: "linear-gradient(to bottom, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
                          minHeight: "80px",
                          top: "50%",
                        }}
                      />
                    )}
                  </div>
                  {/* Right content */}
                  <div className="flex items-center justify-start pl-4">
                    {!isLeft && (
                      <div className="text-left max-w-sm flex flex-col items-start space-y-3">
                        <span className="text-xs font-bold text-blue-950 bg-blue-50 rounded-full px-4 py-1.5 shadow-md">Step {idx + 1}</span>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-50 drop-shadow-md mb-1">
                          {step.title}
                        </div>
                        <div className="my-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={240}
                            height={140}
                            className="object-cover w-[240px] h-[140px] rounded-xl shadow-xl border-2 border-blue-200/50 bg-blue-50"
                          />
                        </div>
                        <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-3 border border-blue-800/30">
                          {step.description}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstVisit;
