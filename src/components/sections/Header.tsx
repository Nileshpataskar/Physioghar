import React, { useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { CalendarIcon, Phone } from 'lucide-react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        // fade  slide in header
        gsap.fromTo(
            headerRef.current,
            { y: -50, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );

        // stagger links in nav (if you add any)
        gsap.fromTo(
            'header nav a',
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'back.out' }
        );

        // sticky header on scroll
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            endTrigger: 'footer',
            end: 'bottom top',
            onEnter: () => {
                gsap.to(headerRef.current, {
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 100,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            },
            onLeaveBack: () => {
                gsap.to(headerRef.current, {
                    boxShadow: 'none',
                    background: 'transparent',
                    backdropFilter: 'blur(0px)',
                    duration: 0.3,
                    ease: 'power2.out',
                });
            },
        });
    }, []);

    return (
        <header
            ref={headerRef}
            className="py-3 px-6 md:px-10  flex sticky items-center  justify-between transition-all duration-300 "
        >
            <div className="flex items-center ">
                <div className="text-2xl font-bold text-primary flex items-center">
                    <img src='/logo.png' alt="Doctor consulting with a patient" className='w-20' />
                </div>
                {/* <div className="text-2xl font-bold text-primary flex items-center">
                    <svg
                        className="w-8 h-8 mr-2 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 4.5C16 6.433 14.433 8 12.5 8C10.567 8 9 6.433 9 4.5C9 2.567 10.567 1 12.5 1C14.433 1 16 2.567 16 4.5Z"
                            fill="currentColor"
                        />
                        <path
                            d="M5 10.5C5 11.881 3.881 13 2.5 13C1.119 13 0 11.881 0 10.5C0 9.119 1.119 8 2.5 8C3.881 8 5 9.119 5 10.5Z"
                            fill="currentColor"
                        />
                        <path
                            d="M24 10.5C24 11.881 22.881 13 21.5 13C20.119 13 19 11.881 19 10.5C19 9.119 20.119 8 21.5 8C22.881 8 24 9.119 24 10.5Z"
                            fill="currentColor"
                        />
                        <path
                            d="M5 19.5C5 20.881 3.881 22 2.5 22C1.119 22 0 20.881 0 19.5C0 18.119 1.119 17 2.5 17C3.881 17 5 18.119 5 19.5Z"
                            fill="currentColor"
                        />
                        <path
                            d="M24 19.5C24 20.881 22.881 22 21.5 22C20.119 22 19 20.881 19 19.5C19 18.119 20.119 17 21.5 17C22.881 17 24 18.119 24 19.5Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12 23C10.343 23 9 21.657 9 20V13C9 11.343 10.343 10 12 10C13.657 10 15 11.343 15 13V20C15 21.657 13.657 23 12 23Z"
                            fill="currentColor"
                        />
                    </svg>
                    Physio Ghar
                </div> */}

            </div>
            <div className="flex items-center space-x-3">
                <nav className="hidden sm:flex justify-between ml-10 space-x-6 ">
                    {/* <a
                            href="#home"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Home
                        </a> */}
                    {/* <a
                            href="#contact"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Contact
                        </a> */}
                </nav>
                <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:inline-flex rounded-full px-4 hover:bg-primary/5"
                >
                    <Phone className="h-4 w-4 mr-2" /> Request a Callback
                </Button>
                <Button
                    size="sm"
                    className="rounded-full px-4 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                    <CalendarIcon className="h-4 w-4 mr-2" /> Book an Appointment
                </Button>
            </div>
        </header>
    )
}

export default Header