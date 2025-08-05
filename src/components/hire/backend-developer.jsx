import Head from 'next/head';
import { useEffect } from 'react';
import { Server, ShieldCheck, Database, Network, Settings, User } from 'lucide-react';

export default function BackendDeveloperPage() {
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
    { title: "Consultation", desc: "Analyze your project requirements, business logic, and goals.", icon: <Settings size={32} /> },
    { title: "Architecture", desc: "Design scalable and efficient backend architecture to handle traffic.", icon: <Network size={32} /> },
    { title: "Development", desc: "Build APIs, databases, and server-side systems for a robust backend.", icon: <Server size={32} /> },
    { title: "Testing", desc: "Conduct extensive testing to ensure security, reliability, and performance.", icon: <ShieldCheck size={32} /> },
    { title: "Launch", desc: "Deploy backend services and ensure smooth integration with frontend systems.", icon: <Database size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Their backend team delivered a rock-solid architecture that scaled effortlessly as we grew.",
      name: "Ava Johnson",
      role: "CTO, FastTech Solutions"
    },
    {
      quote: "Top-notch backend engineers. They worked seamlessly with our frontend team to deliver a flawless product.",
      name: "Liam Smith",
      role: "Lead Developer, WebFlow"
    },
    {
      quote: "The backend infrastructure they built for our platform is stable, fast, and secure. Highly recommend them!",
      name: "Ethan Davis",
      role: "Founder, DataSmart"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Backend Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Backend Developers</span></h1>
          <p>Scalable, secure, and efficient backend solutions to support your growing business.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Backend Development for Your Project?</h2>
          <p>
            A solid backend is essential to ensure your application performs optimally, scales effortlessly, and remains secure. Our backend developers use cutting-edge technologies to build robust and efficient systems.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Network size={36} />
              </div>
              <h3>Scalable Solutions</h3>
              <p>We design backend systems that grow with your business, handling high traffic and expanding user bases.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ShieldCheck size={36} />
              </div>
              <h3>Security First</h3>
              <p>Our backend developers implement robust security protocols to safeguard your data and user privacy.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={36} />
              </div>
              <h3>Efficient APIs</h3>
              <p>We build well-documented and high-performing APIs that integrate seamlessly with frontend systems.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Database size={36} />
              </div>
              <h3>Database Management</h3>
              <p>Our developers ensure your backend integrates with powerful database solutions to store and process data efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Delivering scalable, secure, and efficient backend solutions with precision.</p>
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
                  <User size={32} />
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