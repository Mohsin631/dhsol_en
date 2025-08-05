import Head from "next/head";

export default function AntiHumanTraffickingPolicy() {
  return (
    <div className="privacy-policy-page">
      <Head>
        <title>Anti-Human Trafficking and Slavery Policy | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">Anti-Human Trafficking and Slavery Policy</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">Introduction</h2>
            <p>
              DH Solution is committed to conducting business with integrity and in compliance with all applicable laws, including those related to human rights. This Anti-Human Trafficking and Slavery Policy outlines our commitment to preventing human trafficking and forced labor in all aspects of our operations and supply chains.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Our Commitment</h2>
            <p>
              We have zero tolerance for any form of modern slavery, including forced labor, human trafficking, and child labor. DH Solution expects all employees, contractors, suppliers, and partners to comply with this policy and all relevant laws.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Supplier and Partner Expectations</h2>
            <p>
              We require our suppliers and business partners to:
            </p>
            <ul>
              <li>Comply with all applicable anti-trafficking and labor laws.</li>
              <li>Ensure that employment is voluntary and workers are not forced or coerced.</li>
              <li>Prohibit the use of child labor and ensure legal working age compliance.</li>
              <li>Provide safe and humane working conditions.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Due Diligence</h2>
            <p>
              DH Solution conducts due diligence on suppliers and partners to assess risks related to modern slavery and human trafficking. This includes supplier assessments, compliance checks, and corrective action plans if needed.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Training and Awareness</h2>
            <p>
              We provide training to relevant staff and stakeholders to raise awareness of human trafficking and slavery risks, especially in procurement and supply chain management roles.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Reporting Violations</h2>
            <p>
              Any concerns or suspected violations of this policy should be reported immediately. DH Solution maintains a confidential reporting process and strictly prohibits retaliation against anyone who reports in good faith.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Enforcement and Accountability</h2>
            <p>
              Violations of this policy may result in disciplinary action, including termination of employment or business relationships. We take all reports seriously and investigate promptly and thoroughly.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Contact Us</h2>
            <p>
              If you have any questions or need to report a concern related to this policy, please contact us at:
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
