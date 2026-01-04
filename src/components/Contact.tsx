const Contact = () => {
  return (
    <section className="bg-[#f7fbfa] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Contact & Clinic Location
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="text-gray-700 space-y-3">
            <p>📍 Address: Siddhachal Shopping Centre, Siddhachal Phase IV, Vasant Vihar, Thane West, Maharashtra 400610</p>
            <p>📞 Phone: +91 8850323005</p>
            <p>🕒 Timings: Monday 5:30 PM - 8:30 PM Tue–Sat 5:30 PM – 7:15 PM  Tue, Thu, Sat: 11AM - 1PM by appointment only</p>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 border rounded-l overflow-hidden">
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
