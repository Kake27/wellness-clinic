const Hero = () => {
  return (
    <section className="bg-[#f7fbfa]">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center md:text-left">
        
        <div className="max-w-2xl">
          {/* Doctor Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Dr. Anjali Karekar
          </h1>

          {/* Specialization */}
          <p className="mt-4 text-lg font-medium text-teal-700">
            Homeopathic Physician
          </p>

          {/* Tagline */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Gentle, long-term care for chronic and lifestyle conditions through
            personalized homeopathic treatment.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
            >
              Book Appointment
            </a>

            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center border border-teal-600 text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              Call Clinic
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
