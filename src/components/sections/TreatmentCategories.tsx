import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface ConditionItem {
    name: string;
    image: string;
}

interface CategoryTab {
    id: string;
    title: string;
    conditions: ConditionItem[];
}

const TreatmentCategories = () => {
    const [activeTab, setActiveTab] = useState("orthopaedic");

    const categories: CategoryTab[] = [
        {
            id: "orthopaedic",
            title: "Orthopaedic Conditions",
            conditions: [
                {
                    name: "Cervical Pain / Headache",
                    image:
                        "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=800&q=80",
                },
                {
                    name: "Low Back Pain",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Shoulder Pain",
                    image:
                        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
                },
                {
                    name: "Elbow Pain",
                    image:
                        "https://images.unsplash.com/photo-1612957693059-13b7e8548a0b?w=800&q=80",
                },
                {
                    name: "Wrist and Hand Pain",
                    image:
                        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
                },
                {
                    name: "Hip Pain",
                    image:
                        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
                },
                {
                    name: "Knee Pain",
                    image:
                        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
                },
                {
                    name: "Ankle & Foot Pain",
                    image:
                        "https://images.unsplash.com/photo-1508387027939-27cccde53673?w=800&q=80",
                },
            ],
        },
        {
            id: "neurological",
            title: "Neurological Conditions",
            conditions: [
                {
                    name: "Stroke (Cerebrovascular Accident)",
                    image:
                        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
                },
                {
                    name: "Parkinson's Disease",
                    image:
                        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80",
                },
                {
                    name: "Head Injury",
                    image:
                        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
                },
                {
                    name: "Guillain-Barré Syndrome (GBS)",
                    image:
                        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
                },
                {
                    name: "Spinal Cord Injury",
                    image:
                        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
                },
                {
                    name: "Myasthenia Gravis",
                    image:
                        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
                },
                {
                    name: "Peripheral Neuropathy",
                    image:
                        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
                },
                {
                    name: "Bell's Palsy / Facial Palsy",
                    image:
                        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
                },
            ],
        },
        {
            id: "paediatric",
            title: "Paediatric Conditions",
            conditions: [
                {
                    name: "Cerebral Palsy",
                    image:
                        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
                },
                {
                    name: "Autism Spectrum Disorder",
                    image:
                        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
                },
                {
                    name: "ADHD",
                    image:
                        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80",
                },
                {
                    name: "Development Delay/GDD",
                    image:
                        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
                },
                {
                    name: "Spina Bifida",
                    image:
                        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
                },
                {
                    name: "Muscular Dystrophy",
                    image:
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
                },
                {
                    name: "Erb's Palsy",
                    image:
                        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
                },
                {
                    name: "Sensory Processing Disorder",
                    image:
                        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
                },
            ],
        },
        {
            id: "geriatric",
            title: "Geriatric Conditions",
            conditions: [
                {
                    name: "Osteoarthritis",
                    image:
                        "https://images.unsplash.com/photo-1556889882-73ea40694a98?w=800&q=80",
                },
                {
                    name: "Degenerative Disc Herniation",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Fall and Balance Disorder",
                    image:
                        "https://images.unsplash.com/photo-1454962561098-713ce2d54c4a?w=800&q=80",
                },
                {
                    name: "Chronic Pain Syndrome",
                    image:
                        "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=800&q=80",
                },
                {
                    name: "Chronic Low Back Pain",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
            ],
        },
        {
            id: "sports",
            title: "Sports Conditions",
            conditions: [
                {
                    name: "Rotator Cuff Tear",
                    image:
                        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
                },
                {
                    name: "Tennis Elbow",
                    image:
                        "https://images.unsplash.com/photo-1612957693059-13b7e8548a0b?w=800&q=80",
                },
                {
                    name: "ACL & PCL Injury",
                    image:
                        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
                },
                {
                    name: "Meniscal Tear",
                    image:
                        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
                },
                {
                    name: "Ankle Sprain",
                    image:
                        "https://images.unsplash.com/photo-1508387027939-27cccde53673?w=800&q=80",
                },
                {
                    name: "Hamstring Strain",
                    image:
                        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
                },
            ],
        },
        {
            id: "ergonomic",
            title: "Ergonomic Conditions",
            conditions: [
                {
                    name: "Upper Cross Syndrome",
                    image:
                        "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=800&q=80",
                },
                {
                    name: "Lower Cross Syndrome",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Forward Head Posture",
                    image:
                        "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=800&q=80",
                },
                {
                    name: "Cervicogenic Headache",
                    image:
                        "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=800&q=80",
                },
                {
                    name: "Postural Kyphosis",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Mechanical Low Back Pain",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
            ],
        },
        {
            id: "post-surgical",
            title: "Post-Surgical Conditions",
            conditions: [
                {
                    name: "Hip Replacement Surgery",
                    image:
                        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
                },
                {
                    name: "Knee Replacement Surgery",
                    image:
                        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
                },
                {
                    name: "ACL Reconstruction",
                    image:
                        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
                },
                {
                    name: "Rotator Cuff Repair",
                    image:
                        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
                },
                {
                    name: "Spinal Fusion Surgery",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Fracture Fixation",
                    image:
                        "https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=800&q=80",
                },
            ],
        },
        {
            id: "womens-health",
            title: "Women's Health",
            conditions: [
                {
                    name: "Diastasis Recti",
                    image:
                        "https://images.unsplash.com/photo-1518531933037-91b2f5582cbb?w=800&q=80",
                },
                {
                    name: "Postural Related Back Pain",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Sacroiliac/Pelvic Girdle Pain",
                    image:
                        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
                },
                {
                    name: "Joint Laxity",
                    image:
                        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
                },
                {
                    name: "Nerve Compression Syndrome",
                    image:
                        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
                },
                {
                    name: "Urinary Incontinence",
                    image:
                        "https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=800&q=80",
                },
            ],
        },
        {
            id: "cardio-respiratory",
            title: "Cardio-Respiratory Conditions",
            conditions: [
                {
                    name: "COPD",
                    image:
                        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
                },
                {
                    name: "Respiratory Muscle Weakness",
                    image:
                        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
                },
                {
                    name: "Bronchitis",
                    image:
                        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
                },
                {
                    name: "Bronchial Asthma",
                    image:
                        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
                },
                {
                    name: "Post CABG",
                    image:
                        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
                },
                {
                    name: "Post Cardiac Surgery Recovery",
                    image:
                        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
                },
            ],
        },
    ];

    return (
        <div
            className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">

            <div className="absolute top-0 left-1/4 w-72 -z-10 h-72 bg-primary/5 rounded-full -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 -z-10 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2"></div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary sm:text-5xl mb-3">
                        What We Treat
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive physiotherapy for a wide range of conditions
                    </p>
                </div>

                <Tabs
                    defaultValue="orthopaedic"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <div className="overflow-x-auto pb-6 flex justify-center">
                        <TabsList className="inline-flex w-auto h-auto p-1.5 bg-gray-100/80 rounded-xl shadow-sm border border-gray-200/50">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg transition-all duration-300"
                                >
                                    {category.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {categories.map((category) => (
                        <TabsContent
                            key={category.id}
                            value={category.id}
                            className="mt-10"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {category.conditions.map((condition, index) => (
                                    <Card
                                        key={index}
                                        className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 rounded-xl"
                                    >
                                        <div className="aspect-w-16 aspect-h-9 relative h-52 overflow-hidden">
                                            <img
                                                src={condition.image}
                                                alt={condition.name}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <CardContent className="p-5">
                                            <h3 className="font-semibold text-gray-900 text-lg group-hover:text-primary transition-colors duration-300">
                                                {condition.name}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default TreatmentCategories;
