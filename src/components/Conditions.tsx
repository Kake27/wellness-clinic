const conditions = [
  "Skin disorders",
  "Allergies & asthma",
  "Digestive problems",
  "Migraine & Headaches",
  "Pimples, Warts & Boils",
  "Urinary Tract Infections",
];

const Conditions = () => {
  return (
    <section className="bg-[#f7fbfa] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Conditions Treated
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="border border-gray-200 rounded-xl p-6 text-gray-700"
            >
              {condition}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Conditions;
