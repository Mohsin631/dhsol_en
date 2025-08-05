"use client";

import { useState } from "react";
import Head from "next/head";

export default function ProjectTimelineEstimator() {
  const [features, setFeatures] = useState([]);
  const [teamSize, setTeamSize] = useState(1);
  const [complexity, setComplexity] = useState("medium");
  const [estimatedWeeks, setEstimatedWeeks] = useState(null);

  const featureList = [
    "User Authentication",
    "Payment Integration",
    "Chat System",
    "Admin Dashboard",
    "API Integration",
    "Analytics & Reporting",
    "Push Notifications",
    "Multilingual Support",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let baseTime = features.length * 1.5; // 1.5 weeks per feature

    if (complexity === "high") baseTime *= 1.5;
    if (complexity === "low") baseTime *= 0.8;

    const adjustedTime = baseTime / (teamSize * 0.8); // team productivity

    setEstimatedWeeks(Math.ceil(adjustedTime));
  };

  const toggleFeature = (feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((f) => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  return (
    <>
      <Head>
        <title>Project Timeline Estimator | DH Solutions</title>
        <meta name="description" content="Estimate your project timeline based on features, complexity, and team size." />
        <meta name="keywords" content="timeline estimator, project duration, software planning, DH Solutions tools" />
      </Head>
      <div className="timeline-tool">
        <h1>📆 Project Timeline Estimator</h1>
        <p>Estimate how long your project might take to develop based on selected criteria.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Features:</label>
            <div className="features-grid">
              {featureList.map((feature, index) => (
                <button
                  type="button"
                  key={index}
                  className={`feature-button ${features.includes(feature) ? "active" : ""}`}
                  onClick={() => toggleFeature(feature)}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Team Size:</label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              min="1"
              max="20"
            />
          </div>

          <div className="form-group">
            <label>Project Complexity:</label>
            <select
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button type="submit" className="calculate-btn">
            Calculate Timeline
          </button>
        </form>

        {estimatedWeeks !== null && (
          <div className="result-box">
            <h2>Estimated Timeline</h2>
            <p>🕒 Your project may take approximately <strong>{estimatedWeeks} weeks</strong> to complete.</p>
          </div>
        )}
      </div>
    </>
  );
}
