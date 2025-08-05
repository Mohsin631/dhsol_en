// TechStackRecommender.jsx
'use client';

import { useState } from 'react';

const recommendations = {
  website: {
    frontend: 'React.js + Tailwind CSS',
    backend: 'Node.js + Express',
    db: 'MongoDB',
    reason: 'Great for fast and scalable full-stack development.',
  },
  mobile: {
    frontend: 'React Native',
    backend: 'Firebase or Node.js',
    db: 'Firestore',
    reason: 'Cross-platform support with rapid deployment.',
  },
  ai: {
    frontend: 'Streamlit or React.js',
    backend: 'Python + FastAPI',
    db: 'PostgreSQL',
    reason: 'Best suited for AI workflows and deployment.',
  },
  ecommerce: {
    frontend: 'Next.js + Tailwind CSS',
    backend: 'Node.js or Shopify',
    db: 'MySQL or MongoDB',
    reason: 'Highly optimized for performance and scalability.',
  },
};

export default function TechStackRecommender() {
  const [projectType, setProjectType] = useState('');
  const [stack, setStack] = useState(null);

  const handleRecommend = () => {
    setStack(recommendations[projectType]);
  };

  return (
    <section className="tech-stack-section">
      <div className="container">
        <h2 className="title">Tech Stack Recommender</h2>
        <p className="subtitle">Choose a project type to get a tech stack recommendation.</p>
        <div className="input-group">
          <select
            className="selector"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">-- Select Project Type --</option>
            <option value="website">Website</option>
            <option value="mobile">Mobile App</option>
            <option value="ai">AI Solution</option>
            <option value="ecommerce">E-Commerce</option>
          </select>
          <button onClick={handleRecommend} className="btn-recommend">
            Recommend Stack
          </button>
        </div>

        {stack && (
          <div className="stack-result">
            <h3>Recommended Tech Stack</h3>
            <ul>
              <li><strong>Frontend:</strong> {stack.frontend}</li>
              <li><strong>Backend:</strong> {stack.backend}</li>
              <li><strong>Database:</strong> {stack.db}</li>
              <li><strong>Reason:</strong> {stack.reason}</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
