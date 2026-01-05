import chronicImg from "../assets/chronic.png"
import pediatricImg from "../assets/childcare.png"
import womensHealthImg from "../assets/female.png"
import onlineConsultImg from "../assets/phone.png"

const services = [
  {
    title: "Chronic Disease Management",
    description:
      "Treatment for chronic conditions through personalized homeopathic care.",
    icon: chronicImg,
  },
  {
    title: "Pediatric Homeopathy",
    description:
      "Gentle and safe treatment options for children.",
    icon: pediatricImg,
  },
  {
    title: "Women’s Health",
    description:
      "Treatment for PCOS, hormonal imbalance, and menstrual disorders.",
    icon: womensHealthImg,
  },
  {
    title: "Online Consultation",
    description:
      "Consultations available online for follow-ups and selected cases.",
    icon: onlineConsultImg,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Our Services
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-5 items-start"
            >
              {/* Icon */}
              <div className="w-14 h-14 shrink-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-teal-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
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

export default Services;
