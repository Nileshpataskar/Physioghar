import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Static import of Lucide icons (keeps chunks smaller than one big bundle)
// Only import the icons you actually use:
import {
    Heart,
    ClipboardCheck,
    Star,
    UserCheck,
    Home,
    Activity,
    Smile,
    Shield,
    Infinity,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CoreValue {
    title: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const values: CoreValue[] = [
    { title: 'Patient First Approach', Icon: Heart },
    { title: 'Comprehensive Assessment', Icon: ClipboardCheck },
    { title: 'Quality Care', Icon: Star },
    { title: 'Personalised Treatment', Icon: UserCheck },
    { title: 'Supportive Environment', Icon: Home },
    { title: 'Functional Rehabilitation', Icon: Activity },
    { title: 'Recovery and Wellness', Icon: Smile },
    { title: 'Prevention Oriented Care', Icon: Shield },
    { title: 'Long Term Wellness', Icon: Infinity },
];

const OurCoreValues: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);


    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-3 text-center text-primary">
                    Our Core Values
                </h2>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                    The principles that guide our approach to patient care and recovery
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map(({ title, Icon }, index) => (
                        <div
                            key={index}
                            // Add .cv-item so GSAP can grab these
                            className="cv-item bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-primary/20 hover:bg-gray-50/50"
                        >
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurCoreValues;
