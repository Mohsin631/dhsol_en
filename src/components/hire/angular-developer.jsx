import Head from 'next/head';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faClipboardList,
  faCode,
  faClipboardCheck,
  faRocket,
  faBolt,
  faShieldAlt,
  faSlidersH,
  faUser
} from '@fortawesome/free-solid-svg-icons';

export default function AngularDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your Angular development requirements and business needs.", icon: faHandshake },
    { title: "Planning", desc: "Create a roadmap for development, aligned with your goals.", icon: faClipboardList },
    { title: "Development", desc: "Develop robust and scalable Angular applications with modular architecture.", icon: faCode },
    { title: "Testing", desc: "Perform rigorous testing to ensure your Angular app&rsquo;s performance and stability.", icon: faClipboardCheck },
    { title: "Launch", desc: "Deploy and ensure optimal performance post-launch.", icon: faRocket }
  ];

  const testimonials = [
    {
      quote: "Working with DH Solution&rsquo;s Angular team was a smooth experience. Their expertise led to a fast and efficient launch.",
      name: "Lisa Stevens",
      role: "Lead Developer, ShopCircle",
      image: "/images/client1.jpg"
    },
    {
      quote: "We needed a scalable and high-performing Angular solution. DH Solution delivered perfectly.",
      name: "Michael Brown",
      role: "CTO, FinSmart",
      image: "/images/client2.jpg"
    },
    {
      quote: "DH Solution&rsquo;s Angular developers went above and beyond. The final product exceeded our expectations!",
      name: "James Parker",
      role: "CEO, GreenTech Innovations",
      image: "/images/client3.jpg"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Angular Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Angular Developers</span></h1>
          <p>Top 1% engineers to build powerful, scalable applications with Angular.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Angular for Your Application?</h2>
          <p>
            Angular provides a powerful framework for building dynamic, single-page web applications with high performance and scalability. It&rsquo;s perfect for complex, enterprise-level projects.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3>Fast Development</h3>
              <p>Angular&rsquo;s two-way data binding and extensive tooling allow for rapid development and scalability.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <h3>Highly Scalable</h3>
              <p>Angular&rsquo;s modular architecture enables you to build scalable apps that grow with your business.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Secure</h3>
              <p>Angular comes with built-in security features, including XSS protection and data sanitization.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <h3>Flexible</h3>
              <p>Angular is flexible enough to meet the needs of different industries with custom features and functionalities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">From ideation to launch, we ensure your Angular project is a success.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">
                  <FontAwesomeIcon icon={step.icon} />
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
                    <FontAwesomeIcon icon={faUser} />
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
