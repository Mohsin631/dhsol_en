import Head from 'next/head';
import { useEffect } from 'react';
import { User, Settings, Plug, Code, Server, RotateCw } from 'lucide-react';

export default function JenkinsDevOpsEngineerPage() {
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
    { title: "Consultation", desc: "Evaluate your DevOps requirements and existing CI/CD practices.", icon: <Settings size={32} /> },
    { title: "Planning", desc: "Design an efficient Jenkins pipeline to optimize your workflow.", icon: <Plug size={32} /> },
    { title: "Configuration", desc: "Set up Jenkins, integrate necessary plugins, and configure pipelines for automation.", icon: <Code size={32} /> },
    { title: "Automation", desc: "Automate build, test, and deployment processes to ensure seamless CI/CD.", icon: <RotateCw size={32} /> },
    { title: "Ongoing Support", desc: "Provide ongoing support and maintenance for your Jenkins setup and pipelines.", icon: <Server size={32} /> }
  ];

  const testimonials = [
    {
      quote: "The Jenkins DevOps team helped us streamline our development process and integrate seamless CI/CD pipelines.",
      name: "Rachel Green",
      role: "DevOps Lead, CloudifyTech",
      image: <User size={40} />
    },
    {
      quote: "They took our Jenkins setup to the next level, making it more efficient and scalable. Fantastic work!",
      name: "Lucas King",
      role: "CTO, TechSage",
      image: <User size={40} />
    },
    {
      quote: "With their Jenkins expertise, we automated every aspect of our deployment pipeline and significantly reduced errors.",
      name: "Emma Wright",
      role: "DevOps Engineer, DigitalFlow",
      image: <User size={40} />
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Jenkins DevOps Engineers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>Jenkins DevOps Engineers</span></h1>
          <p>Automate your build, test, and deployment process with top-notch Jenkins DevOps professionals.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Jenkins for Your DevOps Pipeline?</h2>
          <p>
            Jenkins is an open-source automation server that is ideal for implementing continuous integration and continuous delivery (CI/CD) in software projects. It supports a wide range of plugins for building, deploying, and automating projects.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <RotateCw size={32} />
              </div>
              <h3>Automated Workflows</h3>
              <p>Jenkins allows you to automate your entire software development lifecycle, reducing errors and increasing efficiency.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Plug size={32} />
              </div>
              <h3>Seamless Integration</h3>
              <p>Integrates easily with all major version control systems, testing tools, and deployment platforms.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Server size={32} />
              </div>
              <h3>Scalability</h3>
              <p>Jenkins scales easily with your team&rsquo;s needs, handling everything from small projects to large enterprise applications.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Settings size={32} />
              </div>
              <h3>Flexibility</h3>
              <p>Jenkins supports a wide range of plugins, allowing you to tailor your CI/CD pipelines to suit your unique requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Streamlining your DevOps workflow with Jenkins.</p>
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
                  {t.image}
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
