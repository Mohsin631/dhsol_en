"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What kind of roles are available at DH Solutions?",
    answer:
      "We offer positions across development, design, strategy, marketing, and support. Check our Careers page for live roles.",
  },
  {
    question: "Do you offer remote work options?",
    answer:
      "Yes! Many of our roles are fully remote or hybrid, depending on the team and department.",
  },
  {
    question: "What does the hiring process look like?",
    answer:
      "You'll go through an initial application, a screening interview, a technical/cultural round, and final offer discussion.",
  },
  {
    question: "How can I stand out as a candidate?",
    answer:
      "Be authentic, show passion, and share examples of how you’ve solved problems or delivered results in the real world.",
  },
];

const WhiteFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq__section white">
      <div className="container">
        <h2 className="faq__heading">❓ Frequently Asked Questions</h2>
        <div className="faq__items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__card ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              <div className="faq__answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteFAQ;
