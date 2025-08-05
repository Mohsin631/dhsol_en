"use client";
import React from "react";
import { FaBullhorn, FaSearch, FaHandshake, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaBullhorn />,
    title: "Post Your Requirement",
    desc: "Tell us exactly what you need — skillset, budget, timeline.",
  },
  {
    icon: <FaSearch />,
    title: "Review Expert Profiles",
    desc: "Browse detailed profiles, ratings, and past work samples.",
  },
  {
    icon: <FaHandshake />,
    title: "Hire & Collaborate",
    desc: "Connect, chat, and kick off your project with your chosen expert.",
  },
  {
    icon: <FaRocket />,
    title: "Launch Your Project",
    desc: "Go live confidently with a vetted professional at the helm.",
  },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <h2 className="hiw__heading">How It Works</h2>
      <div className="hiw__steps">
        {steps.map((step, i) => (
          <div key={i} className="hiw__step">
            <div className="hiw__icon">{step.icon}</div>
            <h3 className="hiw__title">{step.title}</h3>
            <p className="hiw__desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
