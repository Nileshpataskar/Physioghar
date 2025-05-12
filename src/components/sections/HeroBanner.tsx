import React, { useRef } from 'react'
import { Button } from '../ui/button'

export const HeroBanner = () => {
    const heroRef = useRef(null);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative h-[500px] md:h-[650px] overflow-hidden rounded-b-3xl md:rounded-b-[4rem] shadow-xl"
        >
            <div className="absolute inset-0 flex hero-parallax">
                <div
                    className="hero-image opacity-0 absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80')",
                    }}
                ></div>
                <div
                    className="hero-image opacity-0 absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80')",
                    }}
                ></div>
                <div
                    className="hero-image opacity-0 absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80')",
                    }}
                ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/30 flex items-center justify-center">
                <div className="text-center text-white p-6 hero-content max-w-4xl">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white">
                            Trusted by 1000+ patients
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Personalized{" "}
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
                        </span>{" "}
                        Care
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Wherever You Are, Whenever You Need
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
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    )
}
