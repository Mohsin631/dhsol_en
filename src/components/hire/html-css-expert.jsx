import Head from 'next/head';
import { useEffect } from 'react';
import { User, List, Code, CheckSquare, Rocket, Clock, Layers, Phone, Sliders } from 'lucide-react'; // Importing relevant icons

export default function HTMLCSSExpertPage() {
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
    { title: "Consultation", desc: "Identify your requirements for HTML and CSS design and layout needs.", icon: <User size={32} /> },
    { title: "Planning", desc: "Create a clear and scalable design roadmap based on your goals.", icon: <List size={32} /> },
    { title: "Development", desc: "Develop clean, semantic, and responsive HTML and CSS code.", icon: <Code size={32} /> },
    { title: "Testing", desc: "Ensure that the HTML and CSS code works across all devices and browsers.", icon: <CheckSquare size={32} /> },
    { title: "Launch", desc: "Deploy the HTML/CSS design to production, ensuring a smooth launch.", icon: <Rocket size={32} /> }
  ];

  const testimonials = [
    {
      quote: "The HTML/CSS team at DH Solution helped us build a visually stunning website. It looks great on all devices!",
      name: "Jessica Adams",
      role: "Web Designer, CreativeHub",
      icon: <User size={40} color="#FF5733" />
    },
    {
      quote: "Impressive work on our HTML and CSS. We now have a responsive website that is smooth and fast.",
      name: "David Cooper",
      role: "CEO, Techify",
      icon: <User size={40} color="#33C1FF" />
    },
    {
      quote: "Highly skilled developers! They understood our vision and delivered exceptional HTML and CSS layouts.",
      name: "Samantha Reed",
      role: "Product Manager, FlexWeb",
      icon: <User size={40} color="#33FF57" />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire HTML/CSS Experts | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>HTML/CSS Developers</span></h1>
          <p>Top 1% engineers to create responsive, visually appealing websites with clean HTML and CSS.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose HTML/CSS for Your Website?</h2>
          <p>
            HTML and CSS form the backbone of modern web design, enabling you to build attractive, responsive, and user-friendly websites.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Clock size={32} /> {/* Icon for "Fast Development" */}
              </div>
              <h3>Fast Development</h3>
              <p>HTML and CSS offer an efficient way to develop a website that is responsive and fast-loading.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} /> {/* Icon for "Highly Scalable" */}
              </div>
              <h3>Highly Scalable</h3>
              <p>Our HTML/CSS designs are flexible and scalable to fit your business needs as they evolve.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Phone size={32} /> {/* Icon for "Responsive" */}
              </div>
              <h3>Responsive</h3>
              <p>HTML and CSS are used to ensure your website is responsive, providing an optimal viewing experience across devices.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Sliders size={32} /> {/* Icon for "Flexible" */}
              </div>
              <h3>Flexible</h3>
              <p>HTML and CSS are highly versatile, allowing us to implement custom designs that suit your brand’s identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">From design to launch, we ensure your HTML and CSS code is clean and optimized.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">
                  {step.icon}  {/* Using the icon */}
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
                    {t.icon}  {/* Replacing image with the User icon */}
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
