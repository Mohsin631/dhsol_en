import Head from 'next/head';
import { useEffect } from 'react';
import { Edit, Search, GitCommit, Monitor, RefreshCw, User } from 'lucide-react';

export default function UIUXDesignerPage() {
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
    { title: "Consultation", desc: "Understand the user needs and define the design requirements.", icon: <Edit size={40} /> },
    { title: "Research", desc: "Conduct user research to understand the target audience and user behavior.", icon: <Search size={40} /> },
    { title: "Wireframing", desc: "Create wireframes to visualize the layout and functionality of the design.", icon: <GitCommit size={40} /> },
    { title: "Design", desc: "Design high-fidelity prototypes and user interfaces based on the wireframes.", icon: <Monitor size={40} /> },
    { title: "Testing", desc: "Test designs with users and refine based on feedback.", icon: <RefreshCw size={40} /> }
  ];

  const testimonials = [
    {
      quote: "The UI/UX design team at DH Solution transformed our app&apos;s usability, increasing user satisfaction significantly.",
      name: "Sophia Williams",
      role: "Product Manager, TechTonic",
      icon: <User size={40} />
    },
    {
      quote: "Their attention to detail and user-centric design approach were instrumental in our app&rsquo;s success.",
      name: "Daniel Black",
      role: "Founder, InnovateX",
      icon: <User size={40} />
    },
    {
      quote: "We saw an immediate improvement in our app&apos;s engagement after collaborating with their UI/UX team.",
      name: "Rachel Green",
      role: "Lead Designer, AppWorks",
      icon: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire UI/UX Designers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>UI/UX Designers</span></h1>
          <p>Create intuitive, user-friendly designs that boost engagement and satisfaction.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Our UI/UX Designers?</h2>
          <p>
            Our UI/UX designers focus on creating user-centered designs that deliver an intuitive, seamless experience. Whether it&apos;s mobile apps, web platforms, or product design, we ensure that your users&apos; needs are at the heart of every design decision.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Edit size={40} />
              </div>
              <h3>Creative Design</h3>
              <p>Our designers bring innovative and aesthetically pleasing designs that align with your brand and user needs.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Search size={40} />
              </div>
              <h3>User-Centered Approach</h3>
              <p>We focus on the user&rsquo;s journey, creating designs that are intuitive and easy to navigate.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Monitor size={40} />
              </div>
              <h3>Mobile-First Design</h3>
              <p>We ensure your design is optimized for mobile, providing a seamless experience across devices.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <RefreshCw size={40} />
              </div>
              <h3>Iterative Process</h3>
              <p>We use an iterative design approach, refining the product through constant feedback and testing to achieve the best result.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Designing with the user in mind to create functional, engaging, and beautiful experiences.</p>
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
