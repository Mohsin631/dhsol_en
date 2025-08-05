
import Head from "next/head";

export default function GlobalAIPolicy() {
  return (
    <div className="privacy-policy-page">
      <Head>
        <title>Global AI Policy | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">Global AI Policy</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">Introduction</h2>
            <p>
              At DH Solution, we are committed to the responsible and ethical development, deployment, and use of Artificial Intelligence (AI). This Global AI Policy outlines our approach to ensuring that AI technologies are used in a way that respects human rights, enhances transparency, and promotes accountability across all regions where we operate.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Principles of Responsible AI</h2>
            <p>
              We adhere to the following guiding principles to ensure our AI practices are ethical and responsible:
            </p>
            <ul>
              <li><strong>Fairness:</strong> AI systems should be free from bias and discrimination and treat all individuals equally.</li>
              <li><strong>Transparency:</strong> We commit to making our AI systems understandable and their decisions explainable to users where possible.</li>
              <li><strong>Accountability:</strong> We take full responsibility for the AI systems we build and deploy, ensuring human oversight is maintained.</li>
              <li><strong>Privacy:</strong> Personal data used in AI systems is protected in compliance with applicable data protection laws.</li>
              <li><strong>Security:</strong> AI systems are built with strong safeguards to prevent misuse and unauthorized access.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">AI Development and Use</h2>
            <p>
              Our AI development process incorporates rigorous testing and validation to minimize risks and unintended consequences. We prioritize building AI that enhances human capabilities and avoids harm.
            </p>
            <ul>
              <li>AI is used to support innovation, automate processes, and improve user experiences.</li>
              <li>AI systems are tested for accuracy, reliability, and fairness before deployment.</li>
              <li>Human oversight is integrated into critical AI applications, especially those involving significant decisions about people.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Collaboration and Compliance</h2>
            <p>
              We collaborate with global stakeholders including regulators, researchers, and civil society organizations to align our AI practices with emerging international standards and laws.
            </p>
            <ul>
              <li><strong>Regulatory Alignment:</strong> Our AI systems comply with national and international laws regarding data protection, consumer rights, and AI usage.</li>
              <li><strong>Cross-border Cooperation:</strong> We support interoperability and the sharing of best practices in AI governance worldwide.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Risk Management and Review</h2>
            <p>
              We regularly assess AI-related risks and conduct audits to ensure responsible AI use. Reviews are performed at every stage of the AI lifecycle, including planning, development, deployment, and monitoring.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Your Rights and Choices</h2>
            <p>
              You have the right to know when AI is being used and to understand how decisions are made by AI systems. If you are affected by an AI-driven decision, you may request human intervention or an explanation where applicable.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Policy Updates</h2>
            <p>
              We may revise this Global AI Policy to reflect changes in technology, regulation, or our practices. Any updates will be posted on this page and communicated where necessary. We encourage stakeholders to review this policy periodically.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Contact Us</h2>
            <p>
              For questions or concerns regarding our AI practices or this policy, please contact us at:
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
