import Head from 'next/head';
import { useEffect } from 'react';
import { User, Clipboard, Code, CheckCircle, Rocket, Zap, ArrowUpCircle, Lock, Monitor } from 'lucide-react'; // Importing icons

export default function NodejsDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your app goals, backend needs & scaling challenges.", icon: <User className="h-8 w-8 text-gray-500" /> },
    { title: "Planning", desc: "Architecture planning using Node.js best practices.", icon: <Clipboard className="h-8 w-8 text-gray-500" /> },
    { title: "Development", desc: "We build APIs, microservices, and real-time apps in Node.js.", icon: <Code className="h-8 w-8 text-gray-500" /> },
    { title: "Testing", desc: "Performance & load testing to ensure backend resilience.", icon: <CheckCircle className="h-8 w-8 text-gray-500" /> },
    { title: "Launch", desc: "Deploy with CI/CD pipelines & provide long-term support.", icon: <Rocket className="h-8 w-8 text-gray-500" /> }
  ];

  const testimonials = [
    {
      quote: "Their Node.js devs built a blazing-fast backend for our marketplace. Impressive work!",
      name: "Liam Torres",
      role: "CEO, MarketGo"
    },
    {
      quote: "Reliable Node experts. Our real-time chat app works like a charm!",
      name: "Tina Roy",
      role: "Co-Founder, Chatly"
    },
    {
      quote: "Clean code, scalable logic, and amazing communication. Highly recommended!",
      name: "Aaron Kim",
      role: "Tech Director, SwiftRide"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Node.js Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Node.js Developers</span></h1>
          <p>Top 1% engineers to build fast, scalable, and real-time backend systems.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Node.js for Your Project?</h2>
          <p>
            Node.js is a powerful JavaScript runtime ideal for high-performance web apps, APIs, and real-time systems. It handles concurrent connections efficiently with non-blocking I/O.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-8 w-8 text-gray-500" />
              </div>
              <h3>High Speed</h3>
              <p>Powered by Google’s V8 engine, Node.js ensures ultra-fast execution of JavaScript code.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ArrowUpCircle className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Scalable Architecture</h3>
              <p>Event-driven and non-blocking architecture enables scaling apps effortlessly.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Secure APIs</h3>
              <p>Robust authentication, middleware, and request validation keep your data safe.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Monitor className="h-8 w-8 text-gray-500" />
              </div>
              <h3>Real-time Ready</h3>
              <p>Build chat apps, streaming services, and collaborative tools with real-time features.</p>
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
                  {/* Replacing client image with User icon */}
                  <User className="h-12 w-12 text-gray-500" /> {/* User icon */}
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
