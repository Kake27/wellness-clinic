const About = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="max-w-3xl mx-auto md:mx-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            About the Doctor
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Dr. Anjali Karekar is a qualified homeopathic physician, graduating from Dharwad University in B.H.M.S.
            (Reg No: 29872). She has extensive experience in treating chronic and lifestyle related conditions.
          </p>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Her approach focuses on personalized, holistic, and gentle care.
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <span className="text-teal-600 text-xl shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">15+ Years</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Clinical Experience</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <span className="text-teal-600 text-xl shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Personalized</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Treatment Plans</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <span className="text-teal-600 text-xl shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Safe & Gentle</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">No Side Effects</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
