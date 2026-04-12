"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

// 👉 replace with your real logo paths
const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
];

const LogoSlider = () => {
    return (
        <section className="bg-base-100 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Trusted by Our Clients
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">

                {/* Gradient fade edges (optional but pro look) */}
                <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-base-100 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-base-100 to-transparent z-10"></div>

                {/* Slider */}
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 20, // 👉 control speed here
                        repeat: Infinity,
                    }}
                >
                    {/* Original logos */}
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="client logo"
                                className="h-12 object-contain opacity-70 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}

                    {/* Duplicate logos (IMPORTANT for infinite effect) */}
                    {logos.map((logo, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="client logo"
                                className="h-12 object-contain opacity-70 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoSlider;