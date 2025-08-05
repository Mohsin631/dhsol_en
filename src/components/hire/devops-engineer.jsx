import Head from 'next/head';
import { useEffect } from 'react';
import { User, ServerCog, Repeat, Settings, UploadCloud, Zap, ShieldCheck, HardDrive, MonitorSmartphone } from 'lucide-react';

export default function DevOpsEngineerPage() {
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
    { title: "Consultation", desc: "Assess your infrastructure and DevOps needs to define optimal practices.", icon: <ServerCog size={36} /> },
    { title: "Planning", desc: "Design and plan CI/CD pipelines based on your project requirements.", icon: <Settings size={36} /> },
    { title: "Configuration", desc: "Set up your infrastructure with tools like Jenkins, Kubernetes, Docker, and AWS.", icon: <UploadCloud size={36} /> },
    { title: "Automation", desc: "Automate build, testing, and deployment processes for continuous integration.", icon: <Repeat size={36} /> },
    { title: "Ongoing Support", desc: "Provide continuous monitoring and support to ensure optimal performance.", icon: <MonitorSmartphone size={36} /> }
  ];

  const testimonials = [
    {
      quote: "Their DevOps team transformed our infrastructure. We now have automated processes that save time and reduce errors.",
      name: "John Doe",
      role: "CTO, InnovateTech"
    },
    {
      quote: "Professional and knowledgeable, they helped us build a scalable infrastructure that grew with our business.",
      name: "Sophia Hall",
      role: "Product Manager, Softworks"
    },
    {
      quote: "We were struggling with deployments until their DevOps engineers optimized our CI/CD pipeline. It's smooth sailing now!",
      name: "Mike Thompson",
      role: "Lead Developer, AlphaSystems"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire DevOps Engineers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>DevOps Engineers</span></h1>
          <p>Streamline your software development and deployment with top DevOps professionals.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose DevOps for Your Project?</h2>
          <p>
            DevOps is a set of practices that automates and integrates the processes between software development and IT operations. It enables organizations to deliver applications and services at high velocity.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Repeat size={36} />
              </div>
              <h3>Automation</h3>
              <p>Automate repetitive tasks like building, testing, and deploying to ensure consistency and faster delivery.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <HardDrive size={36} />
              </div>
              <h3>Scalable Infrastructure</h3>
              <p>DevOps enables the creation of scalable infrastructure that can handle increased traffic and workloads efficiently.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ServerCog size={36} />
              </div>
              <h3>Improved Collaboration</h3>
              <p>Breaks down silos between development and operations teams, fostering better collaboration and communication.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <MonitorSmartphone size={36} />
              </div>
              <h3>Continuous Monitoring</h3>
              <p>Monitor infrastructure and applications in real-time to ensure uptime and improve performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">End-to-end DevOps solutions for seamless integration, deployment, and monitoring.</p>
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