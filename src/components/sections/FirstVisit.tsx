import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FirstVisit = () => {
    const firstVisitRef = useRef(null);

    useEffect(() => {
        const triggerEl = firstVisitRef.current!
        ScrollTrigger.create({
            trigger: triggerEl,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(
                    '.step-item',
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power2.out',
                    }
                )
            },
            once: true,
        })

        return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }, [])

    return (
        <section
            ref={firstVisitRef}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
        >
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-6xl mx-auto">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 mx-auto text-center block">
                    <span className="text-sm font-medium text-primary">
                        What to Expect
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Your <span className="text-primary">First Visit</span>
                </h2>
                <div className="space-y-8">
                    {[
                        {
                            step: 1,
                            title: "Initial Assessment",
                            description:
                                "We'll discuss your medical history and current condition to understand your needs.",
                        },
                        {
                            step: 2,
                            title: "Physical Examination",
                            description:
                                "Our physiotherapist will conduct a thorough examination to identify the root cause of your problem.",
                        },
                        {
                            step: 3,
                            title: "Treatment Plan",
                            description:
                                "We'll develop a personalized treatment plan tailored to your specific needs and goals.",
                        },
                        {
                            step: 4,
                            title: "Begin Treatment",
                            description:
                                "Your first session may include initial treatment techniques to start your recovery journey.",
                        },
                        {
                            step: 5,
                            title: "Home Exercise Program",
                            description:
                                "You'll receive guidance on exercises to continue your progress at home.",
                        },
                    ].map((step, index) => (
                        <div key={index} className="flex step-item">
                            <div className="mr-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center font-bold shadow-md shadow-primary/20">
                                    {step.step}
                                </div>
                                {index < 4 && (
                                    <div className="w-0.5 h-16 bg-primary/30 mx-auto"></div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FirstVisit