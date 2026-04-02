
import { FaTruck, FaGlobeAsia, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndo } from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruck />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaGlobeAsia />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo />,
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-gray-500 mb-12">
          We provide fast, reliable, and secure logistics solutions tailored to your needs. Whether it's local delivery or nationwide service, we've got you covered.
        </p>

        {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="card-title text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
