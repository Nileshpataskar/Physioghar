"use client";

import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const triggerEl = contactRef.current!

        ScrollTrigger.create({
            trigger: triggerEl,
            start: 'top 80%',
            onEnter: () => {
                // Fade in the contact info blocks
                gsap.fromTo(
                    '.contact-info',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
                )
                // Fade in the map
                gsap.fromTo(
                    '.map-container',
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: 'power2.out' }
                )
            },
            once: true,
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <section id="contact"
            ref={contactRef}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                        <div className="contact-info">
                            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                            <div className="mb-6 pb-4 border-b border-slate-700/50 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                                <div className="flex items-center gap-3">
                                    <p className="text-white text-xl font-semibold">Dr. Prashant Shahi <span className="font-normal text-base text-slate-300">(PT)</span></p>
                                </div>
                                <span className="hidden sm:block w-1 h-6 bg-slate-600 rounded-full" />
                                <div className="flex items-center gap-3">
                                    <p className="text-white text-xl font-semibold">Dr. Yogesh Kalassua <span className="font-normal text-base text-slate-300">(PT)</span></p>
                                </div>
                                
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-slate-300">
                                            1st floor, Jasraj Goodwill, HDFC bank lane, opp. Giriraj heights, Ambre colony, Parande Nagar, Dighi, Pune, Pimpri-Chinchwad, Maharashtra 411015
                                        </p>
                                    </div>
                                </div>
                               
                                <div className="flex items-start space-x-6">
                                    {/* Phone */}
                                    <div className="flex items-start">
                                        <Phone className="h-5 w-5 mr-3 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Phone</h3>
                                            <p className="text-slate-300">+91 8329567219</p>
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="flex items-start">
                                        <Mail className="h-5 w-5 mr-3 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Email</h3>
                                            <p className="text-slate-300">physioghar01@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 mr-3 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Hours</h3>
                                        <p className="text-slate-300">
                                            Monday - Saturday: : 9 AM to 9 PM
                                        </p>
                                        <p className="text-slate-300">Sunday: By Appointment only</p>
                                    </div>
                                </div>
                        <div className="contact-info">
                            <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {/* WhatsApp */}
                                <a
                                    href="#"
                                    className="bg-green-500/20 hover:bg-green-500/40 text-green-600 p-2 rounded-full transition-colors"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp className="w-5 h-5 text-green-500" />
                                </a>
                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="map-container h-80 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9870799068926!2d73.87290381077284!3d18.619650882420167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7000807fd0f%3A0x7868dab89e705819!2sJasraj%20Goodwill!5e0!3m2!1sen!2sin!4v1756545462386!5m2!1sen!2sin"
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
    )
}
