"use client";

import { useState } from "react";

export default function SecurityRiskAssessor() {
  const [formData, setFormData] = useState({
    dataType: "",
    authMethod: "",
    hasPayments: false,
    hasUserUpload: false,
    industry: ""
  });
  const [riskLevel, setRiskLevel] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const assessRisk = () => {
    let score = 0;
    if (formData.dataType === "personal") score += 2;
    if (formData.dataType === "financial") score += 3;
    if (formData.authMethod === "password") score += 1;
    if (formData.authMethod === "2fa") score -= 1;
    if (formData.hasPayments) score += 2;
    if (formData.hasUserUpload) score += 2;
    if (formData.industry === "health") score += 3;
    if (formData.industry === "ecommerce") score += 2;

    let risk = "Low";
    if (score > 4 && score <= 7) risk = "Medium";
    if (score > 7) risk = "High";
    setRiskLevel(risk);
  };

  return (
    <section className="security-risk-assessor">
      <div className="container">
        <h1>🔐 Security Risk Assessor</h1>
        <p>Understand potential security risks based on your digital platform setup.</p>

        <div className="form-grid">
          <div className="form-group">
            <label>Type of Data Stored</label>
            <select name="dataType" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="personal">Personal Data</option>
              <option value="financial">Financial Data</option>
              <option value="general">General Info</option>
            </select>
          </div>

          <div className="form-group">
            <label>User Authentication Method</label>
            <select name="authMethod" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="none">None</option>
              <option value="password">Password Based</option>
              <option value="2fa">Two-Factor Auth</option>
            </select>
          </div>

          <div className="form-group checkbox">
            <input type="checkbox" name="hasPayments" onChange={handleChange} />
            <label>Includes Online Payments</label>
          </div>

          <div className="form-group checkbox">
            <input type="checkbox" name="hasUserUpload" onChange={handleChange} />
            <label>Users Upload Files</label>
          </div>

          <div className="form-group">
            <label>Industry</label>
            <select name="industry" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="health">Healthcare</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button className="assess-btn" onClick={assessRisk}>Assess Risk</button>

        {riskLevel && (
          <div className={`result-box ${riskLevel.toLowerCase()}`}>
            <h2>Risk Level: {riskLevel}</h2>
            <p>
              {riskLevel === "Low" && "Your platform has minimal risk. Maintain regular security checks."}
              {riskLevel === "Medium" && "Consider improving authentication, encrypting data and monitoring logs."}
              {riskLevel === "High" && "High risk! Implement strict security measures and audits immediately."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}