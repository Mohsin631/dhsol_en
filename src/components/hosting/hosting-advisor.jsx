'use client';

import { useState } from 'react';

export default function CloudHostingAdvisor() {
  const [projectType, setProjectType] = useState('web');
  const [storage, setStorage] = useState(50);
  const [bandwidth, setBandwidth] = useState(100);
  const [recommendation, setRecommendation] = useState('');

  const calculateRecommendation = () => {
    let result = '';

    if (projectType === 'web') {
      if (storage <= 100 && bandwidth <= 200) {
        result = 'Recommended: Shared Hosting or Basic VPS (DigitalOcean, Linode, Bluehost)';
      } else {
        result = 'Recommended: VPS or Cloud Hosting (AWS Lightsail, Google Cloud, Hetzner)';
      }
    } else if (projectType === 'mobile') {
      result = 'Recommended: Backend Cloud Services like Firebase, AWS Amplify, or Supabase';
    } else if (projectType === 'ai') {
      result = 'Recommended: High-Performance Cloud (AWS EC2, Azure ML, Paperspace, RunPod)';
    } else if (projectType === 'ecommerce') {
      result = 'Recommended: Scalable Cloud with CDN (Shopify Plus, AWS, Vercel + Headless CMS)';
    } else {
      result = 'Recommended: General Purpose Cloud Hosting (AWS, Azure, GCP, DigitalOcean)';
    }

    setRecommendation(result);
  };

  return (
    <section className="cloud-hosting-advisor-full">
      <div className="advisor-title">Cloud Hosting Advisor</div>
      <div className="advisor-description">
        Choose the best cloud hosting solution tailored to your project’s scale and needs.
      </div>
      <form>
        <div className="form-group">
          <label className="form-label">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="form-select"
          >
            <option value="web">Web App</option>
            <option value="mobile">Mobile App</option>
            <option value="ai">AI/ML Project</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Estimated Storage (GB)</label>
          <input
            type="number"
            value={storage}
            onChange={(e) => setStorage(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Estimated Bandwidth (GB/month)</label>
          <input
            type="number"
            value={bandwidth}
            onChange={(e) => setBandwidth(Number(e.target.value))}
            className="form-input"
          />
        </div>

        <button type="button" className="calculate-btn" onClick={calculateRecommendation}>
          Get Recommendation
        </button>
      </form>

      {recommendation && (
        <div className="result-box">
          <div className="result-title">Suggested Hosting Option</div>
          <div className="result-text">{recommendation}</div>
        </div>
      )}
    </section>
  );
}
