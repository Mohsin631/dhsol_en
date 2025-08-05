import Head from 'next/head';
import { useEffect } from 'react';
import { CheckCircle, GitMerge, Target, Zap, User } from 'lucide-react'; // Importing relevant icons from Lucide

export default function QAEngineerPage() {
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
    { title: "Consultation", desc: "Analyze your project to understand testing requirements and goals.", icon: <CheckCircle className="h-8 w-8 text-blue-500" /> },
    { title: "Test Plan", desc: "Design a comprehensive test plan and strategy tailored to your needs.", icon: <GitMerge className="h-8 w-8 text-green-500" /> },
    { title: "Test Execution", desc: "Execute tests across different stages to identify and resolve issues.", icon: <Zap className="h-8 w-8 text-yellow-500" /> },
    { title: "Bug Reporting", desc: "Document and report bugs with detailed information for faster resolution.", icon: <Target className="h-8 w-8 text-red-500" /> },
    { title: "Final Testing", desc: "Conduct final tests to ensure the product is ready for deployment.", icon: <CheckCircle className="h-8 w-8 text-purple-500" /> }
  ];

  const testimonials = [
    {
      quote: "Their QA engineers were thorough and ensured that no critical bugs were missed. The quality of our app improved significantly.",
      name: "Emma Roberts",
      role: "Product Owner, FinTech Solutions"
    },
    {
      quote: "We had excellent collaboration with their QA team. They were diligent and proactive in finding and fixing issues.",
      name: "Mark Johnson",
      role: "Lead Developer, BrightTech"
    },
    {
      quote: "Fantastic job by the QA team! They helped us deliver a flawless product on time. Highly recommended!",
      name: "Alice Walker",
      role: "Project Manager, WebVenture"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire QA Engineers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>QA Engineers</span></h1>
          <p>Ensure high-quality, bug-free applications with top QA professionals.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose QA Engineers for Your Project?</h2>
          <p>
            Quality assurance (QA) is crucial to the success of any software product. It ensures the product is free of bugs, meets user expectations, and performs optimally under all conditions.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Zap className="h-12 w-12 text-blue-500" />
              </div>
              <h3>Automated Testing</h3>
              <p>Automated tests save time, reduce errors, and ensure faster releases with continuous integration.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3>Accurate Bug Detection</h3>
              <p>QA engineers use a mix of manual and automated techniques to detect even the most elusive bugs.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Target className="h-12 w-12 text-red-500" />
              </div>
              <h3>Scalable Testing</h3>
              <p>QA testing solutions scale with your project, ensuring comprehensive testing even in complex environments.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <GitMerge className="h-12 w-12 text-yellow-500" />
              </div>
              <h3>Seamless Collaboration</h3>
              <p>Our QA engineers collaborate seamlessly with developers to provide fast feedback and ensure continuous quality delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">Ensuring the highest quality standards with structured and reliable testing.</p>
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
                  <User className="h-12 w-12 text-gray-500" /> {/* User icon in place of image */}
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
