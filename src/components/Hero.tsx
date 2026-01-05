const Hero = () => {
  return (
    <section className="bg-[#f7fbfa] min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 text-center md:text-left">

        <div className="max-w-2xl mx-auto md:mx-0">
          {/* Doctor Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Dr. Anjali Karekar
          </h1>

          {/* Specialization */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-medium text-teal-700">
            Homeopathic Physician
          </p>

          {/* Tagline */}
          <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Gentle, long-term care for chronic and lifestyle conditions through
            personalized homeopathic treatment.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-teal-700 transition shadow-sm hover:shadow-md"
            >
              Book Appointment
            </a>

            <a
              href="tel:+918850323005"
              className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-teal-50 transition"
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
