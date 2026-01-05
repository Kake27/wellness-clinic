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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-10 sm:mt-12 lg:mt-14 space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-teal-200 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center gap-4 p-4 sm:p-5 lg:p-6 text-left hover:bg-teal-50/50 transition-colors"
              >
                <span className="text-sm sm:text-base text-gray-800 font-medium pr-2">
                  {faq.question}
                </span>
                <span className={`text-teal-600 text-2xl shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed bg-teal-50/30">
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
