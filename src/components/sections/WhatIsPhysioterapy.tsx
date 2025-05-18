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
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center text-primary">
                    What is Physiotherapy?
                </h2>
                <p className="text-xl text-gray-700 mb-10 text-center max-w-4xl mx-auto leading-relaxed">
                    Physiotherapy is a science-based healthcare profession that focuses
                    on improving movement, function, and quality of life. Using a
                    combination of manual therapy, targeted exercises, education, and
                    modern equipment. It's not just about treating pain—it's about
                    finding the root cause of the problem and helping patients recover
                    in a safe, sustainable way.
                </p>
            </div>
        </section>

    )
}

export default WhatIsPhysioterapy