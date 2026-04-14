"use client";
import React from "react";
import { FaBuilding, FaClock, FaMoneyBillWave, FaSmile, FaTruck, FaWarehouse } from "react-icons/fa";

const reviewsData = [
    {
        title: "Fast Delivery",
        review: "Super quick and reliable delivery service. Highly recommended!",
        icon: <FaTruck />,
    },
    {
        title: "Cash on Delivery",
        review: "Easy and secure payment with COD option available everywhere.",
        icon: <FaMoneyBillWave />,
    },
    {
        title: "Warehouse Service",
        review: "Safe storage and fast processing of all shipments.",
        icon: <FaWarehouse />,
    },
    {
        title: "Corporate Solutions",
        review: "Perfect logistics support for our business needs.",
        icon: <FaBuilding />,
    },
    {
        title: "On-Time Service",
        review: "Always delivers on time without delays.",
        icon: <FaClock />,
    },
    {
        title: "Customer Satisfaction",
        review: "Excellent support and friendly service experience.",
        icon: <FaSmile />,
    },
];

const OurReviews = () => {
    return (
        <section className="bg-base-200 py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our Reviews
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        See what our customers say about our services. We always try to provide the best experience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviewsData.map((item, index) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl group hover:-translate-y-2"
                        >
                            <div className="card-body items-start text-left">

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl mb-4 group-hover:scale-110 transition">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>

                                {/* Review */}
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                    {item.review}
                                </p>

                                {/* Optional rating */}
                                <div className="rating rating-sm mt-3">
                                    <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurReviews;