import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
    CalendarIcon,
    ChevronRight,
    Clock,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
    const headerRef = useRef(null);
    const heroRef = useRef(null);
    const physiotherapyRef = useRef(null);
    const specialtiesRef = useRef(null);
    const valuesRef = useRef(null);
    const modesRef = useRef(null);
    const treatmentsRef = useRef(null);
    const firstVisitRef = useRef(null);
    const bookingRef = useRef(null);
    const contactRef = useRef(null);
    const [date, setDate] = React.useState<Date>();

    // Register ScrollTrigger plugin
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Header animation with subtle fade and slide
        gsap.fromTo(
            headerRef.current,
            { y: -50, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        );

        // Animate header links with staggered effect
        gsap.fromTo(
            "header nav a",
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.5,
                ease: "back.out",
            },
        );

        // Sticky header with enhanced transition
        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            endTrigger: "#footer",
            end: "bottom top",
            onEnter: () => {
                gsap.to(headerRef.current, {
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    zIndex: 100,
                    duration: 0.4,
                    ease: "power2.out",
                });
            },
            onLeaveBack: () => {
                gsap.to(headerRef.current, {
                    boxShadow: "none",
                    background: "white",
                    backdropFilter: "blur(0px)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            },
        });

        // Enhanced hero section animations with parallax effect
        const heroImages = document.querySelectorAll(".hero-image");
        gsap.to(heroImages, {
            opacity: 1,
            duration: 2,
            stagger: 4,
            repeat: -1,
            repeatDelay: 0,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Parallax effect on hero content
        gsap.fromTo(
            ".hero-content",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
        );

        // Create parallax scrolling effect
        gsap.to(".hero-parallax", {
            y: "30%",
            ease: "none",
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Enhanced physiotherapy section with floating animations
        ScrollTrigger.create({
            trigger: physiotherapyRef.current,
            start: "top 80%",
            onEnter: () => {
                // Text animation with improved flow
                gsap.fromTo(
                    ".physio-text",
                    { y: 30, opacity: 0, filter: "blur(5px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                    },
                );

                // Icon animation with bounce effect
                gsap.fromTo(
                    ".physio-icon",
                    { scale: 0, opacity: 0, rotation: -15 },
                    {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "elastic.out(1, 0.5)",
                    },
                );

                // Create subtle floating animation for icons
                gsap.to(".physio-icon", {
                    y: "-=8",
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    stagger: 0.2,
                });
            },
            once: true,
        });

        // Specialties section with grid reveal animation
        ScrollTrigger.create({
            trigger: specialtiesRef.current,
            start: "top 80%",
            onEnter: () => {
                // Title animation
                gsap.fromTo(
                    "#services h2",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                );

                // Cards reveal with staggered grid pattern
                gsap.fromTo(
                    ".specialty-card",
                    { y: 40, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.7,
                        stagger: {
                            amount: 0.8,
                            grid: "auto",
                            from: "center",
                        },
                        ease: "power2.out",
                    },
                );
            },
            once: true,
        });

        // Values section with enhanced card animations
        ScrollTrigger.create({
            trigger: valuesRef.current,
            start: "top 80%",
            onEnter: () => {
                // Title animation
                gsap.fromTo(
                    ".value-card",
                    { x: -20, opacity: 0, rotationY: 15, transformPerspective: 800 },
                    {
                        x: 0,
                        opacity: 1,
                        rotationY: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                    },
                );

                // Add subtle hover animation to value cards
                document.querySelectorAll(".value-card").forEach((card) => {
                    card.addEventListener("mouseenter", () => {
                        gsap.to(card, {
                            y: -10,
                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                            duration: 0.3,
                        });
                    });
                    card.addEventListener("mouseleave", () => {
                        gsap.to(card, {
                            y: 0,
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            duration: 0.3,
                        });
                    });
                });
            },
            once: true,
        });

        // Modes of care
        ScrollTrigger.create({
            trigger: modesRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    ".mode-content",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                );
            },
            once: true,
        });

        // Treatments section
        ScrollTrigger.create({
            trigger: treatmentsRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    ".treatment-item",
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "back.out",
                    },
                );
            },
            once: true,
        });

        // First visit section
        ScrollTrigger.create({
            trigger: firstVisitRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    ".step-item",
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                );
            },
            once: true,
        });

        // Booking section
        ScrollTrigger.create({
            trigger: bookingRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    ".booking-form",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                );
            },
            once: true,
        });

        // Contact section
        ScrollTrigger.create({
            trigger: contactRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    ".contact-info",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                );
                gsap.fromTo(
                    ".map-container",
                    { opacity: 0 },
                    { opacity: 1, duration: 1, delay: 0.5 },
                );
            },
            once: true,
        });

        // Enhanced hover animations for specialty cards
        document.querySelectorAll(".specialty-card").forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -8,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    background: "linear-gradient(to bottom right, white, #f8fafc)",
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.to(card.querySelector(".specialty-icon"), {
                    scale: 1.3,
                    rotation: 8,
                    duration: 0.4,
                    ease: "back.out",
                });
                gsap.to(card.querySelector("h3"), {
                    color: "hsl(var(--primary))",
                    duration: 0.3,
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    background: "white",
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.to(card.querySelector(".specialty-icon"), {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.to(card.querySelector("h3"), {
                    color: "inherit",
                    duration: 0.3,
                });
            });
        });

        // Hover animations for treatment items
        document.querySelectorAll(".treatment-item").forEach((item) => {
            item.addEventListener("mouseenter", () => {
                gsap.to(item, {
                    y: -10,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    duration: 0.3,
                });
            });
            item.addEventListener("mouseleave", () => {
                gsap.to(item, {
                    y: 0,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    duration: 0.3,
                });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header
                ref={headerRef}
                className="py-5 px-6 md:px-10 bg-white flex items-center justify-between transition-all duration-300 backdrop-blur-sm"
            >
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-primary flex items-center">
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
                    </div>
                    <nav className="hidden md:flex ml-10 space-x-6">
                        <a
                            href="#home"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#treatments"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            What We Treat
                        </a>
                        <a
                            href="#booking"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Book Appointment
                        </a>
                        <a
                            href="#contact"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-3">
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

            {/* Hero Banner */}
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

            {/* What Is Physiotherapy */}
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
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 physio-text">
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full physio-icon shadow-md">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Pain Management</h3>
                                    <p className="text-muted-foreground">
                                        Effective techniques to reduce and manage pain without
                                        medication.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 physio-text">
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full physio-icon shadow-md">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Mobility Improvement</h3>
                                    <p className="text-muted-foreground">
                                        Restore movement and function after injury or surgery.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 physio-text">
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full physio-icon shadow-md">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Rehabilitation</h3>
                                    <p className="text-muted-foreground">
                                        Comprehensive programs to help you return to normal
                                        activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="physio-text">
                            <p className="text-lg mb-4">
                                Physiotherapy is a healthcare profession focused on assessing,
                                diagnosing, and treating a range of conditions that affect the
                                human body's movement system.
                            </p>
                            <p className="mb-4">
                                Our physiotherapists use evidence-based techniques to help
                                patients recover from injury, reduce pain, and improve their
                                quality of life. We take a holistic approach, considering not
                                just the symptoms but the underlying causes of your condition.
                            </p>
                            <p>
                                Whether you're recovering from surgery, managing a chronic
                                condition, or seeking to improve your physical performance, our
                                team of experts will create a personalized treatment plan to
                                help you achieve your goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Specialties */}
            <section
                id="services"
                ref={specialtiesRef}
                className="py-20 px-6 md:px-10 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4">
                            <span className="text-sm font-medium text-primary">
                                Our Expertise
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Vision & <span className="text-primary">Specialties</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A place where healing begins and wellness thrives...
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Orthopaedic", icon: "🦴" },
                            { name: "Neurological", icon: "🧠" },
                            { name: "Paediatric", icon: "👶" },
                            { name: "Sports Injury", icon: "🏃" },
                            { name: "Geriatric Care", icon: "👵" },
                            { name: "Post-Surgery", icon: "🏥" },
                            { name: "Women's Health", icon: "👩" },
                            { name: "Chronic Pain", icon: "⚡" },
                        ].map((specialty, index) => (
                            <Card
                                key={index}
                                className="p-6 text-center specialty-card hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/10 relative overflow-hidden group rounded-xl bg-gradient-to-br from-white to-slate-50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-4xl mb-4 specialty-icon relative z-10">
                                    {specialty.icon}
                                </div>
                                <h3 className="font-medium relative z-10">{specialty.name}</h3>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section
                ref={valuesRef}
                className="py-20 px-6 md:px-10 bg-white relative overflow-hidden"
            >
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 mx-auto text-center block">
                        <span className="text-sm font-medium text-primary">
                            What Drives Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        Our Core <span className="text-primary">Values</span>
                    </h2>
                    <div className="flex overflow-x-auto pb-6 space-x-6">
                        {[
                            {
                                title: "Excellence",
                                description:
                                    "We strive for excellence in every treatment and interaction.",
                            },
                            {
                                title: "Compassion",
                                description:
                                    "We treat every patient with empathy and understanding.",
                            },
                            {
                                title: "Innovation",
                                description:
                                    "We continuously improve our methods and techniques.",
                            },
                            {
                                title: "Integrity",
                                description:
                                    "We maintain the highest ethical standards in our practice.",
                            },
                            {
                                title: "Patient-Centered",
                                description:
                                    "Your needs and goals are at the center of our care approach.",
                            },
                        ].map((value, index) => (
                            <Card
                                key={index}
                                className="p-6 min-w-[250px] value-card border border-transparent hover:border-primary/20 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300 relative z-10 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground relative z-10">
                                    {value.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modes of Care */}
            <section
                id="services"
                ref={modesRef}
                className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
            >
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 mx-auto text-center block">
                        <span className="text-sm font-medium text-primary">
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
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 mx-auto text-center block">
                        <span className="text-sm font-medium text-primary">
                            Our Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        What We <span className="text-primary">Treat</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Back Pain",
                                image:
                                    "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&q=80",
                            },
                            {
                                name: "Neck Pain",
                                image:
                                    "https://images.unsplash.com/photo-1614100007394-7cded4e85df7?w=400&q=80",
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
                                    "https://images.unsplash.com/photo-1616158814150-f424a433ccd5?w=400&q=80",
                            },
                            {
                                name: "Stroke Rehab",
                                image:
                                    "https://images.unsplash.com/photo-1631815588090-d4bfec5b7e7b?w=400&q=80",
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

            {/* Your First Visit */}
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

            {/* Book Your Appointment */}
            <section
                id="booking"
                ref={bookingRef}
                className="py-20 px-6 md:px-10 bg-white relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 mb-4 mx-auto text-center block">
                        <span className="text-sm font-medium text-primary">
                            Schedule Now
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        Book Your <span className="text-primary">Appointment</span>
                    </h2>
                    <Card className="p-8 booking-form rounded-xl shadow-xl border border-primary/10 bg-gradient-to-br from-white to-slate-50/50">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <Input placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mobile Number
                                </label>
                                <Input placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <Input type="email" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Preferred Mode
                                </label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Clinic Visit</option>
                                    <option>Home Visit</option>
                                    <option>Online Consultation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Preferred Date
                                </label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={"w-full justify-start text-left font-normal"}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Preferred Time
                                </label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Morning (9AM - 12PM)</option>
                                    <option>Afternoon (12PM - 4PM)</option>
                                    <option>Evening (4PM - 8PM)</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">
                                    Brief Description of Your Condition
                                </label>
                                <Textarea placeholder="Please describe your symptoms or condition..." />
                            </div>
                            <div className="md:col-span-2 text-center">
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto px-8 py-6 rounded-full text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                                >
                                    <CalendarIcon className="h-5 w-5 mr-2" /> Book Appointment
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Contact & Footer */}
            <section
                id="contact"
                ref={contactRef}
                className="py-20 px-6 md:px-10 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div className="contact-info">
                                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Address</h3>
                                            <p className="text-slate-300">
                                                123 Healing Street, Wellness District, Mumbai 400001
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-5 w-5 mr-3 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Phone</h3>
                                            <p className="text-slate-300">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="h-5 w-5 mr-3 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Email</h3>
                                            <p className="text-slate-300">care@physioghar.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="h-5 w-5 mr-3 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Hours</h3>
                                            <p className="text-slate-300">
                                                Monday - Saturday: 9AM - 8PM
                                            </p>
                                            <p className="text-slate-300">Sunday: 10AM - 2PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="map-container h-80 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651825248789!5m2!1sen!2sin"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                id="footer"
                className="bg-slate-900 text-white py-8 px-6 md:px-10"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Physio Ghar</h3>
                            <p className="text-slate-300">
                                Personalized physiotherapy care, wherever you are.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#treatments"
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        What We Treat
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#booking"
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        Book Appointment
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
                            <p className="text-slate-300 mb-4">
                                Subscribe to our newsletter for health tips and updates.
                            </p>
                            <div className="flex">
                                <Input
                                    placeholder="Your email"
                                    className="bg-slate-800 border-slate-700 text-white"
                                />
                                <Button className="ml-2">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-6 bg-slate-700" />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} Physio Ghar. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Sticky Phone Call Button */}
            <a
                href="tel:+919876543210"
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all z-50 animate-pulse hover:animate-none group"
                aria-label="Call us"
            >
                <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-125 transition-all duration-700"></div>
                <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
            </a>
        </div>
    );
};

export default Home;
