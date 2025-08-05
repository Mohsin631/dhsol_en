import Head from 'next/head';
import { useEffect } from 'react';
import { User, Database, Settings2, UploadCloud, Zap, ShieldCheck, Shield, Rocket, Layers } from 'lucide-react';

export default function DatabaseAdminPage() {
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
    { title: "Consultation", desc: "Assess your database needs and environment.", icon: <Database size={36} /> },
    { title: "Planning", desc: "Design a customized database strategy for optimal performance.", icon: <Settings2 size={36} /> },
    { title: "Setup & Migration", desc: "Set up and migrate your databases securely and seamlessly.", icon: <UploadCloud size={36} /> },
    { title: "Optimization", desc: "Optimize database performance for speed, scalability, and efficiency.", icon: <Zap size={36} /> },
    { title: "Monitoring", desc: "Ongoing monitoring and troubleshooting for database health.", icon: <ShieldCheck size={36} /> }
  ];

  const testimonials = [
    {
      quote: "The database administration team was excellent at optimizing our system, improving performance dramatically.",
      name: "John Doe",
      role: "CTO, WebTech"
    },
    {
      quote: "Our database was fully migrated without any issues. The team handled everything with professionalism.",
      name: "Emily Smith",
      role: "Operations Manager, DataCorp"
    },
    {
      quote: "Exceptional work in maintaining and securing our databases. Highly recommended for any complex DB needs.",
      name: "Michael Johnson",
      role: "Founder, DataSync"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Database Admins | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Database Admins</span></h1>
          <p>Ensure your databases are secure, optimized, and running efficiently with expert database administration.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Our Database Admins?</h2>
          <p>
            Our database administration team ensures that your databases are performing at their best, secure, and backed up. From migration to performance tuning, our experts handle it all.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Shield size={36} />
              </div>
              <h3>Secure</h3>
              <p>We implement best practices for database security to ensure your data is safe and protected from breaches.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Zap size={36} />
              </div>
              <h3>Optimized</h3>
              <p>Our database admins optimize your database performance, ensuring faster query processing and minimal downtime.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <UploadCloud size={36} />
              </div>
              <h3>Reliable Backup</h3>
              <p>We offer robust backup and disaster recovery strategies to minimize data loss risks.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={36} />
              </div>
              <h3>Scalable</h3>
              <p>We design your databases for scalability, so they can grow as your business needs evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Our database administration process ensures smooth operations, performance optimization, and reliable backups.</p>
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
                  <div className="icon-circle">
                    <User size={36} />
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