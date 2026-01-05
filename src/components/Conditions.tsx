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
    <section className="bg-[#f7fbfa] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Conditions Treated
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {conditions.map((condition) => (
            <div
              key={condition.title}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <div className="h-40 w-full bg-gray-100">
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <div className="p-6 text-center">
                <p className="font-medium text-gray-800">
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
