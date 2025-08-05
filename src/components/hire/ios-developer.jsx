import Head from 'next/head';
import { useEffect } from 'react';
import { User, Smartphone, Shield, ArrowUpCircle, Cloud, Code, Laptop } from 'lucide-react'; // Add relevant icons

export default function IOSDeveloperPage() {
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
    { title: "Consultation", desc: "Analyze your iOS app requirements and target audience.", icon: <Smartphone size={32} /> },
    { title: "Planning", desc: "Create a roadmap for your iOS app with emphasis on intuitive UI/UX.", icon: <Laptop size={32} /> },
    { title: "Development", desc: "Build an iOS app using Swift or Objective-C, focusing on performance and user experience.", icon: <Code size={32} /> },
    { title: "Testing", desc: "Perform comprehensive testing across different devices and screen sizes.", icon: <Shield size={32} /> },
    { title: "Launch", desc: "Deploy the app on the Apple App Store and provide ongoing updates and support.", icon: <ArrowUpCircle size={32} /> }
  ];

  const testimonials = [
    {
      quote: "The iOS app they created for us is flawless. It works smoothly on all devices and is loved by our users.",
      name: "Sophia Johnson",
      role: "Product Manager, TechX Inc.",
      image: <User size={40} />  // Replace with user icon
    },
    {
      quote: "The team delivered an excellent iOS app with an intuitive design. We're very happy with the results!",
      name: "Michael Harris",
      role: "Co-Founder, AppCraft",
      image: <User size={40} />  // Replace with user icon
    },
    {
      quote: "We were amazed by the speed and efficiency of their iOS development. They really understood our needs.",
      name: "Lucas White",
      role: "Founder, Creative Solutions",
      image: <User size={40} />  // Replace with user icon
    }
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire iOS Developers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Hire Expert <span>iOS Developers</span></h1>
          <p>Create powerful and user-friendly iOS apps with the top 1% of engineers.</p>
          <a href="/contact" className="hero-btn">Get Started</a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose iOS for Your App?</h2>
          <p>
            iOS apps provide a sleek, reliable, and consistent experience across all Apple devices. The performance and security features make it a top choice for businesses that need a polished product.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Smartphone size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Fast Development</h3>
              <p>iOS frameworks like SwiftUI enable rapid app development, minimizing time to market.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Laptop size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Highly Scalable</h3>
              <p>iOS apps are optimized for high performance, ensuring smooth scaling as your user base grows.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Secure</h3>
              <p>iOS offers robust security features, safeguarding your app and users from data breaches.</p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Cloud size={32} />  {/* Use relevant icon */}
              </div>
              <h3>Flexible</h3>
              <p>iOS apps integrate seamlessly with iCloud, Siri, and other native services, making them more functional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">We follow a streamlined process to deliver flawless iOS apps.</p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">
                  {step.icon}  {/* Render icons here */}
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
                  {t.image}  {/* Render user icon */}
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
