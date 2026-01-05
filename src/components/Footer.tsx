const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="flex flex-col items-center text-center space-y-4">

          {/* Clinic Name */}
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Wellness Homeopathy Clinic
          </h3>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-teal-200">
            <a href="tel:+918850323005" className="hover:text-white transition">
              +91 8850323005
            </a>
            <span className="hidden sm:inline">•</span>
            <p>Vasant Vihar, Thane West</p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-teal-700 my-2"></div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-teal-300">
            © {new Date().getFullYear()} Wellness Homeopathy Clinic. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
