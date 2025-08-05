import Head from 'next/head';
import { useEffect } from 'react';
import { User, Clock, Layers, Shield, Search } from 'lucide-react';

export default function ReactDeveloperPage() {
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
    { title: "Consultation", desc: "We understand your frontend vision, timeline, and goals.", icon: <Clock size={32} /> },
    { title: "Planning", desc: "UI/UX breakdown, reusable components & API structure defined.", icon: <Layers size={32} /> },
    { title: "Development", desc: "We build fast, scalable React apps using latest practices.", icon: <Search size={32} /> },
    { title: "Testing", desc: "Cross-browser & responsive testing for smooth performance.", icon: <Shield size={32} /> },
    { title: "Launch", desc: "Launch-ready with ongoing maintenance and version control.", icon: <Search size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Their React developers helped us scale our app UI beautifully and fast.",
      name: "Liam Watson",
      role: "Head of Product, Syncly",
      icon: <User size={40} />
    },
    {
      quote: "Clean code, component reuse, and performance optimization – they nailed it.",
      name: "Isabella Moore",
      role: "Frontend Lead, QuickCart",
      icon: <User size={40} />
    },
    {
      quote: "We&rsquo;ve worked with many teams, but this React team was hands down the best.",
      name: "Ravi Kapoor",
      role: "Co-Founder, BuildGrow",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire React Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>React Developers</span></h1>
          <p>Top 1% engineers to build lightning-fast and scalable frontend experiences.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose React for Your Frontend?</h2>
          <p>
            React is the industry standard for dynamic UIs and SPAs. With reusable components and a fast virtual DOM, it&apos;s ideal for scalable web apps.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Clock size={32} />
              </div>
              <h3>High Performance</h3>
              <p>React&rsquo;s virtual DOM ensures blazing-fast user experiences and updates.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>Component-Based</h3>
              <p>Reusable UI components enable efficient and consistent development.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>SEO Friendly</h3>
              <p>When paired with Next.js, React apps can be optimized for SEO &amp; performance.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Search size={32} />
              </div>
              <h3>Scalable Architecture</h3>
              <p>React makes it easy to grow your app from MVP to full-scale platform.</p>
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
