import React from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Does it have side effects?",
    answer: "No, Strongman Power Syrup is made from 100% natural herbal ingredients and is completely safe with no known side effects. It's also safe for ulcer patients."
  },
  {
    question: "How long until I see results?",
    answer: "You will feel a significant difference from the very first dose. For permanent results, we recommend using the product consistently for at least one month."
  },
  {
    question: "Is the delivery discreet?",
    answer: "Absolutely. We understand your need for privacy. Your order will be shipped in a plain, unmarked package with no indication of the contents inside."
  },
  {
    question: "How do I pay?",
    answer: "We offer payment on delivery nationwide. You only pay when you receive your product."
  },
  {
    question: "Can I use it with alcohol?",
    answer: "For best results, we recommend avoiding heavy alcohol consumption when you plan to use the syrup. Moderate consumption is generally fine."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details key={index} className="bg-gray-900 rounded-lg p-1 group" name="faq">
              <summary className="flex justify-between items-center font-semibold p-4 cursor-pointer text-lg">
                {item.question}
                <svg className="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="p-4 text-gray-300 border-t border-gray-700">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
