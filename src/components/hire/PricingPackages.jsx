"use client";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import {
  SiShopify,
  SiIntel,
  SiAmazon,
  SiMicrosoft,
} from "react-icons/si";
import {
  FaLock,
  FaHeadset,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";

const certified = [
  { Icon: SiShopify, label: "Shopify Certified" },
  { Icon: SiIntel, label: "Intel Partner" },
  { Icon: SiAmazon, label: "Amazon AWS Certified" },

];

const features = [
  { Icon: FaLock, label: "NDA & Confidentiality" },
  { Icon: FaHeadset, label: "24/7 Support" },
  { Icon: FaCheckCircle, label: "Satisfaction Guarantee" },
  { Icon: FaUserTie, label: "Dedicated Manager" },
];

const StartingFrom = () => (
  <section className="starting-section">
    <div className="container">
      <div className="starting-wrapper">
        <div className="starting-info">
          <h2 className="starting-heading">
            Starting From <span>$20</span> per hour
          </h2>
          <p className="starting-subheading">
            Tap into top‑tier expertise on demand—flexible, affordable, and
            ready to scale with your project.
          </p>

          <div className="certified-logos">
            {certified.map(({ Icon, label }, idx) =>
              Icon ? (
                <Icon
                  key={idx}
                  title={label}
                  className="certified-icon"
                />
              ) : (
                <div key={idx} className="certified-icon fallback" title={label} />
              )
            )}
          </div>

          <ul className="feature-list">
            {features.map(({ Icon, label }, idx) => (
              <li key={idx} className="feature-item">
                <Icon className="feature-icon" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default StartingFrom;
