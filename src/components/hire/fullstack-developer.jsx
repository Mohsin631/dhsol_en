import Head from 'next/head';
import { useEffect } from 'react';
import {
  Code2, Gauge, Link2, Cloud, Users
} from 'lucide-react';

export default function FullstackDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your project requirements and goals.", icon: <Users size={40} /> },
    { title: "Planning", desc: "Design a roadmap for both frontend and backend systems.", icon: <Code2 size={40} /> },
    { title: "Development", desc: "Develop and integrate both frontend and backend functionalities.", icon: <Gauge size={40} /> },
    { title: "Testing", desc: "Ensure both parts of your application are fully functional and reliable.", icon: <Link2 size={40} /> },
    { title: "Launch", desc: "Deploy and monitor the full-stack application for seamless user experience.", icon: <Cloud size={40} /> }
  ];

  const testimonials = [
    {
      quote: "Their full-stack team was amazing. They handled everything from design to backend functionality with precision!",
      name: "Olivia Reynolds",
      role: "CEO, GreenTech"
    },
    {
      quote: "The full-stack developers were able to build a completely integrated system that worked flawlessly across both frontend and backend.",
      name: "Liam Scott",
      role: "Founder, SkyDrive"
    },
    {
      quote: "A fantastic experience working with their team. They understood the scope of the project and delivered high-quality code.",
      name: "Mia Carter",
      role: "Product Manager, CloudWorks"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Fullstack Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Fullstack Developers</span></h1>
          <p>Seamless integration of frontend and backend for robust web applications.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Fullstack Development for Your Project?</h2>
          <p>
            Fullstack development enables developers to work on both the frontend and backend of your application. With our expert developers, we ensure an integrated approach to building seamless, high-performing web solutions.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Code2 size={40} />
              </div>
              <h3>End-to-End Development</h3>
              <p>Our fullstack developers handle everything, from UI/UX design to backend server-side logic.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Gauge size={40} />
              </div>
              <h3>Optimized Solutions</h3>
              <p>We deliver applications that are optimized for performance, scalability, and efficiency.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Link2 size={40} />
              </div>
              <h3>Seamless Integration</h3>
              <p>We ensure smooth integration between frontend and backend, providing a flawless user experience.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Cloud size={40} />
              </div>
              <h3>Cloud-Ready</h3>
              <p>Our solutions are cloud-ready, ensuring scalability and easy deployment to cloud platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Structured to deliver both frontend and backend with high quality and efficiency.</p>
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
                  <Users size={36} className="client-icon" />
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
