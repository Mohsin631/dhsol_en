import Head from 'next/head';
import { useEffect } from 'react';
import { Edit, GitCommit, Lock, Monitor, User } from 'lucide-react'; // Import relevant Lucide icons

export default function VueJSDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your Vue.js development requirements and business needs.", icon: <Edit size={40} /> },
    { title: "Planning", desc: "Create a roadmap for development, aligned with your goals.", icon: <GitCommit size={40} /> },
    { title: "Development", desc: "Develop clean, efficient, and scalable Vue.js applications.", icon: <Monitor size={40} /> },
    { title: "Testing", desc: "Perform testing to ensure your app performs well in all scenarios.", icon: <Lock size={40} /> },
    { title: "Launch", desc: "Deploy your Vue.js application and ensure a smooth launch.", icon: <Monitor size={40} /> }
  ];

  const testimonials = [
    {
      quote: "DH Solution's Vue.js team was phenomenal. They delivered an outstanding application with great speed and performance.",
      name: "Catherine Adams",
      role: "Product Manager, ShopFlare",
      icon: <User size={40} /> // User icon for testimonials
    },
    {
      quote: "The team’s expertise in Vue.js helped us create a responsive and fast web app. Highly recommended!",
      name: "Mark Spencer",
      role: "CTO, Finverse",
      icon: <User size={40} /> // User icon for testimonials
    },
    {
      quote: "We are extremely happy with the outcome. DH Solution provided top-notch Vue.js development and delivered on time.",
      name: "Sarah Thompson",
      role: "Founder, WebPros",
      icon: <User size={40} /> // User icon for testimonials
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Vue.js Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Vue.js Developers</span></h1>
          <p>Top 1% engineers to build fast, scalable web applications with Vue.js.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Vue.js for Your Application?</h2>
          <p>
            Vue.js is an open-source JavaScript framework that enables developers to build efficient and high-performing web applications. It is designed for easy integration and scalability.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Edit size={40} />
              </div>
              <h3>Fast Development</h3>
              <p>Vue.js allows for fast development and offers a flexible, modular structure to accommodate any project size.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Monitor size={40} />
              </div>
              <h3>Highly Scalable</h3>
              <p>Vue.js provides scalability, allowing the app to grow with your business while maintaining high performance.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={40} />
              </div>
              <h3>Secure</h3>
              <p>Vue.js offers security features that ensure your app is safe from common vulnerabilities, ensuring secure and stable performance.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitCommit size={40} />
              </div>
              <h3>Flexible</h3>
              <p>Vue.js can be used for single-page applications, or integrated into larger projects to enhance performance and usability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">From planning to launch, we ensure that your Vue.js application is a success.</p>
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
                  {t.icon}
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
