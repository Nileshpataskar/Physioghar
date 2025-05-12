import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroBanner = () => {
    const heroRef = useRef<HTMLElement>(null);
    const images = [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1200&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&q=80',


    ]; // 9-10 physiotherapy/hospital images
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [images.length]);

    useEffect(() => {
        // Parallax scroll of the images container
        gsap.to('.hero-parallax', {
            y: '30%',
            ease: 'none',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Fade & slide up the text/content
        gsap.fromTo(
            '.hero-content',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative h-[500px] md:h-[650px] overflow-hidden rounded-b-3xl md:rounded-b-[4rem] shadow-xl"
        >
            <div className="absolute inset-0 flex hero-parallax">
                {images.map((src, idx) => (
                    <div
                        key={src}
                        className="hero-image absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                        style={{
                            backgroundImage: `url('${src}')`,
                            opacity: idx === currentIndex ? 1 : 0,
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/30 flex items-center justify-center">
                <div className="text-center text-white p-6 hero-content max-w-4xl">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white">
                            Trusted by 1000+ patients
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Personalized{' '}
                        <span className="text-primary/90 relative">
                            Physiotherapy
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-2 text-primary/60"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,5 Q25,0 50,5 T100,5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </span>{' '}
                        Care
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Personalized Physiotherapy Care. Wherever You Are
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="px-8 py-6 rounded-full text-base">
                            Book Consultation
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 rounded-full text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Watch Video
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};