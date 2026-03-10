import { useState } from "react";

const faqs = [
  {
    question: "Do Indians need a visa for Thailand?",
    answer:
      "Visa policies change frequently. Thailand often offers visa-free or visa-on-arrival options for Indian passport holders. We handle visa guidance and documentation as part of trip planning.",
  },
  {
    question: "What is the best time to visit Thailand?",
    answer:
      "The best time to visit Thailand is between November and early April, during the cool and dry season. This period offers pleasant weather across most regions including Bangkok, Chiang Mai, and the southern islands.",
  },
  {
    question: "Can Thailand be planned as a family-friendly destination?",
    answer:
      "Absolutely! Thailand is a fantastic family destination with a wide range of activities suitable for all ages — from cultural temple tours and elephant sanctuaries to beach resorts and cooking classes.",
  },
  {
    question: "How is a TTW Thailand itinerary different from standard tour packages?",
    answer:
      "Unlike fixed group packages, TTW itineraries are fully customized around your travel style, budget, and interests. Every stay, activity, and transfer is handpicked and can be adjusted at any time.",
  },
  {
    question: "How do I start planning my Thailand trip with TTW?",
    answer:
      "Simply click 'Plan My Trip with AI' on our homepage. Our AI will ask you a few questions about your preferences, travel dates, and group size, then generate a personalized itinerary for you.",
  },
  {
    question: "Can TTW plan Thailand trips for families or groups?",
    answer:
      "Yes! TTW specializes in group and family travel. We coordinate logistics, accommodation with multiple rooms, group activities, and ensure every member of your party has a great experience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
       
        <h2
          className="text-center font-bold text-gray-900 mb-3"
          style={{ fontSize: "2.2rem", fontFamily: "Georgia, serif" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12">
          Planning made simple with answers to your most common questions.
        </p>

   
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span
                  className="font-semibold text-gray-900 text-lg"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-gray-500 text-xl leading-none">
                  {openIndex === i ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === i && (
                <p className="text-gray-500 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}