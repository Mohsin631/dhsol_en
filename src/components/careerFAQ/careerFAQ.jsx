"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What positions are currently open?",
    answer:
      "You can view all open positions on our Careers page. We regularly update listings based on our hiring needs.",
  },
  {
    question: "Do you offer remote roles?",
    answer:
      "Yes, many of our roles are fully remote or offer hybrid flexibility depending on the department.",
  },
  {
    question: "What does your interview process look like?",
    answer:
      "Our process usually includes an application review, one or more interviews, and a culture-fit conversation.",
  },
  {
    question: "How should I prepare for the interview?",
    answer:
      "Be yourself, know our values, and be ready to demonstrate your passion and skills with real-world thinking.",
  },
];

const CareerFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="career__faq">
      <div className="container">
        <h2 className="career__faq-title">Frequently Asked Questions</h2>
        <div className="career__faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                {faq.question}
                <span className="faq__icon">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq__answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;
