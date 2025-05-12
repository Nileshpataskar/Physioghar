import React, { useRef } from 'react'
import { Card } from '../ui/card'

export const Vision = () => {
        const specialtiesRef = useRef(null);

    return (
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
    )
}
