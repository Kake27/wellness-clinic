const Services = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Our Services
        </h2>

        <div className="mt-10 space-y-8 max-w-4xl">

          <div>
            <h3 className="text-xl font-semibold text-teal-700">
              Chronic Disease Management
            </h3>
            <p className="mt-2 text-gray-600">
              Long-term treatment for chronic conditions through personalized
              homeopathic care.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-700">
              Pediatric Homeopathy
            </h3>
            <p className="mt-2 text-gray-600">
              Gentle and safe treatment options for children.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-700">
              Women’s Health
            </h3>
            <p className="mt-2 text-gray-600">
              Treatment for PCOS, hormonal imbalance, and menstrual disorders.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
