import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
    CalendarIcon,
    Clock,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Youtube,
} from "lucide-react";

interface AppointmentSectionProps {
    className?: string;
}

const FirstVisit: React.FC<AppointmentSectionProps> = ({
    className = "",
}) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [time, setTime] = useState<string>("10:00");
    const [sessionMode, setSessionMode] = useState<string>("clinic");

    // Patient journey steps
    const journeySteps = [
        {
            title: "Consultation",
            description:
                "Detailed case history and physical assessment to evaluate pain, posture, movement, strength and functions with medical tests.",
        },
        {
            title: "Treatment Begins",
            description: "Initial therapy sessions based on your assessment results.",
        },
        {
            title: "Personalized Recovery Plan",
            description:
                "Your road to wellness with customized exercises and therapy.",
        },
        {
            title: "Progress Monitoring",
            description:
                "Regular evaluations and adjustments to your treatment plan.",
        },
        {
            title: "Post-treatment Care",
            description:
                "Prevention strategies and maintenance exercises for long-term health.",
        },
    ];

    return (
        <div
            className={`w-full bg-gradient-to-b from-gray-50 to-white py-24 ${className}`}
        >
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary">
                        Our Process for Your First Physiotherapy Visit
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default FirstVisit;
