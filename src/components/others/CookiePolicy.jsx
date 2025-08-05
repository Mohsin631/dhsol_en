import React from "react";
import Head from "next/head";

export default function CookiePolicy() {
  return (
    <div className="privacy-policy-page">
      <Head>
        <title>Cookie Policy | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">Cookie Policy</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">Introduction</h2>
            <p>
              This Cookie Policy explains how DH Solution uses cookies and similar tracking technologies when you visit our website. By using our site, you consent to the use of cookies in accordance with this policy.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your web browser. They help websites remember your preferences, improve performance, and provide analytical insights.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Types of Cookies We Use</h2>
            <p>
              DH Solution uses the following types of cookies:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the operation of our website and cannot be disabled.</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functional Cookies:</strong> Allow us to remember your preferences and enhance user experience.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> May be used to deliver relevant advertisements and track the effectiveness of marketing campaigns.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">How We Use Cookies</h2>
            <p>
              We use cookies to:
            </p>
            <ul>
              <li>Enable website functionality and navigation.</li>
              <li>Analyze site traffic and user behavior.</li>
              <li>Personalize content and user experience.</li>
              <li>Deliver and measure the effectiveness of marketing campaigns.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that disabling cookies may impact the functionality of our website.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Third-Party Cookies</h2>
            <p>
              Some cookies may be placed by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the third parties&apos; cookie policies.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page. Continued use of our website after any changes constitutes acceptance of the new policy.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@dhsol.net
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
