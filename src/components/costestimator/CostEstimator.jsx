'use client';

import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function CostEstimator() {
  const hourlyRate = 20; // USD per hour

  // Define state variables for each service's hours
  const [frontEndHours, setFrontEndHours] = useState(0);
  const [backEndHours, setBackEndHours] = useState(0);
  const [mobileAppHours, setMobileAppHours] = useState(0);
  const [aiMlHours, setAiMlHours] = useState(0);
  const [cyberSecurityHours, setCyberSecurityHours] = useState(0);
  const [devOpsHours, setDevOpsHours] = useState(0);
  const [customSoftwareHours, setCustomSoftwareHours] = useState(0);
  const [qaTestingHours, setQaTestingHours] = useState(0);

  // Calculate total cost
  const totalCost =
    (Number(frontEndHours) +
      Number(backEndHours) +
      Number(mobileAppHours) +
      Number(aiMlHours) +
      Number(cyberSecurityHours) +
      Number(devOpsHours) +
      Number(customSoftwareHours) +
      Number(qaTestingHours)) *
    hourlyRate;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add title to PDF
    doc.setFontSize(20);
    doc.text("Cost Estimator Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Hourly Rate: $${hourlyRate} per hour`, 14, 30);

    // Add table with autoTable
    doc.autoTable({
      head: [["Service", "Hours", "Estimated Cost"]],
      body: [
        ["Front End Development", frontEndHours, `$${frontEndHours * hourlyRate}`],
        ["Backend Development", backEndHours, `$${backEndHours * hourlyRate}`],
        ["Mobile App Development", mobileAppHours, `$${mobileAppHours * hourlyRate}`],
        ["AI/ML Solutions", aiMlHours, `$${aiMlHours * hourlyRate}`],
        ["Cyber Security", cyberSecurityHours, `$${cyberSecurityHours * hourlyRate}`],
        ["DevOps Solutions", devOpsHours, `$${devOpsHours * hourlyRate}`],
        ["Custom Software", customSoftwareHours, `$${customSoftwareHours * hourlyRate}`],
        ["QA & Testing", qaTestingHours, `$${qaTestingHours * hourlyRate}`],
      ],
      startY: 40, // Position to start the table (below the title)
    });

    // Add total cost to the end of the table
    doc.text(`Total Estimated Cost: $${totalCost}`, 14, doc.lastAutoTable.finalY + 10);

    // Save the PDF with the specified filename
    doc.save("cost_estimator_report.pdf");
  };

  return (
    <section className="cost-estimator-section">
      <div className="container">
        <h2 className="section-heading">Cost Estimator</h2>
        <div className="form-container">
          <div className="form-group">
            <label>Front End Development (Hours)</label>
            <input
              type="number"
              value={frontEndHours}
              onChange={(e) => setFrontEndHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>Backend Development (Hours)</label>
            <input
              type="number"
              value={backEndHours}
              onChange={(e) => setBackEndHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>Mobile App Development (Hours)</label>
            <input
              type="number"
              value={mobileAppHours}
              onChange={(e) => setMobileAppHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>AI/ML Solutions (Hours)</label>
            <input
              type="number"
              value={aiMlHours}
              onChange={(e) => setAiMlHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>Cyber Security (Hours)</label>
            <input
              type="number"
              value={cyberSecurityHours}
              onChange={(e) => setCyberSecurityHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>DevOps Solutions (Hours)</label>
            <input
              type="number"
              value={devOpsHours}
              onChange={(e) => setDevOpsHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>Custom Software (Hours)</label>
            <input
              type="number"
              value={customSoftwareHours}
              onChange={(e) => setCustomSoftwareHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="form-group">
            <label>QA & Testing (Hours)</label>
            <input
              type="number"
              value={qaTestingHours}
              onChange={(e) => setQaTestingHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>
          <div className="total-cost">
            <h3>Total Estimated Cost: ${totalCost}</h3>
          </div>
          <button onClick={handleDownloadPDF} className="download-btn">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
