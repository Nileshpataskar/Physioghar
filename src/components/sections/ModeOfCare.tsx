import React, { useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card } from '../ui/card';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ModeOfCare = () => {
    const modesRef = useRef(null);
    const treatmentsRef = useRef(null);

    useEffect(() => {
        // Animate each mode tab content when it scrolls into view
        ScrollTrigger.create({
            trigger: modesRef.current,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(
                    '.mode-content',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
                )
            },
            once: true,
        })

        // Animate each treatment card in a staggered grid reveal
        ScrollTrigger.create({
            trigger: treatmentsRef.current,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(
                    '.treatment-item',
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'back.out(1.7)',
                    }
                )
            },
            once: true,
        })

        // cleanup on unmount
        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div>
            <section
                id="services"
                ref={modesRef}
                className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
            >
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2"></div>
                <div className="max-w-6xl mx-auto">
                    <div className=" px-4 py-1 w-48 rounded-full bg-primary/10 mb-4 text-center block">
                        <span className="text-sm font-medium text-primary w-fit">
                            Flexible Options
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        Modes of <span className="text-primary">Care</span>
                    </h2>
                    <Tabs defaultValue="clinic" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="clinic">Clinic Visit</TabsTrigger>
                            <TabsTrigger value="home">Home Visit</TabsTrigger>
                            <TabsTrigger value="online">Online Consultation</TabsTrigger>
                        </TabsList>
                        <TabsContent value="clinic" className="mode-content">
                            <Card className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-medium mb-3">
                                            Visit Our Clinic
                                        </h3>
                                        <p className="mb-4">
                                            Experience our state-of-the-art facilities and equipment
                                            designed for optimal rehabilitation and recovery.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Modern equipment
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Comfortable environment
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Convenient location
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Flexible scheduling
                                            </li>
                                        </ul>
                                        <Button className="mt-6">Book a Clinic Visit</Button>
                                    </div>
                                    <div
                                        className="bg-cover bg-center rounded-lg"
                                        style={{
                                            backgroundImage:
                                                "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80')",
                                        }}
                                    ></div>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="home" className="mode-content">
                            <Card className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-medium mb-3">We Come to You</h3>
                                        <p className="mb-4">
                                            Receive professional physiotherapy care in the comfort of
                                            your own home, saving you time and energy.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Convenient for limited mobility
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Personalized environment
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                No travel required
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Same quality care
                                            </li>
                                        </ul>
                                        <Button className="mt-6">Schedule a Home Visit</Button>
                                    </div>
                                    <div
                                        className="bg-cover bg-center rounded-lg"
                                        style={{
                                            backgroundImage:
                                                "url('https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&q=80')",
                                        }}
                                    ></div>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="online" className="mode-content">
                            <Card className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-medium mb-3">
                                            Virtual Consultations
                                        </h3>
                                        <p className="mb-4">
                                            Connect with our physiotherapists online for assessments,
                                            follow-ups, and guided exercises.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Accessible from anywhere
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Flexible scheduling
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Regular follow-ups
                                            </li>
                                            <li className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-primary" />{" "}
                                                Guided exercise programs
                                            </li>
                                        </ul>
                                        <Button className="mt-6">Book an Online Session</Button>
                                    </div>
                                    <div
                                        className="bg-cover bg-center rounded-lg"
                                        style={{
                                            backgroundImage:
                                                "url('https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80')",
                                        }}
                                    ></div>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* What We Treat */}
            <section
                id="treatments"
                ref={treatmentsRef}
                className="py-20 px-6 md:px-10 bg-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
                <div className="max-w-6xl mx-auto">
                   
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        What We <span className="text-primary">Treat</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Back Pain",
                                image:
                                    "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800",
                            },
                            {
                                name: "Neck Pain",
                                image:
                                    "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800",

                            },
                            {
                                name: "Sports Injuries",
                                image:
                                    "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&q=80",
                            },
                            {
                                name: "Joint Pain",
                                image:
                                    "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&q=80",
                            },
                            {
                                name: "Post-Surgery",
                                image:
                                    "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=400&q=80",
                            },
                            {
                                name: "Arthritis",
                                image:
                                    "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&q=80",

                            },
                            {
                                name: "Stroke Rehab",
                                image:
                                    "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&q=80",

                            },
                            {
                                name: "Sciatica",
                                image:
                                    "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&q=80",
                            },
                        ].map((treatment, index) => (
                            <div
                                key={index}
                                className="treatment-item overflow-hidden rounded-xl shadow-md group relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                                <div
                                    className="h-40 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${treatment.image})` }}
                                ></div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-medium text-center">{treatment.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ModeOfCare