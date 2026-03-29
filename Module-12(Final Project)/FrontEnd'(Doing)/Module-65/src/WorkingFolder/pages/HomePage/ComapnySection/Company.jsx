import React from "react";
import logo1 from '../../../../../../../Zap-shift-Resources-main/Zap-shift-Resources-main/assets/brands/amazon.png'
// 👉 Put your 7 logos here (import or URL)
// Example:
import logo2 from '../../../../../../../Zap-shift-Resources-main/Zap-shift-Resources-main/assets/brands/amazon_vector.png'

const logos = [
  logo1,
  logo2,
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
];

const ClientLogoSlider = () => {
  return (
    <section className="py-16 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Clients
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Trusted by leading companies across Bangladesh. We proudly deliver reliable logistics solutions to our partners.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-10">
          {/* Duplicate logos for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt="client logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSlider;
