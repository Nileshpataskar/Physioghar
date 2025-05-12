import React, { useRef } from 'react'

const WhatIsPhysioterapy = () => {
    const physiotherapyRef = useRef(null);

    return (
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
    )
}

export default WhatIsPhysioterapy