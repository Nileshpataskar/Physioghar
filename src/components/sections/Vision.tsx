import React, { useRef } from 'react'
import { Card } from '../ui/card'

export const Vision = () => {
    const specialtiesRef = useRef(null);

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center text-primary">
                    Vision of PhysioGhar
                </h2>
                <p className="text-xl text-gray-700 mb-6 text-center max-w-4xl mx-auto leading-relaxed">
                    We envision a future where every individual—regardless of age,
                    location, or financial background—has access to affordable,
                    physiotherapy services. We aim to deliver comprehensive care in
                    orthopaedic, neurological, paediatric, post surgical, women health,
                    geriatric, sports, ergonomic, and cardio-respiratory physiotherapy.
                    Our goal is to bring expert rehabilitation to every doorstep,
                    empowering individuals to move better, live stronger, and heal
                    faster.
                </p>
                <p className="text-xl text-primary italic text-center max-w-4xl mx-auto font-medium">
                    "A place where healing begins with kindness, movement is celebrated
                    and every patient feels empowered to live their best life."
                </p>
            </div>
        </section>
    )
}
