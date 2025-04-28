
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the submission process work?",
    answer: "Artists complete your custom submission form, uploading their tracks and providing information. You receive the submissions in your dashboard, where you can review, organize, and respond to them."
  },
  {
    question: "Can I customize my submission portal?",
    answer: "Yes, you can fully customize your submission portal with your logo, colors, and branding to match your identity. You can also customize what information you collect from artists."
  },
  {
    question: "How many team members can I add?",
    answer: "The number of team members depends on your plan. Starter allows 1 user, Pro allows 5 team members, and Enterprise offers unlimited team members with role-based permissions."
  },
  {
    question: "Is there a limit to how many submissions I can receive?",
    answer: "Yes, different plans have different submission limits. The Starter plan includes up to 100 submissions per month, Pro offers 500, and Enterprise provides unlimited submissions."
  },
  {
    question: "Can I export the data from my submissions?",
    answer: "Absolutely! You can export your submission data in various formats including CSV and Excel, making it easy to use the information in other tools or for reporting."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on all our plans so you can test the platform before committing. No credit card is required to start your trial."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient gold-glow">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-gold/10 py-5 ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium text-gold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-3 text-gray-300 animate-fade-in">
                  <p>{faq.answer}</p>
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
