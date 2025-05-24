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
      <span className="block text-base text-gray-600 font-normal mt-2">
        • Detailed Case History
        <br />
        • Physical Examination
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
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-2 md:px-0 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold uppercase text-center text-primary mb-12 tracking-wide drop-shadow-sm">
        Our Process for your <br className="hidden md:block" /> First
        Physiotherapy visit
      </h2>
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 z-0" />
        <div className="flex flex-col w-full gap-0">
          {processSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative grid grid-cols-3 w-full min-h-[160px]"
              >
                {/* Left content */}
                <div className="flex items-center justify-end ">
                  {isLeft && (
                    <div className="text-right max-w-xs flex flex-col items-end">
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
                    className="w-5 h-5 rounded-full bg-white border-2 border-primary shadow-md z-10"
                    style={{ position: "relative" }}
                  />
                  {/* Connector line (except last) */}
                  {idx !== processSteps.length - 1 && (
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 z-0"
                      style={{
                        height: "100%",
                        width: "1px",
                        background:
                          "linear-gradient(to bottom, #3b82f6 0%, #e0e7ef 100%)",
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
  );
};

export default FirstVisit;
