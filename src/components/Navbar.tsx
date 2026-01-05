import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Doctor Name */}
          <h2 className="text-lg sm:text-xl font-semibold text-teal-700">
            Wellness Homeopathy
          </h2>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-gray-600 font-medium text-sm">
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

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-block bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
          >
            Book Appointment
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block py-2 text-gray-600 hover:text-teal-600 transition font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#conditions"
                  onClick={closeMenu}
                  className="block py-2 text-gray-600 hover:text-teal-600 transition font-medium"
                >
                  Conditions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block py-2 text-gray-600 hover:text-teal-600 transition font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={closeMenu}
                  className="block py-2 text-gray-600 hover:text-teal-600 transition font-medium"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={closeMenu}
                  className="block py-2 text-gray-600 hover:text-teal-600 transition font-medium"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block py-2 text-gray-600 hover:text-teal-600 transition font-medium"
                >
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block w-full text-center bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
