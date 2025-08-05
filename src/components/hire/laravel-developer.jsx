import Head from 'next/head';
import { useEffect } from 'react';
import { User, Zap, Layers, Lock, Grid } from 'lucide-react'; // Importing Lucide icons

export default function LaravelDeveloperPage() {
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
    { title: "Consultation", desc: "Discuss your goals and how Laravel fits your app's architecture.", icon: <Zap className="h-8 w-8 text-gray-500" /> },
    { title: "Planning", desc: "Define feature sets, timelines, and select Laravel packages.", icon: <Grid className="h-8 w-8 text-gray-500" /> },
    { title: "Development", desc: "Custom Laravel solutions using best practices and clean code.", icon: <Layers className="h-8 w-8 text-gray-500" /> },
    { title: "Testing", desc: "Automated and manual testing to ensure performance.", icon: <Lock className="h-8 w-8 text-gray-500" /> },
    { title: "Launch", desc: "Secure and scalable deployment with ongoing support.", icon: <Zap className="h-8 w-8 text-gray-500" /> }
  ];

  const testimonials = [
    {
      quote: "Our Laravel web app was delivered faster than expected and with superb quality.",
      name: "Nina Brown",
      role: "Project Lead, WebFlux"
    },
    {
      quote: "Highly skilled Laravel developers who made our backend incredibly efficient.",
      name: "Leo Carter",
      role: "CTO, BrickChain"
    },
    {
      quote: "We had a tight deadline and DH Solution’s Laravel team absolutely nailed it.",
      name: "Ava Martinez",
      role: "Founder, DevLaunch"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Laravel Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Laravel Developers</span></h1>
          <p>Top 1% engineers to build modern, maintainable, and scalable web apps fast.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Laravel for Your Project?</h2>
          <p>
            Laravel is one of the most elegant PHP frameworks for modern web development — ideal for startups to enterprises seeking secure and maintainable apps.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Rapid Development</h3>
              <p>Laravel’s built-in tools like routing, templating, and Eloquent ORM speed up the development process.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Grid className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Scalable Architecture</h3>
              <p>Designed to scale, Laravel is perfect for both MVPs and enterprise-grade systems.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Security Built-In</h3>
              <p>Laravel offers CSRF protection, hashing, authentication, and other top security features by default.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Rich Ecosystem</h3>
              <p>Laravel includes tools like Forge, Nova, and Vapor for hosting, admin panels, and serverless deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Structured for speed, precision, and quality delivery.</p>
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
                  <User className="h-8 w-8 text-gray-500" /> {/* User icon for testimonials */}
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
