import asthmaImg from "../assets/asthma.webp"
import digestionImg from "../assets/digestion.webp"
import headacheImg from "../assets/headache.webp"
import pimpleImg from "../assets/pimples.webp"
import skinImg from "../assets/skin-disorder.webp"
import urineImg from "../assets/urine-infection.webp"

const conditions = [
    {
    title: "Skin Disorders",
    image: skinImg,
  },
  {
    title: "Allergies & Asthma",
    image: asthmaImg,
  },
  {
    title: "Digestive Problems",
    image: digestionImg,
  },
  {
    title: "Migraine & Headaches",
    image: headacheImg,
  },
  {
    title: "Pimples, Warts & Boils",
    image: pimpleImg,
  },
  {
    title: "Urinary Tract Infections",
    image: urineImg,
  },
];

const Conditions = () => {
  return (
    <section className="bg-[#f7fbfa] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Conditions Treated
        </h2>

        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {conditions.map((condition) => (
            <div
              key={condition.title}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-36 sm:h-40 lg:h-44 w-full bg-gray-100">
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <div className="p-4 sm:p-5 lg:p-6 text-center">
                <p className="font-semibold text-sm sm:text-base text-gray-800">
                  {condition.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Conditions;
