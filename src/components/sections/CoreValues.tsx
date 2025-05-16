import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
    'Patient First Approach',
    'Comprehensive Assessment',
    'Quality Care',
    'Personalised Treatment',
    'Supportive Environment',
    'Functional Rehabilitation',
    'Recovery and Wellness',
    'Prevention Oriented Care',
    'Long Term Wellness',
]

const OurCoreValues: React.FC = () => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!ref.current) return
        ScrollTrigger.create({
            trigger: ref.current,
            start: 'top 75%',
            onEnter: () => {
                gsap.fromTo(
                    '.cv-item',
                    { x: (i: number) => (i % 2 === 0 ? -80 : 80), opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'power3.out',
                    }
                )
            },
            once: true,
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <section
            id="core-values"
            ref={ref}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-wide">
                    Our Core Values
                </h2>

                {/* Gold spine */}
                <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-[3px] before:bg-yellow-400/50">
                    {values.map((val, idx) => {
                        const side = idx % 2 === 0 ? 'left' : 'right'
                        return (
                            <div
                                key={idx}
                                className={`
                  cv-item
                  relative
                  mb-16
                  flex
                  w-full
                  ${side === 'left' ? 'justify-end' : 'justify-start'}
                `}
                                style={{ opacity: 0 }}
                            >
                                {/* Gold dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-400 rounded-full shadow-lg"></div>
                                {/* Card */}
                                <div
                                    className={`
                    w-5/12
                    bg-neutral-200/70
                    backdrop-blur-sm
                    border border-black/30
                    rounded-lg
                    p-8
                    ${side === 'left' ? 'text-right' : 'text-left'}
                    shadow-[0_0_15px_rgba(0,0,0,0.5)]
                  `}
                                >
                                    <span className="text-lg md:text-xl font-semibold tracking-tight">
                                        {val}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default OurCoreValues
