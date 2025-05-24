import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { categories } from "@/lib/Categories";
import Image from "next/image";

export interface ConditionItem {
    name: string;
    image: string;
    description?: string;
    treatments?: string[];
}

export interface CategoryTab {
    id: string;
    title: string;
    conditions: ConditionItem[];
}

const TreatmentCategories = () => {
    const [activeTab, setActiveTab] = useState("orthopaedic");
    const [selectedCondition, setSelectedCondition] =
        useState<ConditionItem | null>(null);


    // Animation variants for framer-motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="w-[90%] mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-primary sm:text-5xl mb-3">
                        What We Treat
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive physiotherapy for a wide range of conditions
                    </p>
                </motion.div>

                <Tabs
                    defaultValue="orthopaedic"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <div className="overflow-x-auto pb-6 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <TabsList className="inline-flex w-auto h-auto p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50">
                                {categories.map((category, index) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg transition-all duration-300"
                                    >
                                        {category.title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </motion.div>
                    </div>

                    {categories.map((category) => (
                        <TabsContent
                            key={category.id}
                            value={category.id}
                            className="mt-10"
                        >
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {category.conditions.map((condition, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Card
                                            className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 rounded-xl cursor-pointer bg-white/80 backdrop-blur-sm"
                                            onClick={() => setSelectedCondition(condition)}
                                        >
                                            <div className="aspect-w-16 aspect-h-9 relative h-52 overflow-hidden">
                                                <Image
                                                    src={condition.image}
                                                    alt={condition.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    quality={75}
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                                    <div className="p-4">
                                                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            View details
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardContent className="p-5">
                                                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-primary transition-colors duration-300">
                                                    {condition.name}
                                                </h3>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>

                {selectedCondition && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedCondition(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="relative h-64 overflow-hidden rounded-t-2xl">
                                <img
                                    src={selectedCondition.image}
                                    alt={selectedCondition.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-white">
                                            {selectedCondition.name}
                                        </h2>
                                    </div>
                                </div>
                                <button
                                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors duration-200"
                                    onClick={() => setSelectedCondition(null)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    About this condition
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    {selectedCondition.description ||
                                        "Detailed information about this condition will be available soon."}
                                </p>

                                {selectedCondition.treatments &&
                                    selectedCondition.treatments.length > 0 && (
                                        <>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                Treatment approaches
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedCondition.treatments.map((treatment, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start bg-gray-50 p-3 rounded-lg"
                                                    >
                                                        <span className="text-primary mr-2 mt-0.5">•</span>
                                                        <span className="text-gray-700">{treatment}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                <div className="mt-8 flex justify-end">
                                    <button
                                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                                        onClick={() => setSelectedCondition(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TreatmentCategories;
