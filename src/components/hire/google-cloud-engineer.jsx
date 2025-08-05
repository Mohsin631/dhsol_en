import Head from 'next/head';
import { useEffect } from 'react';
import { Cloud, Lock, DollarSign, Server, User } from 'lucide-react'; // Import relevant icons

export default function GoogleCloudEngineerPage() {
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
    { title: "Consultation", desc: "Analyze your cloud infrastructure and define your Google Cloud needs.", icon: <Cloud size={32} /> },
    { title: "Planning", desc: "Design a cloud architecture tailored to your business requirements using GCP services.", icon: <Cloud size={32} /> },
    { title: "Implementation", desc: "Deploy Google Cloud services such as Compute Engine, GKE, Cloud Storage, and BigQuery.", icon: <Server size={32} /> },
    { title: "Optimization", desc: "Optimize the cloud infrastructure for cost, performance, and scalability.", icon: <DollarSign size={32} /> },
    { title: "Support", desc: "Ongoing support and maintenance to ensure optimal cloud performance.", icon: <Lock size={32} /> }
  ];

  const testimonials = [
    {
      quote: "Their Google Cloud solutions helped us cut costs and scale quickly. Their expertise in GCP is top-notch.",
      name: "Lucas Davis",
      role: "CTO, CloudSynergy",
      image: <User size={40} />
    },
    {
      quote: "Excellent team! They guided us through every step of our GCP migration and ensured everything went smoothly.",
      name: "Amelia Brown",
      role: "Lead Engineer, FinTechX",
      image: <User size={40} />
    },
    {
      quote: "We saw an immediate improvement in performance and scalability thanks to their GCP architecture implementation.",
      name: "Owen Lee",
      role: "Tech Lead, InnovateTech",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Google Cloud Engineers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Google Cloud Engineers</span></h1>
          <p>Leverage the power of Google Cloud to scale your infrastructure, improve security, and drive innovation.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Google Cloud for Your Business?</h2>
          <p>
            Google Cloud Platform (GCP) offers highly reliable, scalable, and secure infrastructure services for businesses of all sizes. Whether you&rsquo;re running applications, storing data, or analyzing large datasets, GCP provides a suite of powerful tools to optimize your cloud journey.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Cloud size={32} />
              </div>
              <h3>Scalable Infrastructure</h3>
              <p>Scale your cloud infrastructure based on demand with Google Cloud&rsquo;s flexible and robust solutions.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Lock size={32} />
              </div>
              <h3>Highly Secure</h3>
              <p>Benefit from Google Cloud&rsquo;s industry-leading security measures to protect your data and applications.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <DollarSign size={32} />
              </div>
              <h3>Cost-Effective</h3>
              <p>Google Cloud offers competitive pricing and cost optimization tools, allowing you to get the most out of your cloud investment.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />
              </div>
              <h3>Versatile and Flexible</h3>
              <p>Google Cloud is suitable for various use cases, from simple web hosting to advanced machine learning and AI applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">We follow a streamlined approach to deliver the best GCP solutions to meet your business needs.</p>
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
                    {t.image}
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
