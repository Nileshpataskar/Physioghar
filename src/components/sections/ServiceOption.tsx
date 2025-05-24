import React from "react";
import Image from "next/image";

interface ServiceOptionProps {
  title: string;
  image: string;
}

const ServiceOption = ({ title, image }: ServiceOptionProps) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white border border-gray-200 rounded-2xl shadow-md transition-transform hover:scale-105 hover:shadow-xl p-6 sm:p-8 w-full h-full">
      <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-2">
        {title}
      </h3>
      <div className="flex items-center justify-center mb-5">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
            quality={75}
            className="object-cover rounded-full border-4 border-primary/20 shadow-md bg-gray-50"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceOptions = () => {
  const services = [
    {
      title: "Physiotherapy at Clinic",
      image: "/service/clinic.jpg",
    },
    {
      title: "Physiotherapy at Home",
      image: "/service/home.jpg",
    },
    {
      title: "Online Consultation",
      image: "/service/online.jpg",
    },
  ];

  return (
    <section className="py-14 px-2 bg-white min-h-screen flex flex-col items-center justify-start">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Physiotherapy, your way
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          Get Physiotherapy how you prefer
        </p>
      </div>
      <div className=" max-w-5xl grid grid-cols-1 sm:grid-cols-1 gap-8">
        {services.map((service, index) => (
          <ServiceOption
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceOptions;
