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
            sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
            quality={85}
            className="object-cover rounded-full border-4 border-primary/30 shadow-lg bg-gray-50 group-hover:border-primary/60 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200 drop-shadow-sm z-10">
        {title}
      </h3>
      {description && (
        <p className="text-gray-700 text-center text-base sm:text-lg mt-2 mb-0 z-10">
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
    <section className="relative py-16 px-2 bg-gradient-to-b from-white via-blue-50 to-white min-h-[60vh] flex flex-col items-center justify-start w-full overflow-hidden">
      {/* Decorative blurred shapes */}

      <div className="max-w-7xl mx-auto shadow-xl p-5 rounded-md px-12" >

        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none z-0"></div>
        <div className="text-center mb-12 relative z-10 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-primary drop-shadow-sm">
            Physiotherapy, your way
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Get physiotherapy how you prefer—at our clinic, at your home, or online. Choose the option that fits your lifestyle best.
          </p>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 ">
          {services.map((service, index) => (
            <ServiceOption
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
