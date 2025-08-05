import Head from 'next/head';
import { useEffect } from 'react';
import {
  User, Rocket, Zap, Database, Lock,
  Microscope, PenTool, Layers, Code,
  CheckCircle, CloudRain
} from 'lucide-react';

export default function PythonDeveloperPage() {
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
    { title: "Consultation", desc: "Analyze your technical goals and Python project scope.", icon: <PenTool className="h-8 w-8 text-blue-500" /> },
    { title: "Planning", desc: "Blueprint the modules, architecture, and integrations.", icon: <Layers className="h-8 w-8 text-green-500" /> },
    { title: "Development", desc: "We write scalable, clean Python code with high performance.", icon: <Code className="h-8 w-8 text-yellow-500" /> },
    { title: "Testing", desc: "Unit, integration, and system testing to ensure reliability.", icon: <CheckCircle className="h-8 w-8 text-red-500" /> },
    { title: "Launch", desc: "Deploy &amp; monitor with ongoing optimization and support.", icon: <CloudRain className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      quote: "Their Python developers delivered a powerful backend API for our fintech app.",
      name: "Michael Tan",
      role: "CTO, Bankzy"
    },
    {
      quote: "From Django to automation scripts &ndash; these guys handled everything flawlessly.",
      name: "Clara Jensen",
      role: "Product Manager, AutoPulse"
    },
    {
      quote: "Reliable, skilled, and fast. The Python work they did saved us weeks.",
      name: "Dev Patel",
      role: "Founder, SmartBotics"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Python Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Python Developers</span></h1>
          <p>Top 1% engineers to build robust, data-driven, and scalable Python solutions.</p>
          <a href="/contact" className="hero-btn">
            <Rocket className="h-5 w-5 text-white mr-2" /> Get Started
          </a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Python for Your Project?</h2>
          <p>
            Python is one of the most versatile programming languages&mdash;perfect for AI, web apps, data pipelines, and automation. It powers everything from startups to enterprise platforms.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-12 w-12 text-blue-500" />
              </div>
              <h3>Rapid Development</h3>
              <p>Python&apos;s simplicity allows quick prototyping and faster time-to-market.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Database className="h-12 w-12 text-green-500" />
              </div>
              <h3>Scalable Backend</h3>
              <p>Frameworks like Django and FastAPI help us build powerful web backends with ease.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-12 w-12 text-red-500" />
              </div>
              <h3>Secure &amp; Stable</h3>
              <p>Python enables secure development and robust architecture with clean syntax.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Microscope className="h-12 w-12 text-purple-500" />
              </div>
              <h3>AI &amp; Automation Ready</h3>
              <p>Ideal for ML models, data analytics, and task automation using libraries like Pandas, NumPy, and more.</p>
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
                  <User className="h-12 w-12 text-gray-500" />
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
