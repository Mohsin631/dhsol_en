import Head from 'next/head';
import { useEffect } from 'react';
import { CheckCircle, Zap, GitMerge, User, Package, Share2, Users } from 'lucide-react'; // Importing icons from Lucide

export default function SlackIntegratorPage() {
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
    { title: "Consultation", desc: "Assess your team’s needs and requirements for Slack integration.", icon: <CheckCircle className="h-8 w-8 text-blue-500" /> },
    { title: "Planning", desc: "Design a custom integration plan based on your goals.", icon: <Zap className="h-8 w-8 text-green-500" /> },
    { title: "Integration", desc: "Set up and integrate Slack with your tools for seamless communication.", icon: <GitMerge className="h-8 w-8 text-yellow-500" /> },
    { title: "Testing", desc: "Test and ensure smooth workflow with real-time feedback.", icon: <Package className="h-8 w-8 text-red-500" /> },
    { title: "Training & Support", desc: "Provide training and ongoing support to maximize usage.", icon: <Users className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      quote: "The integration with Slack was seamless. Our team now collaborates much more efficiently!",
      name: "Samantha Brooks",
      role: "Operations Director, TechFusion"
    },
    {
      quote: "The custom Slack bots have greatly enhanced our productivity. Highly recommend their service.",
      name: "David Harris",
      role: "Founder, Innovate Solutions"
    },
    {
      quote: "They helped us streamline our communication tools. Our workflow has never been smoother.",
      name: "Emily White",
      role: "Project Manager, WebSynergy"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Slack Integrators | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Slack Integrators</span></h1>
          <p>Enhance team collaboration by integrating Slack with your business tools and systems.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Our Slack Integration Services?</h2>
          <p>
            Our Slack integration experts can help you connect Slack with all your critical business tools, enabling seamless workflows and boosting productivity across your team.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <GitMerge className="h-12 w-12 text-blue-500" />
              </div>
              <h3>Seamless Integration</h3>
              <p>We integrate Slack with your CRM, project management tools, and other systems to streamline your workflow.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Zap className="h-12 w-12 text-green-500" />
              </div>
              <h3>Automation</h3>
              <p>Automate routine tasks with custom bots and workflows that run directly within Slack.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Users className="h-12 w-12 text-red-500" />
              </div>
              <h3>Enhanced Collaboration</h3>
              <p>Improve team communication with better integration across tools, ensuring faster decision-making.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Package className="h-12 w-12 text-yellow-500" />
              </div>
              <h3>Ongoing Monitoring & Support</h3>
              <p>We provide continuous monitoring and support to ensure your Slack integrations run smoothly at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">We follow a structured approach to integrating Slack with your business tools for maximum impact.</p>
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
                  <User className="h-12 w-12 text-gray-500" /> {/* User icon in place of image */}
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
