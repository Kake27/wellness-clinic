const Testimonials = () => {
  return (
    <section className="bg-[#f7fbfa] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Patient Feedback
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Testimonial Card */}
          <blockquote className="relative border border-teal-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-3 left-6 text-5xl text-teal-600/20 font-serif">"</div>
            <p className="relative text-sm sm:text-base text-gray-700 leading-relaxed pt-4">
              Dr. Anjali is extremely kind and patient. She listens carefully to all concerns and creates a
              completely non-judgmental space, making it easy to speak openly. Her treatment has helped me 
              consistently over a long period, and she is truly my go-to doctor for any kind of issue.
            </p>
            <footer className="mt-5 text-xs sm:text-sm font-semibold text-teal-700">
              — Mrs. Varsha Pawar
            </footer>
          </blockquote>

          {/* Testimonial Card */}
          <blockquote className="relative border border-teal-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-3 left-6 text-5xl text-teal-600/20 font-serif">"</div>
            <p className="relative text-sm sm:text-base text-gray-700 leading-relaxed pt-4">
              The doctor is very patient and listens carefully. My child's
              condition improved steadily.
            </p>
            <footer className="mt-5 text-xs sm:text-sm font-semibold text-teal-700">
              — Parent of Pediatric Patient
            </footer>
          </blockquote>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
