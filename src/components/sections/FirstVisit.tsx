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
      <span className="block text-base text-gray-700 font-normal mt-2">
        • Detailed Case History
        <br />• Physical Examination
        <br />• Explanation
      </span>
    ),
    image: "/process/consultation.jpg",
  },
  {
    title: "Treatment begins",
    image: "/process/treatment.jpg",
  },
  {
    title: "Personalised recovery plan ",
    image: "/process/recovery.jpg",
  },
  {
    title: "Progress Monitoring",
    image: "/process/progress.jpg",
  },
  {
    title: "Post treatment care",
    image: "/process/posttreatment.jpg",
  },
];

const FirstVisit: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white flex flex-col items-center justify-center py-14 lg:pt-24 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto w-full border border-gray-200 bg-white rounded-3xl shadow-xl p-5 sm:p-8 lg:p-12 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide drop-shadow-sm">Our Process for your</h2>
          <span className="inline-block bg-blue-900/20 text-slate-900 rounded-full px-5 py-2 text-lg font-semibold tracking-wider shadow mb-1">First Physiotherapy Visit</span>
        </div>
        <div className="relative w-full flex flex-col items-center">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0" />
          <div className="flex flex-col w-full gap-0">
            {processSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-3 w-full min-h-[180px]"
                >
                  {/* Left content */}
                  <div className="flex items-center justify-start ">
                  {isLeft && (
                    <div className="text-right max-w-xs flex flex-col items-end">
                      <span className="text-xs font-semibold text-gray-900 bg-gray-100 rounded-full px-3 py-1 mb-2 shadow">Step {idx + 1}</span>
                      <div className="text-lg md:text-xl font-bold text-primary drop-shadow-sm mb-2">
                        {step.title}
                      </div>
                      <div className="my-2">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={200}
                          height={110}
                          className="object-cover w-[200px] h-[110px] rounded-lg shadow border border-primary/10 bg-gray-100"
                        />
                      </div>
                      {step.description}
                    </div>
                  )}
                </div>
                  {/* Timeline center column */}
                  <div className="relative flex flex-col items-center justify-center">
                    {/* Timeline dot */}
                    <div
                      className="w-5 h-5 rounded-full bg-white border-2 border-blue-900 shadow-md z-10"
                      style={{ position: "relative" }}
                    />
                    {/* Connector line (except last) */}
                    {idx !== processSteps.length - 1 && (
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 z-0"
                        style={{
                          height: "100%",
                          width: "1px",
                          background: "linear-gradient(to bottom, #172554 0%, #e5e7eb 100%)",
                          minHeight: "60px",
                          top: "50%",
                          bottom: 0,
                        }}
                      />
                    )}
                  </div>
                  {/* Right content */}
                  <div className="flex items-center justify-start ">
                    {!isLeft && (
                      <div className="text-right max-w-xs flex flex-col items-end">
                        <span className="text-xs font-semibold text-gray-900 bg-gray-100 rounded-full px-3 py-1 mb-2 shadow">Step {idx + 1}</span>
                        <div className="text-lg md:text-xl font-bold text-primary drop-shadow-sm mb-2">
                          {step.title}
                        </div>
                        <div className="my-2">
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={200}
                            height={110}
                            className="object-cover w-[200px] h-[110px] rounded-lg shadow border border-primary/10 bg-gray-100"
                          />
                        </div>
                        {step.description}
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
