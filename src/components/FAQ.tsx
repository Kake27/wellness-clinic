import { useState } from "react";

const faqs = [
  {
    question: "Is homeopathy safe?",
    answer:
      "Yes. Homeopathic medicines are gentle, non-toxic, and safe when prescribed by a qualified doctor.",
  },
  {
    question: "How long does homeopathic treatment take?",
    answer:
      "The duration depends on the nature and severity of the condition. Chronic conditions may take longer than acute illnesses.",
  },
  {
    question: "Can homeopathy be taken along with allopathic medicine?",
    answer:
      "Yes. Homeopathy can usually be taken alongside allopathic treatment. Please inform the doctor about any ongoing medications.",
  },
  {
    question: "Are there any side effects of homeopathic medicines?",
    answer:
      "Homeopathic medicines are generally free from side effects when taken as prescribed.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Online consultations are available for follow-ups and selected cases.",
  },
  {
    question: "Is homeopathy suitable for children and elderly patients?",
    answer:
      "Yes. Homeopathy is safe and suitable for patients of all age groups, including children and the elderly.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <span className="text-teal-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
