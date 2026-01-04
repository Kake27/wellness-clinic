const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Doctor Name */}
        <h2 className="text-xl font-semibold text-teal-700">
          Wellness Homeopathy Clinic
        </h2>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-teal-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#conditions" className="hover:text-teal-600 transition">
              Conditions
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-teal-600 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-teal-600 transition">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-teal-600 transition">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
