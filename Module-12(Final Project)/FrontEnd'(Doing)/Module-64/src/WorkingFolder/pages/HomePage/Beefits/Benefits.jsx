import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "Fast Delivery",
    description: "Get your parcels delivered quickly with our optimized logistics network ensuring minimal delays.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Secure Handling",
    description: "We ensure maximum safety of your products with careful handling and tracking at every step.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "24/7 Support",
    description: "Our support team is available around the clock to assist you with any queries or issues.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Benefits</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Discover why our service stands out and how we add value to your business.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="fade"
              className="flex flex-col md:flex-row items-center bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Left Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Divider (desktop only) */}
              <div className="hidden md:block w-px bg-gray-200 h-full"></div>

              {/* Right Content */}
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
