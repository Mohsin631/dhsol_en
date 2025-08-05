import Head from 'next/head';
import { useEffect } from 'react';
import { Rocket, Layers, ShieldCheck, RefreshCw, PhoneCall, SearchCheck, Hammer, Gauge, LifeBuoy, User } from 'lucide-react';

export default function DockerExpertPage() {
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
    { title: "Consultation", desc: "Understand your containerization goals and define Docker usage.", icon: <SearchCheck size={32} /> },
    { title: "Planning", desc: "Design Docker architecture for application scalability and portability.", icon: <Layers size={32} /> },
    { title: "Implementation", desc: "Set up Docker containers and orchestrate using Docker Compose or Kubernetes.", icon: <Hammer size={32} /> },
    { title: "Optimization", desc: "Optimize Docker configurations for performance, security, and cost.", icon: <Gauge size={32} /> },
    { title: "Support", desc: "Ongoing support and monitoring for Docker-based solutions.", icon: <LifeBuoy size={32} /> }
  ];

  const testimonials = [
    {
      quote: "The Docker experts at DH Solution helped us streamline our deployment pipeline and reduce downtime significantly.",
      name: "Charlotte Simmons",
      role: "CTO, NextGen Solutions",
      icon: <User size={40} />
    },
    {
      quote: "Their expertise in containerization and Docker has made our infrastructure more agile and scalable.",
      name: "Benjamin Walker",
      role: "Lead Engineer, CloudX",
      icon: <User size={40} />
    },
    {
      quote: "From Dockerizing our apps to setting up CI/CD pipelines, the DH Solution team was professional and knowledgeable.",
      name: "Isla Morgan",
      role: "DevOps Engineer, WebTech Solutions",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Docker Experts | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Docker Engineers</span></h1>
          <p>Maximize efficiency, security, and scalability with Docker containers for your applications.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Docker for Your Business?</h2>
          <p>
            Docker is an open-source platform that automates the deployment, scaling, and management of applications inside containers. It allows for consistent environments across development, testing, and production, which is ideal for teams looking to scale applications and improve efficiency.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Rocket size={32} />
              </div>
              <h3>Fast Deployment</h3>
              <p>Docker containers allow for quicker application setup, scaling, and updates, significantly improving your workflow.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <RefreshCw size={32} />
              </div>
              <h3>Highly Scalable</h3>
              <p>Docker helps you scale applications without issues, allowing you to manage hundreds of containers seamlessly.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ShieldCheck size={32} />
              </div>
              <h3>Secure</h3>
              <p>Docker containers provide isolation, reducing security vulnerabilities and ensuring a safe production environment.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>Flexible</h3>
              <p>Docker works across multiple platforms, from local machines to cloud infrastructures like AWS, Azure, and Google Cloud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">From consulting to deployment, we ensure a smooth Docker integration process.</p>
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
