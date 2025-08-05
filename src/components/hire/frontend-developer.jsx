import Head from 'next/head';
import { useEffect } from 'react';
import { User, SearchCheck, PenTool, Code, CheckCircle, Rocket, Layers, Smartphone } from 'lucide-react';

export default function FrontendDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your requirements, preferences, and target audience.", icon: <SearchCheck size={32} /> },
    { title: "Design", desc: "Create user-centric designs and wireframes for an optimal user experience.", icon: <PenTool size={32} /> },
    { title: "Development", desc: "Develop responsive and interactive frontend components using modern frameworks.", icon: <Code size={32} /> },
    { title: "Testing", desc: "Test across multiple devices and browsers for optimal performance.", icon: <CheckCircle size={32} /> },
    { title: "Launch", desc: "Ensure smooth deployment and ongoing support after launch.", icon: <Rocket size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Their frontend developers transformed our website into an interactive, modern platform that users love!",
      name: "Rachel Green",
      role: "Creative Director, BrightMedia",
      icon: <User size={40} />
    },
    {
      quote: "The team delivered on time with exceptional quality and paid attention to the smallest details. Highly recommended.",
      name: "Chris Walker",
      role: "Lead Developer, CodeWorks",
      icon: <User size={40} />
    },
    {
      quote: "Very pleased with the results. The new UI/UX significantly improved our customer engagement.",
      name: "Olivia Martin",
      role: "Product Manager, SoftSolutions",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Frontend Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Frontend Developers</span></h1>
          <p>Build fast, responsive, and engaging user interfaces with top frontend developers.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Frontend Development for Your Project?</h2>
          <p>
            Frontend development is key to creating visually appealing and functional user interfaces. Our frontend developers use the latest frameworks and tools to bring your website or application to life.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Smartphone size={32} />
              </div>
              <h3>Responsive Design</h3>
              <p>We ensure your website looks great on all devices, from mobile to desktop.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <PenTool size={32} />
              </div>
              <h3>Interactive UI</h3>
              <p>Engage users with intuitive, interactive user interfaces and seamless animations.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle size={32} />
              </div>
              <h3>Performance Optimized</h3>
              <p>Frontend development focuses on fast loading times, optimal performance, and high-quality user experiences.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>Modern Technologies</h3>
              <p>We use the latest frontend technologies like React, Angular, Vue.js, and more to build modern web applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Structured for delivering high-quality, user-friendly web experiences.</p>
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
                    {t.icon}
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
