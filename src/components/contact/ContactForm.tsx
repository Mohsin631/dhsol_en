"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    companySize: "",
    service: "",
    agree: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
      alert("Please agree to the privacy policy.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
          companySize: "",
          service: "",
          agree: false,
        });
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {status === "success" ? (
        <div className={styles.thankyou}>
          <div className={styles.checkmark}>✔</div>
          <h2>Thank you!</h2>
          <p>Your message has been successfully sent.</p>
        </div>
      ) : (
        <>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={styles.input}
          />

          <select
            name="companySize"
            required
            value={form.companySize}
            onChange={handleChange}
            className={styles.formSelect}
          >
            <option value="">Company Size</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>

          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={styles.formSelect}
          >
            <option value="">Service Interested In</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="uiux">UI/UX Design</option>
            <option value="uiux">Cyber Security</option>
            <option value="uiux">Artificial Intelligence</option>
            <option value="uiux">DevOps Solutions</option>
            <option value="uiux">QA & Testing</option>
            <option value="consulting">IT Consulting</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className={styles.checkbox}
              required
            />
            I agree to the{" "}
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.button}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className={styles.error}>Something went wrong. Try again.</p>
          )}
        </>
      )}
    </form>
  );
}
