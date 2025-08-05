"use client";
import React from "react";
import { motion } from "framer-motion";

const officeLocations = [
  {
    flag: "🇺🇸",
    country: "USA",
    city: "New York",
    phone: "+1-888-610-5270",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇺🇸",
    country: "USA",
    city: "San Francisco",
    phone: "+1-888-610-5270",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    city: "Ottawa",
    phone: "+1-888-610-5270",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇵🇰",
    country: "Pakistan",
    city: "Islamabad",
    phone: "+92-330-7474-614",
    email: "sales@dhsol.net",
    isGlobalDeliveryOffice: true,
  },
  {
    flag: "🇰🇼",
    country: "Kuwait",
    city: "Kuwait City",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇦🇪",
    country: "UAE",
    city: "Dubai",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇦🇪",
    country: "UAE",
    city: "Abu Dhabi",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
  {
    flag: "🇸🇦",
    country: "Saudi Arabia",
    city: "Riyadh",
    phone: "+965-6613-2885",
    email: "sales@dhsol.net",
  },
];


const GlobalPresence = () => {
  return (
    <section className="global__presence">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="global__title"
        >
          Our Global Presence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="global__subtitle"
        >
          DH Solutions is expanding globally — delivering innovation across borders.
        </motion.p>

        <div className="office__grid">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              className={`office__card ${office.isGlobalDeliveryOffice ? "highlight" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flag">{office.flag}</div>
              <h3>{office.country}</h3>
              <p><strong>City:</strong> {office.city}</p>
              <p><strong>Phone:</strong> {office.phone}</p>
              <p><strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a></p>
              {office.isGlobalDeliveryOffice && (
                <span className="badge">Global Delivery Office</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
