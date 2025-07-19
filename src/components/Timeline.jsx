import { useState } from "react";
import React from "react";

const faqs = [
  {
    question: "What technologies do you use?",
    answer: "I use React, Tailwind CSS, JavaScript, and Git for development.",
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes, I am open to freelance opportunities. You can contact me anytime.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me through the contact form or email me directly.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer: "Yes, I provide website maintenance services to ensure your site runs smoothly.",
  },
  {
    question: "What is your experience level?",
    answer: "I have over 3 years of experience in web development, specializing in front-end technologies.",
  },
  {
    question: "Can you help with SEO optimization?",
    answer: "Yes, I can assist with basic SEO optimization to improve your site's visibility.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-sky-600">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 "
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-black">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
