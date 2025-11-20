import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description?: React.ReactNode;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description: (
      <span className="block text-sm text-emerald-700/90 font-medium mt-2 leading-relaxed">
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
      <span className="block text-sm text-emerald-700/90 font-medium mt-2 leading-relaxed">
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
      <span className="block text-sm text-emerald-700/90 font-medium mt-2 leading-relaxed">
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
      <span className="block text-sm text-emerald-700/90 font-medium mt-2 leading-relaxed">
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
      <span className="block text-sm text-emerald-700/90 font-medium mt-2 leading-relaxed">
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
    <section className="w-full min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/50 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-950 mb-6 tracking-tight">
            Our Process for Your <span className="text-emerald-600">First Visit</span>
          </h2>
          <p className="text-emerald-800/80 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Experience our comprehensive approach to physiotherapy, designed to guide you through every step of your recovery journey with care and expertise.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end group">
                    <div className={cn(
                      "relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10 transition-transform duration-500 group-hover:scale-[1.02]",
                      !isEven && "md:order-last" // This logic is handled by flex-row-reverse, but keeping structure clear
                    )}>
                      <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-emerald-100 shadow-lg flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className={cn(
                      "flex flex-col space-y-4",
                      isEven ? "md:items-start md:text-left" : "md:items-end md:text-right"
                    )}>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-sm font-bold uppercase tracking-wider">
                        Step {idx + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
                        {step.title}
                      </h3>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        {step.description}
                      </div>
                    </div>
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

