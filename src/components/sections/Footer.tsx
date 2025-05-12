import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const Footer = () => {
    return (
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
    )
}

export default Footer