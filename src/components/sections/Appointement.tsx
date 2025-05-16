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
            className="py-20 px-6 md:px-10 bg-white relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="max-w-4xl mx-auto">
               
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
                                        onSelect={(d: Date | undefined) => setDate(d)}
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
    )
}
