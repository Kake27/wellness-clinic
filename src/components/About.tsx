const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900">
          About the Doctor
        </h2>

        <p className="mt-6 max-w-3xl text-gray-600 leading-relaxed">
          Dr. Anjali Karekar is a qualified homeopathic physician, graduating from Dharwad University in B.H.M.S.
          (Reg No: 29872). She has extensive experience in treating chronic and lifestyle related conditions. <br />
          Her approach focuses on personalized, holistic, and gentle care.
        </p>

        <ul className="mt-8 space-y-2 text-gray-700">
          <li>✔ 15+ years of clinical experience</li>
          <li>✔ Individualized treatment plans</li>
          <li>✔ Safe and side-effect free medicine</li>
        </ul>

      </div>
    </section>
  );
};

export default About;
