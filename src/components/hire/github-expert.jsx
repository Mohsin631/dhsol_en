import Head from 'next/head';
import { useEffect } from 'react';
import { GitBranch, Lock, CheckCircle, User } from 'lucide-react'; // Add relevant icons

export default function GitHubExpertPage() {
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
    { title: "Consultation", desc: "Assess your version control needs and project workflows.", icon: <GitBranch size={32} /> },
    { title: "Planning", desc: "Design a custom GitHub repository structure for your team.", icon: <GitBranch size={32} /> },
    { title: "Integration", desc: "Set up GitHub repositories, permissions, and integrate with your CI/CD tools.", icon: <Lock size={32} /> },
    { title: "Testing", desc: "Test the integration and make sure workflows are streamlined.", icon: <CheckCircle size={32} /> },
    { title: "Training & Support", desc: "Provide training on best practices and offer ongoing support for GitHub usage.", icon: <GitBranch size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Their GitHub integration helped us streamline our development processes. We are now more efficient than ever!",
      name: "Marcus O'Connor",
      role: "Lead Developer, DevCore Solutions",
      image: <User size={40} /> // Replace image with User icon
    },
    {
      quote: "They transformed how we use GitHub in our organization. Our version control is smoother, and team collaboration is on point.",
      name: "Linda Green",
      role: "Engineering Manager, CodeWorks",
      image: <User size={40} /> // Replace image with User icon
    },
    {
      quote: "The GitHub repository setup and permissions structure were top-notch. Great experience working with their team.",
      name: "Chris Howard",
      role: "CTO, BrightTech",
      image: <User size={40} /> // Replace image with User icon
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire GitHub Experts | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>GitHub Experts</span></h1>
          <p>Optimizing your version control system and team collaboration using GitHub.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Our GitHub Integration Services?</h2>
          <p>
            Our GitHub experts can help you optimize your version control processes, collaborate efficiently with your team, and set up custom workflows that suit your project needs.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <GitBranch size={32} />
              </div>
              <h3>Seamless Integration</h3>
              <p>We help integrate GitHub into your project workflows, CI/CD tools, and more.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle size={32} />
              </div>
              <h3>Automated Workflows</h3>
              <p>Automate processes such as testing, deployment, and notifications using GitHub actions.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={32} />
              </div>
              <h3>Robust Security</h3>
              <p>We configure GitHub’s security features to ensure your code and repositories are well-protected.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle size={32} />
              </div>
              <h3>Enhanced Collaboration</h3>
              <p>Improve team collaboration with pull requests, code reviews, and real-time updates directly on GitHub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Our expert GitHub integration process ensures smooth version control for your team.</p>
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
                    {t.image} {/* Replace with User icon */}
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
