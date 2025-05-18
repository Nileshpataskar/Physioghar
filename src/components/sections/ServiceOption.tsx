import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Video } from "lucide-react";

interface ServiceOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceOption = (
  { title, description, icon }: ServiceOptionProps = {
    title: "Service Option",
    description: "Description of the service option",
    icon: <Building2 className="h-10 w-10" />,
  },
) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="rounded-full bg-primary/10 p-4 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServiceOptions = () => {
  const services = [
    {
      title: "Clinic Visit",
      description:
        "Visit our state-of-the-art clinic for personalized care in a professional setting.",
      icon: <Building2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Home Visit",
      description:
        "Receive expert physiotherapy care in the comfort of your own home.",
      icon: <Home className="h-10 w-10 text-primary" />,
    },
    {
      title: "Online Consultation",
      description:
        "Connect with our specialists virtually for guidance and treatment plans.",
      icon: <Video className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Physiotherapy, your way</h2>
          <p className="text-xl mb-4">Get Physiotherapy how you prefer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceOption
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xl font-medium text-primary italic">
            We'll support you—wherever you are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
