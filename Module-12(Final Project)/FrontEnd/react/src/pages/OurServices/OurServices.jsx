import {
  FaShippingFast,
  FaTruck,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in major cities. Express delivery available in Dhaka within 4–6 hours.",
    icon: FaShippingFast,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district within 48–72 hours.",
    icon: FaTruck,
  },
  {
    title: "Fulfillment Solution",
    description:
      "Customized services including inventory management, order processing, packaging, and after-sales support.",
    icon: FaWarehouse,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed product safety.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate logistics solutions with warehouse and inventory support.",
    icon: FaBuilding,
  },
  {
    title: "Parcel Return",
    description:
      "Reverse logistics facility allowing customers to return or exchange products easily.",
    icon: FaUndoAlt,
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-base-content/70">
            We provide fast, reliable, and secure logistics solutions tailored
            to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group card bg-base-200 shadow-md transition-all duration-300
                           hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="card-body items-center text-center">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full
                               bg-primary/10 mb-4 transition-all duration-300
                               group-hover:bg-primary group-hover:scale-110"
                  >
                    <Icon className="text-3xl text-primary group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-lg font-semibold">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-base-content/70">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
