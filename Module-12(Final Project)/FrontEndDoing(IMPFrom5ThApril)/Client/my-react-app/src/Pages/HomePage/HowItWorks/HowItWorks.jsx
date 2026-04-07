/* eslint-disable no-unused-vars */
"use client";
import React from "react";


import { motion } from 'framer-motion';
import { Building2, PackageCheck, Truck, Wallet } from "lucide-react";

const steps = [
    {
        title: "Booking Pick & Drop",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <Truck />,
    },
    {
        title: "Cash On Delivery",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <Wallet />,
    },
    {
        title: "Delivery Hub",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <PackageCheck />,
    },
    {
        title: "Booking SME & Corporate",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <Building2 />,
    },
];

// animation variants
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
    return (
        <section className="bg-base-200 py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    How It Works
                </motion.h2>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="relative card bg-base-100 shadow-md rounded-2xl p-6 cursor-pointer"
                        >
                            {/* Number Badge */}
                            <div className="absolute top-4 right-4 text-primary font-bold text-sm opacity-70">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Icon */}
                            <div className="mb-4">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10"
                                >
                                    <div className="text-primary w-6 h-6">
                                        {item.icon}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;