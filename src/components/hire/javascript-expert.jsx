import Head from 'next/head';
import { useEffect } from 'react';
import { User, Code, Shield, Server, Activity, Grid } from 'lucide-react'; // Add relevant icons

export default function JavaScriptExpertPage() {
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
    { title: "Consultation", desc: "Identify your JavaScript requirements for frontend or full-stack development.", icon: <Activity size={32} /> },
    { title: "Planning", desc: "Create a project roadmap tailored to your business needs and timeline.", icon: <Grid size={32} /> },
    { title: "Development", desc: "Write efficient, modular JavaScript code that delivers functionality and performance.", icon: <Code size={32} /> },
    { title: "Testing", desc: "Ensure thorough testing for functionality, usability, and performance across platforms.", icon: <Shield size={32} /> },
    { title: "Launch", desc: "Deploy the code with clean, optimized JavaScript to production and provide long-term support.", icon: <Server size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Their JavaScript team built a powerful web app with seamless functionality. The development process was smooth and quick!",
      name: "Mark Thomas",
      role: "Product Manager, WebCraft",
      image: <User size={40} />  // Replace with user icon
    },
    {
      quote: "Exceptional JavaScript expertise! The solution they provided helped us scale our platform seamlessly.",
      name: "Anna Johnson",
      role: "CTO, CodeHub",
      image: <User size={40} />  // Replace with user icon
    },
    {
      quote: "I’m amazed by the attention to detail and clean JavaScript code. The app runs perfectly on all devices.",
      name: "Robert White",
      role: "Founder, DigitalWave",
      image: <User size={40} />  // Replace with user icon
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire JavaScript Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>JavaScript Developers</span></h1>
          <p>Top 1% engineers to build fast, scalable web applications with JavaScript.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose JavaScript for Your Project?</h2>
          <p>
            JavaScript is the most powerful and flexible programming language for building interactive and dynamic web applications.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Activity size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Fast Development</h3>
              <p>JavaScript frameworks like React and Node.js enable rapid development of modern web applications.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Highly Scalable</h3>
              <p>JavaScript scales effortlessly, allowing your app to handle increased traffic and demand.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Secure</h3>
              <p>JavaScript offers robust security features to build reliable, secure applications.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Grid size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Flexible</h3>
              <p>JavaScript allows flexibility with multiple frameworks and libraries to create custom solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">From planning to deployment, we ensure clean and optimized JavaScript development.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">
                  {step.icon}  {/* Render icons here */}
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
                  {t.image}  {/* Render user icon */}
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
