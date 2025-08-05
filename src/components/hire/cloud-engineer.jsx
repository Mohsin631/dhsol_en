import Head from 'next/head';
import { useEffect } from 'react';
import { User, Rocket, Layers, Shield, DollarSign, Settings, ClipboardList, UploadCloud, TrendingUp, Headset } from 'lucide-react';

export default function CloudEngineerPage() {
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
    { title: "Consultation", desc: "Analyze your cloud infrastructure needs and growth requirements.", icon: <ClipboardList size={36} /> },
    { title: "Planning", desc: "Design a cloud architecture tailored to your business and future scalability.", icon: <Settings size={36} /> },
    { title: "Implementation", desc: "Implement cloud solutions using AWS, Azure, or Google Cloud to optimize performance.", icon: <UploadCloud size={36} /> },
    { title: "Optimization", desc: "Refine and optimize cloud services for cost-efficiency and resource usage.", icon: <TrendingUp size={36} /> },
    { title: "Support", desc: "Provide ongoing monitoring, troubleshooting, and updates to ensure seamless cloud operations.", icon: <Headset size={36} /> }
  ];

  const testimonials = [
    {
      quote: "Our cloud migration was seamless, and the solution provided has increased our efficiency tremendously.",
      name: "David Brown",
      role: "CTO, GlobalTech"
    },
    {
      quote: "The team helped us optimize our AWS infrastructure, saving us time and money while scaling our operations.",
      name: "Emma White",
      role: "VP of Engineering, SoftWave"
    },
    {
      quote: "We needed reliable cloud engineers for our project, and their expertise in cloud security was invaluable.",
      name: "Olivia Green",
      role: "Cloud Operations Lead, CloudNet"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Cloud Engineers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Cloud Engineers</span></h1>
          <p>Build robust and scalable cloud solutions with top engineers from the cloud computing industry.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Cloud for Your Business?</h2>
          <p>
            Cloud computing allows businesses to scale faster, reduce IT costs, and enhance data security. Whether it&rsquo;s for infrastructure management, application hosting, or data storage, cloud solutions are flexible and future-proof.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Rocket size={36} />
              </div>
              <h3>Rapid Deployment</h3>
              <p>Cloud engineers quickly deploy and configure cloud infrastructure to meet your business needs.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={36} />
              </div>
              <h3>Scalable Solutions</h3>
              <p>Cloud solutions can be easily scaled as your business grows, accommodating high-traffic spikes effortlessly.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={36} />
              </div>
              <h3>Enhanced Security</h3>
              <p>Cloud platforms provide built-in security features to protect your data and infrastructure from external threats.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <DollarSign size={36} />
              </div>
              <h3>Cost-Effective</h3>
              <p>Cloud platforms offer flexible pricing models, making it easier to optimize costs and only pay for what you use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Structured to ensure seamless cloud solutions that drive your success.</p>
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
                  <div className="icon-circle">
                    <User size={36} />
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
