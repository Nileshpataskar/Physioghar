import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhatIsPhysioterapy = () => {
    const physiotherapyRef = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: physiotherapyRef.current,
            start: 'top 80%',
            onEnter: () => {
                // Text blocks fly in with blur
                gsap.fromTo(
                    '.physio-text',
                    { y: 30, opacity: 0, filter: 'blur(5px)' },
                    {
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power2.out',
                    }
                )

                // Icons pop in then float
                gsap.fromTo(
                    '.physio-icon',
                    { scale: 0, opacity: 0, rotation: -15 },
                    {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'elastic.out(1, 0.5)',
                        onComplete: () => {
                            // subtle floating loop
                            gsap.to('.physio-icon', {
                                y: '-=8',
                                duration: 1.5,
                                repeat: -1,
                                yoyo: true,
                                ease: 'sine.inOut',
                                stagger: 0.2,
                            })
                        },
                    }
                )
            },
            once: true,
        })

        // cleanup
        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])


    return (
        <section
            id="about"
            ref={physiotherapyRef}
            className="py-20 px-6 md:px-10 bg-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-100/50 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center relative">
                    <span className="inline-block relative">
                        What Is <span className="text-primary">Physiotherapy</span>?
                        <div className="absolute -bottom-3 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
                    </span>
                </h2>
                <div className="grid md:grid-cols gap-10">

                    <div className="physio-text">
                        <p className="text-lg mb-4">Physiotherapy is a science-based healthcare profession that focuses on improving movement, function, and quality of life. Using a combination of manual therapy, targeted exercises, education, and modern equipment.
                        </p>
                        <p className="mb-4">
                            It’s not just about treating pain—it’s about finding the root cause of the problem and helping patients recover in a safe, sustainable way.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIsPhysioterapy