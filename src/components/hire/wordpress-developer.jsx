import Head from 'next/head';
import { useEffect } from 'react';
import { Edit, GitCommit, Lock, Search, User } from 'lucide-react'; // Import relevant Lucide icons

export default function WordPressDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your vision, website goals & content structure.", icon: <Edit size={40} /> },
    { title: "Planning", desc: "Plan site architecture, features, and CMS flow.", icon: <GitCommit size={40} /> },
    { title: "Development", desc: "Develop custom WordPress themes & plugins.", icon: <Edit size={40} /> },
    { title: "Testing", desc: "Ensure speed, SEO, mobile responsiveness, and security.", icon: <Lock size={40} /> },
    { title: "Launch", desc: "Deploy and maintain your site with ongoing support.", icon: <Search size={40} /> }
  ];

  const testimonials = [
    {
      quote: "They created a fast, clean, and SEO-friendly WordPress site for our company.",
      name: "Emily Chen",
      role: "Marketing Director, GreenEdge",
      icon: <User size={40} />
    },
    {
      quote: "Great experience! Their WordPress experts delivered exactly what we envisioned.",
      name: "David Martinez",
      role: "Founder, PixelHaus",
      icon: <User size={40} />
    },
    {
      quote: "Smooth communication and top-notch WordPress skills. Highly recommend!",
      name: "Nina Taylor",
      role: "CEO, SmartSaaS",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire WordPress Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>WordPress Developers</span></h1>
          <p>Top 1% engineers to build fast, secure, and custom WordPress websites.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose WordPress for Your Website?</h2>
          <p>
            WordPress powers over 40% of the web for good reason — it&apos;s powerful, customizable, and ideal for everything from blogs to enterprise sites.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Edit size={40} />
              </div>
              <h3>Quick Launch</h3>
              <p>With thousands of themes and plugins, your site can go live in record time.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitCommit size={40} />
              </div>
              <h3>Flexible CMS</h3>
              <p>Manage your content easily with a robust and user-friendly backend.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={40} />
              </div>
              <h3>Secure</h3>
              <p>Regular updates and strong plugin ecosystem ensure your site stays protected.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Search size={40} />
              </div>
              <h3>SEO Ready</h3>
              <p>Built-in SEO tools and integrations help boost your search rankings.</p>
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
                  {t.icon}
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
