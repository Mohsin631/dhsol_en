import Head from 'next/head';
import { useEffect } from 'react';

export default function AndroidDeveloperPage() {
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
    { title: "Consultation", desc: "Understand your Android project requirements and goals.", icon: "fas fa-comments" },
    { title: "Planning", desc: "Design a roadmap for your Android app with a focus on user experience.", icon: "fas fa-calendar-check" },
    { title: "Development", desc: "Write clean, efficient, and scalable Android code using Java or Kotlin.", icon: "fas fa-code" },
    { title: "Testing", desc: "Conduct thorough testing across various devices to ensure seamless performance.", icon: "fas fa-mobile-alt" },
    { title: "Launch", desc: "Deploy your app on Google Play Store and provide long-term support and updates.", icon: "fas fa-rocket" }
  ];

  const testimonials = [
    {
      quote: "The Android app they developed exceeded our expectations! Their team was highly skilled and responsive.",
      name: "Rachel Green",
      role: "Founder, GreenTech Solutions",
      image: "/images/client1.jpg"
    },
    {
      quote: "They helped us create a user-friendly, reliable Android app that our customers love. Excellent work!",
      name: "David Smith",
      role: "CEO, Appify",
      image: "/images/client2.jpg"
    },
    {
      quote: "A pleasure to work with! Their Android development team was able to implement all of our complex features seamlessly.",
      name: "Emily Brown",
      role: "Product Lead, PixelTech",
      image: "/images/client3.jpg"
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Android Developers | DH Solution</title>
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1> Hire Expert <span>Android Developers</span></h1>
          <p> Build innovative, responsive, and high-performance Android applications with the best developers.</p>
          <a href="/contact" className="hero-btn"> Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Android for Your App?</h2>
          <p>Android is one of the most widely used platforms for mobile applications. With its vast reach and flexibility, it offers endless opportunities for developers to create robust, scalable applications.</p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Fast Development</h3>
              <p>Android Studio and other tools enable rapid app development with less time to market.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-expand-alt"></i>
              </div>
              <h3>Highly Scalable</h3>
              <p> Android apps can handle large amounts of traffic, allowing your business to scale seamlessly.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Secure</h3>
              <p> Android apps come with strong security measures to protect user data and privacy.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <i className="fas fa-plug"></i>
              </div>
              <h3>Flexible</h3>
              <p> Android apps are highly customizable and can integrate seamlessly with third-party services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2> Our Process</h2>
          <p className="subtitle"> From idea to deployment, we focus on creating high-performance Android apps.</p>
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
          <h2> What Our Clients Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="client-info">
                  {/* Adding a human icon inside a round figure */}
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
