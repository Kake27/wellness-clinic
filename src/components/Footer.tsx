const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-7">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Clinic Name */}
          <p className="text-md">
            © {new Date().getFullYear()} Wellness Homeopathy Clinic.
          </p>

          {/* Rights / Extra info */}
          <p className="text-md text-teal-200">
            All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
