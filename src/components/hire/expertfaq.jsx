"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I post my project requirements?",
    answer:
      "Simply fill out the “Request a Quote” form above with your project details. We’ll match you with the right expert within 24 hours.",
  },
  {
    question: "Can I change experts if I’m not satisfied?",
    answer:
      "Yes! We offer a satisfaction guarantee. If you’re not happy, we’ll help you find a better match at no extra cost.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. You’ll be billed hourly or per milestone, depending on your plan.",
  },
  {
    question: "Is my project information confidential?",
    answer:
      "Absolutely. Every engagement is protected by a strict NDA and confidentiality agreement.",
  },
  {
    question: "How does support work?",
    answer:
      "Our 24/7 support team is available via live chat or email to help you at any stage of your project.",
  },
];

const ExpertFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="expert-faq">
      <div className="container">
        <h2 className="faq-heading">❓ Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="question">
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </div>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertFAQ;