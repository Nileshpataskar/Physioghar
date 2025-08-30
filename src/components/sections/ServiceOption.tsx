import React from "react";
import Image from "next/image";

interface ServiceOptionProps {
  title: string;
  image: string;
  description?: string;
}

const ServiceOption = ({ title, image, description }: ServiceOptionProps) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-primary/10 rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-2xl hover:border-primary/40 p-6 sm:p-8 w-full h-full group relative overflow-hidden animate-fadein">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
      <div className="flex items-center justify-center mb-5">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
            quality={80}
            className="object-cover rounded-full border-4 border-primary/20 shadow-md bg-gray-50 group-hover:border-primary/60 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-2 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-center text-sm sm:text-base mt-1 mb-0">
          {description}
        </p>
      )}
    </div>
  );
};

const ServiceOptions = () => {
  const services = [
    {
      title: "Physiotherapy at Clinic",
      image: "/service/clinic.jpg",
      description: "Visit our modern clinic for hands-on, personalized physiotherapy sessions.",
    },
    {
      title: "Physiotherapy at Home",
      image: "/service/home.jpg",
      description: "Get expert care in the comfort of your home, ideal for convenience and recovery.",
    },
    {
      title: "Online Consultation",
      image: "/service/online.webp",
      description: "Connect with our physiotherapists virtually for advice, assessment, and exercise plans.",
    },
  ];

  return (
    <section className="py-16 px-2 bg-gradient-to-b from-white via-blue-50 to-white min-h-[60vh] flex flex-col items-center justify-start w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-primary drop-shadow-sm">
          Physiotherapy, your way
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
          Get physiotherapy how you prefer—at our clinic, at your home, or online. Choose the option that fits your lifestyle best.
        </p>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceOption
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

// Add fade-in animation
// Add this to your global CSS if not present:
// @keyframes fadein { from { opacity: 0; transform: translateY(24px);} to { opacity: 1; transform: none; } }
// .animate-fadein { animation: fadein 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }

export default ServiceOptions;
