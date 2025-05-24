import React from "react";
import { ClipboardList, Users, Activity, HeartPulse, CheckCircle } from "lucide-react";

interface ProcessStep {
  title: string;
  description?: React.ReactNode;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description: (
      <span className="block text-base text-gray-600 font-normal mt-2">
        • Detailed Case History<br />
        • Physical Examination<br />
        • Explanation
      </span>
    ),
    icon: <Users className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Personalized Recovery Plan",
    icon: <ClipboardList className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Treatment begins",
    icon: <Activity className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Post treatment care",
    icon: <HeartPulse className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Progress Monitoring",
    icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
  },
];

const FirstVisit: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-2 md:px-0 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold uppercase text-center text-primary mb-12 tracking-wide drop-shadow-sm">
        Our Process for your <br className="hidden md:block" /> First Physiotherapy visit
      </h2>
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 z-0" />
        <div className="flex flex-col w-full gap-0">
          {processSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex w-full min-h-[120px] md:min-h-[140px]">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-white border-4 border-primary shadow-md" />
                </div>
                {/* Connector line (except last) */}
                {idx !== processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 z-0" style={{ height: '100%', width: '1px', background: 'linear-gradient(to bottom, #3b82f6 0%, #e0e7ef 100%)', minHeight: '60px' }} />
                )}
                {/* Step content */}
                <div className={`flex-1 flex ${isLeft ? 'justify-end pr-4' : 'justify-start pl-4'} items-center`}>
                  {isLeft ? (
                    <div className="text-right max-w-xs">
                      <div className="text-lg md:text-xl font-bold text-primary drop-shadow-sm">
                        {step.title}
                      </div>
                      {step.description}
                    </div>
                  ) : <div className="w-full max-w-xs" />}
                </div>
                <div className="flex-1 flex ${isLeft ? 'justify-start pl-4' : 'justify-end pr-4'} items-center">
                  {!isLeft ? (
                    <div className="text-left max-w-xs">
                      <div className="text-lg md:text-xl font-bold text-primary drop-shadow-sm">
                        {step.title}
                      </div>
                      {step.description}
                    </div>
                  ) : <div className="w-full max-w-xs" />}
                </div>
                {/* Icon card */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center border border-primary/10">
                    {step.icon}
                  </div>
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
