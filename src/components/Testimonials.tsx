const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Patient Feedback
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Testimonial Card */}
          <blockquote className="border border-gray-200 rounded-2xl p-8 bg-[#f7fbfa]">
            <p className="text-gray-700 leading-relaxed">
              “I had chronic migraines and saw significant improvement within
              a few months of treatment.”
            </p>
            <footer className="mt-4 text-sm font-medium text-teal-700">
              — Patient, Age 32 (Migraine)
            </footer>
          </blockquote>

          {/* Testimonial Card */}
          <blockquote className="border border-gray-200 rounded-2xl p-8 bg-[#f7fbfa]">
            <p className="text-gray-700 leading-relaxed">
              “The doctor is very patient and listens carefully. My child’s
              condition improved steadily.”
            </p>
            <footer className="mt-4 text-sm font-medium text-teal-700">
              — Parent of Pediatric Patient
            </footer>
          </blockquote>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
