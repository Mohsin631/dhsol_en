import Head from 'next/head';
import { useEffect } from 'react';
import { User, GitBranch, Lock, Share2 } from 'lucide-react'; // Add relevant icons

export default function GitSpecialistPage() {
  useEffect(() => {
    const steps = document.querySelectorAll('.process-step');
    const cards = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    steps.forEach(step => observer.observe(step));
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    { title: "Consultation", desc: "Evaluate your team's version control challenges and specific needs.", icon: <GitBranch size={32} /> },
    { title: "Planning", desc: "Develop a detailed Git workflow and branching strategy.", icon: <GitBranch size={32} /> },
    { title: "Configuration", desc: "Set up repositories, configure access, and integrate with your development tools.", icon: <Lock size={32} /> },
    { title: "Training", desc: "Provide Git training for your team to optimize collaboration and version control best practices.", icon: <Share2 size={32} /> },
    { title: "Ongoing Support", desc: "Offer continuous support for repository management, troubleshooting, and scaling Git operations.", icon: <GitBranch size={32} /> }
  ];

  const testimonials = [
    {
      quote: "The Git specialists helped us set up a clean and efficient version control process, which boosted our team's productivity.",
      name: "Natalie Simms",
      role: "Product Manager, CodeLabs",
      image: <User size={40} /> // Replace image with User icon
    },
    {
      quote: "Their in-depth knowledge of Git and its workflows helped us maintain a smoother development process with minimal conflicts.",
      name: "Oliver Cruz",
      role: "Lead Developer, Innovatech",
      image: <User size={40} /> // Replace image with User icon
    },
    {
      quote: "Amazing team! Their Git consultation and support have helped our team work more efficiently and without issues.",
      name: "Samuel Black",
      role: "CTO, TechVibe",
      image: <User size={40} /> // Replace image with User icon
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Git Specialists | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Git Specialists</span></h1>
          <p>Optimizing your Git workflow, version control, and repository management for seamless team collaboration.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Our Git Specialists?</h2>
          <p>
            Our Git specialists are here to help you build efficient version control workflows, ensure smooth collaboration, and integrate Git seamlessly into your development processes.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <GitBranch size={32} />
              </div>
              <h3>Git Integration</h3>
              <p>We integrate Git with your development tools, providing a seamless experience for your team.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitBranch size={32} />
              </div>
              <h3>Efficient Git Workflows</h3>
              <p>We design and implement Git workflows that optimize collaboration and prevent conflicts.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={32} />
              </div>
              <h3>Version Control Security</h3>
              <p>We ensure your repositories are secure, with proper access control and backup strategies in place.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Share2 size={32} />
              </div>
              <h3>Optimized Collaboration</h3>
              <p>Improve team collaboration through effective Git branching, pull requests, and reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">We follow a structured process to ensure seamless Git integration and team collaboration.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
                  <div className="client-icon">
                    {t.image} {/* Replace with the User icon */}
                  </div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
