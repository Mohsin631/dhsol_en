import Head from 'next/head';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faClipboardList,
  faCloud,
  faCogs,
  faHeadset,
  faBolt,
  faShieldAlt,
  faDollarSign,
  faSlidersH,
  faUser
} from '@fortawesome/free-solid-svg-icons';

export default function AWSSpecialistPage() {
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
    { title: "Consultation", desc: "Evaluate your cloud infrastructure and understand your AWS needs.", icon: faHandshake },
    { title: "Planning", desc: "Create a customized AWS architecture aligned with your business goals.", icon: faClipboardList },
    { title: "Implementation", desc: "Implement AWS services such as EC2, Lambda, RDS, and S3 to optimize your cloud infrastructure.", icon: faCloud },
    { title: "Optimization", desc: "Enhance your AWS infrastructure for better cost efficiency, speed, and security.", icon: faCogs },
    { title: "Support", desc: "Provide ongoing maintenance and 24/7 support to ensure smooth AWS operations.", icon: faHeadset }
  ];

  const testimonials = [
    {
      quote: "The AWS team helped us scale our infrastructure to handle millions of users effortlessly. Great job!",
      name: "Aiden Clark",
      role: "CTO, WebDynamics",
    },
    {
      quote: "We&rsquo;ve been able to optimize our costs on AWS significantly. Their expertise was invaluable.",
      name: "Sophia Patel",
      role: "VP of Technology, BigCo",
    },
    {
      quote: "Thanks to their AWS solutions, we&rsquo;ve been able to reduce downtime and improve performance.",
      name: "Liam Harris",
      role: "Lead Developer, FinTech Solutions",
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire AWS Experts | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>AWS Engineers</span></h1>
          <p>Optimize, scale, and secure your cloud solutions with top-tier AWS professionals.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose AWS for Your Business?</h2>
          <p>
            AWS (Amazon Web Services) is the leading cloud platform, offering a broad range of services for computing, storage, and database management. Its scalable, secure, and cost-effective solutions empower businesses of all sizes to innovate faster and more efficiently.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3>Scalable Solutions</h3>
              <p>AWS allows you to scale your infrastructure according to your needs, handling any traffic demands effortlessly.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Highly Secure</h3>
              <p>With built-in security features and compliance, AWS ensures the safety of your data and infrastructure.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <h3>Cost-Effective</h3>
              <p>Pay only for what you use with AWS&rsquo;s flexible pricing model, making it an affordable choice for any business.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <h3>Flexible and Reliable</h3>
              <p>AWS offers a variety of services for different use cases, from simple web hosting to complex machine learning applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Our structured approach ensures that we deliver scalable and secure cloud solutions on AWS.</p>
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
