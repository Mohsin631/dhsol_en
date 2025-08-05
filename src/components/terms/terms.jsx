import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="terms-and-conditions-page">
      <Head>
        <title>Terms and Conditions | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Terms and Conditions</h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <h2 className="terms-subtitle">Introduction</h2>
            <p>
              Welcome to DH Solution. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services. By accessing or using any part of our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Definitions</h2>
            <p>
              For the purpose of these Terms and Conditions, the following definitions apply:
            </p>
            <ul>
              <li><strong>&quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;:</strong> DH Solution, the service provider.</li>
              <li><strong>&quot;You&quot;, &quot;Your&quot;:</strong> The user or customer of DH Solution.</li>
              <li><strong>&quot;Services&quot;:</strong> Refers to all services provided by DH Solution, including software development, cybersecurity, AI solutions, and more.</li>
              <li><strong>&quot;Content&quot;:</strong> All text, graphics, logos, images, and materials provided on the website or through the services.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Services Provided</h2>
            <p>
              DH Solution offers a variety of services aimed at helping businesses thrive in the digital space. Our services include:
            </p>
            <ul>
              <li>Custom Software Development</li>
              <li>Cybersecurity Solutions</li>
              <li>Artificial Intelligence (AI) Development</li>
              <li>Cloud Services</li>
              <li>Data Analytics and Business Intelligence</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">User Responsibilities</h2>
            <p>
              As a user, you are responsible for ensuring that:
            </p>
            <ul>
              <li>Your use of our services complies with all applicable local, state, and national laws.</li>
              <li>You will not misuse the services for illegal or unauthorized purposes.</li>
              <li>You will not violate any terms, guidelines, or rules established by DH Solution for the use of our services.</li>
              <li>You will keep your account details secure and confidential.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Payment Terms</h2>
            <p>
              All services provided by DH Solution are subject to payment terms outlined in the individual contract or service agreement. Payments must be made according to the agreed-upon schedule. Late payments may incur additional fees.
            </p>
            <ul>
              <li>Payment methods: Bank Transfer, Credit Card, PayPal</li>
              <li>Invoices will be issued upon completion of services or at agreed intervals.</li>
              <li>Refunds are only available in cases where the service was not rendered as per agreement.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Privacy and Data Protection</h2>
            <p>
              DH Solution values your privacy. We collect and process personal data in accordance with our Privacy Policy, which complies with applicable privacy laws and regulations. We do not share personal data with third parties without your consent, except as required by law.
            </p>
            <p>
              For more details, please refer to our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Limitation of Liability</h2>
            <p>
              DH Solution shall not be held responsible for any direct, indirect, incidental, special, or consequential damages arising from your use of our services. This includes any loss of data, income, or damages arising from the inability to access or use our services.
            </p>
            <p>
              You agree to indemnify DH Solution against any claims arising from your misuse of the services.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Amendments to Terms</h2>
            <p>
              DH Solution reserves the right to modify, amend, or update these Terms and Conditions at any time. All changes will be posted on this page, and your continued use of the services will signify your acceptance of the updated terms.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which DH Solution operates. Any disputes arising under these Terms shall be resolved in the competent courts located in that jurisdiction.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-subtitle">Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@dhsol.net<br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
