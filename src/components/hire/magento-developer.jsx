import Head from 'next/head';
import { useEffect } from 'react';
import {
  User, Clipboard, Code, CheckCircle, Rocket,
  Zap, ArrowUpCircle, Lock, Layers
} from 'lucide-react';

export default function MagentoDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your Magento requirements and business goals.", icon: <User className="h-8 w-8 text-gray-500" /> },
    { title: "Planning", desc: "Tailor Magento&rsquo;s features to suit your business model and scale.", icon: <Clipboard className="h-8 w-8 text-gray-500" /> },
    { title: "Development", desc: "Custom Magento themes, extensions, and modules development.", icon: <Code className="h-8 w-8 text-gray-500" /> },
    { title: "Testing", desc: "Ensure your Magento site runs smoothly and bug-free.", icon: <CheckCircle className="h-8 w-8 text-gray-500" /> },
    { title: "Launch", desc: "Deploy your Magento store with high availability and security.", icon: <Rocket className="h-8 w-8 text-gray-500" /> }
  ];

  const testimonials = [
    {
      quote: "The Magento team at DH Solution was fantastic, delivering a feature-rich store quickly and efficiently.",
      name: "James Watson",
      role: "Founder, ShopNow"
    },
    {
      quote: "DH Solution helped optimize our Magento store, and we saw an immediate increase in sales.",
      name: "Rachel Lee",
      role: "Marketing Head, TechCart"
    },
    {
      quote: "Highly professional and skilled team. Our Magento site runs flawlessly thanks to them.",
      name: "Paul Richards",
      role: "Ecommerce Manager, FurnitureX"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Magento Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Magento Developers</span></h1>
          <p>Top 1% engineers to build robust, scalable eCommerce stores with Magento.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Magento for Your eCommerce Business?</h2>
          <p>
            Magento offers flexibility, scalability, and customization for eCommerce businesses of all sizes. Whether you&rsquo;re launching a new store or scaling an existing one, Magento can meet your business needs.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Fast Setup</h3>
              <p>Quick setup and launch with pre-built templates and extensions tailored for eCommerce.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ArrowUpCircle className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Highly Scalable</h3>
              <p>Magento can handle growing businesses with ease and scale to thousands of products and customers.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Secure</h3>
              <p>Magento provides enterprise-level security features for safe transactions and customer data protection.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Customizable</h3>
              <p>Build custom features, integrations, and solutions for your business with Magento&rsquo;s flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">End-to-end Magento development with a focus on business outcomes.</p>
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
                  <User className="h-8 w-8 text-gray-500" />
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
