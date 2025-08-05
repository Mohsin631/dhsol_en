import Head from 'next/head';
import { useEffect } from 'react';

export default function PHPDeveloperPage() {
  // Animation logic for Process + Testimonials
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
    { title: "Consultation", desc: "Understand your goals, tech needs & team dynamics.", icon: "fas fa-comments" },
    { title: "Planning", desc: "Design a roadmap aligned with your timeline.", icon: "fas fa-calendar-check" },
    { title: "Development", desc: "Build robust, scalable, and clean solutions.", icon: "fas fa-cogs" },
    { title: "Testing", desc: "Rigorous QA to ensure performance & stability.", icon: "fas fa-check-circle" },
    { title: "Launch", desc: "Deploy & support for long-term success.", icon: "fas fa-rocket" }
  ];

  const testimonials = [
    { quote: "Working with their PHP team was a game-changer. They delivered everything faster than expected!", name: "Sarah Mitchell", role: "CTO, Finify Inc.", image: "/images/client1.jpg" },
    { quote: "Professional, skilled, and super responsive. Their developers integrated seamlessly with our team.", name: "James Lee", role: "Tech Lead, NovaSoft", image: "/images/client2.jpg" },
    { quote: "I’m genuinely impressed with the quality and dedication. Will definitely hire again!", name: "Elena Hart", role: "Founder, LaunchBright", image: "/images/client3.jpg" }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire PHP Developers | DH Solution</title>
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>PHP Developers</span></h1>
          <p>Top 1% engineers to build scalable, secure web applications fast.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose PHP for Your Project?</h2>
          <p>
            PHP remains one of the most popular languages for building dynamic websites and web applications. Whether it&rsquo;s small or large-scale, PHP offers speed, flexibility, and scalability.
          </p>

          <div className="tech-features">
            {[
              { icon: <i className="fas fa-bolt"></i>, title: "Fast Development", desc: "PHP frameworks like Laravel enable rapid development, delivering high-quality results in record time." },
              { icon: <i className="fas fa-layer-group"></i>, title: "Highly Scalable", desc: "PHP-based solutions are designed to grow with your business, handling traffic spikes and increased demand effortlessly." },
              { icon: <i className="fas fa-shield-alt"></i>, title: "Secure", desc: "Built-in security features make PHP a reliable choice for building secure web applications with ease." },
              { icon: <i className="fas fa-cogs"></i>, title: "Versatile", desc: "PHP works seamlessly with all major databases, CMS platforms like WordPress, and integrates with various APIs." }
            ].map((feature, idx) => (
              <div className="feature" key={idx}>
                <div className="icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
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
                  <i className={step.icon}></i>
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
                    <i className="fas fa-user"></i>
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
