const Contact = () => {
  return (
    <section className="bg-[#f7fbfa] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center md:text-left">
          Contact & Clinic Location
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Address</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Siddhachal Shopping Centre,<br />
                  Siddhachal Phase IV,<br />
                  Vasant Vihar, Thane West,<br />
                  Maharashtra 400610
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Phone</h3>
                <a
                  href="tel:+918850323005"
                  className="text-sm sm:text-base text-teal-700 hover:text-teal-800 font-medium transition"
                >
                  +91 8850323005
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🕒</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-3">Clinic Timings</h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-gray-700 min-w-32">Monday:</span>
                    <span>5:30 PM - 8:30 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-gray-700 min-w-32">Tue - Sat:</span>
                    <span>5:30 PM - 7:15 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-gray-700 min-w-32">Tue, Thu, Sat:</span>
                    <span>11:00 AM - 1:00 PM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 italic pt-1">
                    (Morning slots by appointment only)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Google Map */}
          <div className="w-full h-80 sm:h-96 lg:h-full lg:min-h-96 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="clinic-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.9580596726302!2d72.96469945351618!3d19.223181999727338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9668ee59d9d%3A0xd24a28fb30900a6d!2sDr%20Mehta&#39;s%20clinic%20(Gynaecologist%20%26%20Obstetrician)!5e0!3m2!1sen!2sin!4v1767522265727!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
