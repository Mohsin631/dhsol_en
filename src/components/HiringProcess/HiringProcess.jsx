"use client";
import React from "react";

const HiringProcess = () => {
  const steps = [
    {
      title: "Apply Online",
      description: "Send us your resume and tell us about your passion."
    },
    {
      title: "Initial Screening",
      description: "Our HR team will review and schedule an intro call."
    },
    {
      title: "Technical Interview",
      description: "Demonstrate your skills through real challenges."
    },
    {
      title: "Culture Fit",
      description: "Meet the team and see if our values align."
    },
    {
      title: "Offer & Onboarding",
      description: "Get your offer and start your journey with us!"
    }
  ];

  return (
    <section className="hiring__process">
      <div className="container">
        <h2 className="hiring__title">Our Hiring Process</h2>
        <div className="hiring__timeline">
          {steps.map((step, index) => (
            <div className="hiring__step" key={index}>
              <div className="hiring__circle">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="arrow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
