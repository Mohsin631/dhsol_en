import Head from "next/head";

export default function GlobalSupplierCodeOfConduct() {
  return (
    <div className="privacy-policy-page">
      <Head>
        <title>Global Supplier Code of Conduct | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <h1 className="privacy-title">Global Supplier Code of Conduct</h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <h2 className="privacy-subtitle">Introduction</h2>
            <p>
              At DH Solution, we are committed to upholding the highest ethical standards in all areas of our business. This Global Supplier Code of Conduct outlines the expectations we have for our suppliers, vendors, contractors, and business partners to ensure responsible, lawful, and ethical operations.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Labor and Human Rights</h2>
            <p>
              We expect our suppliers to uphold the rights of workers and treat them with dignity and respect:
            </p>
            <ul>
              <li><strong>Freely Chosen Employment:</strong> Suppliers shall not use forced, bonded, or indentured labor.</li>
              <li><strong>Child Labor:</strong> Suppliers must not employ individuals below the legal working age in their country.</li>
              <li><strong>Non-Discrimination:</strong> Employment practices must be free from discrimination based on race, gender, religion, or any other status protected by law.</li>
              <li><strong>Fair Wages:</strong> Workers must be paid at least the legal minimum wage and provided all legally mandated benefits.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Health and Safety</h2>
            <p>
              Suppliers must provide a safe and healthy workplace for their employees. This includes:
            </p>
            <ul>
              <li>Complying with all applicable health and safety laws.</li>
              <li>Providing adequate safety training and protective equipment.</li>
              <li>Establishing procedures to prevent accidents and injury.</li>
              <li>Ensuring emergency preparedness and response plans are in place.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Environmental Responsibility</h2>
            <p>
              Suppliers are expected to minimize their environmental impact and operate in a sustainable manner:
            </p>
            <ul>
              <li><strong>Regulatory Compliance:</strong> Suppliers must comply with all environmental laws and regulations.</li>
              <li><strong>Waste Management:</strong> Proper disposal and recycling practices must be followed.</li>
              <li><strong>Resource Efficiency:</strong> Energy and water consumption should be monitored and reduced where possible.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Ethical Business Practices</h2>
            <p>
              DH Solution expects its suppliers to conduct business ethically and with integrity:
            </p>
            <ul>
              <li><strong>Anti-Corruption:</strong> Suppliers must not engage in any form of bribery, corruption, or unethical influence.</li>
              <li><strong>Confidentiality:</strong> Information shared with suppliers must be protected and not disclosed without consent.</li>
              <li><strong>Fair Competition:</strong> Suppliers must not engage in collusion or anticompetitive practices.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Monitoring and Compliance</h2>
            <p>
              DH Solution reserves the right to assess supplier compliance with this Code. Non-compliance may result in corrective action or termination of the business relationship.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Reporting Violations</h2>
            <p>
              Suppliers and their employees are encouraged to report any violations of this Code. Reports can be made confidentially and without fear of retaliation.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-subtitle">Contact Us</h2>
            <p>
              For questions regarding the Global Supplier Code of Conduct or to report violations, please contact:
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
