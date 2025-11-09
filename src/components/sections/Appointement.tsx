import React, { useRef, useState } from 'react'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import { Calendar } from '../ui/calendar'
import { format } from 'date-fns'

export const Appointement = () => {
    const [date, setDate] = useState<Date>();
    const bookingRef = useRef(null);

    return (
        <section
            id="booking"
            ref={bookingRef}
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-2xl opacity-15"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl opacity-15"></div>
            <div className="max-w-6xl px-40 mx-auto shadow-xl p-5 rounded-md ">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">
                    Book Your Appointment
                </h2>
                <Card className="p-8 booking-form rounded-2xl shadow-lg border border-primary/5 bg-gradient-to-br from-white to-slate-50">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Full Name
                            </label>
                            <Input placeholder="John Doe" className="rounded-lg border border-gray-200 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 bg-white transition-all duration-200" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Mobile Number
                            </label>
                            <Input placeholder="+91 98765 43210" className="rounded-lg border border-gray-200 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 bg-white transition-all duration-200" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Email Address
                            </label>
                            <Input type="email" placeholder="you@example.com" className="rounded-lg border border-gray-200 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 bg-white transition-all duration-200" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Preferred Mode
                            </label>
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                                <option>Clinic Visit</option>
                                <option>Home Visit</option>
                                <option>Online Consultation</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Preferred Date
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={"w-full justify-start text-left font-normal rounded-lg border-gray-200 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 bg-white transition-all duration-200"}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={(d: Date | undefined) => setDate(d)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Preferred Time
                            </label>
                            <select className="w-full p-2 border border-gray-200 rounded-lg bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                                <option>Morning (9AM - 12PM)</option>
                                <option>Afternoon (12PM - 4PM)</option>
                                <option>Evening (4PM - 8PM)</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                                Brief Description of Your Condition
                            </label>
                            <Textarea placeholder="Please describe your symptoms or condition..." className="rounded-lg border border-gray-200 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 bg-white transition-all duration-200" />
                        </div>
                        <div className="md:col-span-2 text-center mt-4">
                            <Button
                                size="lg"
                                className="w-full md:w-auto px-8 py-4 rounded-full text-base bg-gradient-to-r from-primary/90 to-primary shadow-md hover:from-primary hover:to-primary/90 transition-all duration-200 shadow-primary/10 hover:shadow-primary/20"
                            >
                                <CalendarIcon className="h-5 w-5 mr-2" /> Book Appointment
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
