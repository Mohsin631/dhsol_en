import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <Head>
        <title>Privacy Policy | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">Privacy Policy</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">Introduction</h2>
            <p>
              At DH Solution, we respect and protect your privacy. This Privacy Policy outlines the types of personal information we collect and how we use, disclose, and safeguard your data when you use our services. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Information We Collect</h2>
            <p>
              We collect various types of information to provide and improve our services:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> When you use our services, we may collect personal data such as your name, email address, phone number, and payment details.</li>
              <li><strong>Usage Data:</strong> We may collect information on how you access and use our services, including your IP address, browser type, and usage patterns.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance user experience and collect data on site usage. You can control cookie settings in your browser.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">How We Use Your Information</h2>
            <p>
              We use the collected information for various purposes, including:
            </p>
            <ul>
              <li>To provide and maintain our services.</li>
              <li>To notify you about changes to our services.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our services.</li>
              <li>To monitor the usage of our services and prevent misuse.</li>
              <li>To communicate with you, including sending marketing and promotional materials (with your consent).</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Data Sharing</h2>
            <p>
              We may share your personal information in the following situations:
            </p>
            <ul>
              <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our services, perform service-related tasks, or assist us in analyzing how our services are used.</li>
              <li><strong>For Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to legal requests.</li>
              <li><strong>Business Transfers:</strong> If DH Solution is involved in a merger, acquisition, or asset sale, your personal data may be transferred to the new owner.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Security of Data</h2>
            <p>
              We prioritize the security of your personal information. We implement a variety of security measures to maintain the safety of your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your data.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the right to access, update, delete, or restrict the use of your personal data. If you wish to exercise any of these rights, please contact us at the email provided below.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you if there are any significant changes. You are encouraged to review this Privacy Policy periodically for updates.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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
