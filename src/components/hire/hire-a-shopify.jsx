import Head from 'next/head';
import { useEffect } from 'react';
import {
  User,
  Clock,
  Shield,
  Layers,
  ShoppingCart,
} from 'lucide-react';

export default function ShopifyExpertPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active', 'visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.process-step, .testimonial-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      title: 'Consultation',
      desc: 'Understand your goals, Shopify needs & business model.',
      icon: <Clock size={32} />,
    },
    {
      title: 'Planning',
      desc: 'Create a Shopify strategy aligned with your brand.',
      icon: <Layers size={32} />,
    },
    {
      title: 'Development',
      desc: 'Design and develop a high-converting Shopify store.',
      icon: <ShoppingCart size={32} />,
    },
    {
      title: 'Testing',
      desc: 'QA to ensure a seamless shopping experience.',
      icon: <Shield size={32} />,
    },
    {
      title: 'Launch',
      desc: 'Go live and monitor for ongoing success.',
      icon: <ShoppingCart size={32} />,
    },
  ];

  const testimonials = [
    {
      quote: 'Their Shopify experts helped us double our conversions within weeks!',
      name: 'Maya Thompson',
      role: 'Ecom Manager, GlowBoutique',
      icon: <User size={40} />,
    },
    {
      quote: 'Exceptional work! Our new Shopify store looks stunning and works flawlessly.',
      name: 'Lucas Grant',
      role: 'Founder, CraftNest',
      icon: <User size={40} />,
    },
    {
      quote: 'From design to development, they nailed every part of the process.',
      name: 'Ravi Patel',
      role: 'CEO, UrbanFit',
      icon: <User size={40} />,
    },
  ];

  return (
    <div className="expert-page">
      <Head>
        <title>Hire Shopify Experts | DH Solution</title>
        <meta
          name="description"
          content="Work with top-rated Shopify developers at DH Solution. From planning to launch, we build scalable, high-performing eCommerce experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            Hire Expert <span>Shopify Experts</span>
          </h1>
          <p>
            Top 1% engineers to build stunning, high-converting Shopify stores fast.
          </p>
          <a href="/contact" className="hero-btn">
            Get Started
          </a>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="tech-overview">
        <div className="container">
          <h2>Why Choose Shopify for Your Store?</h2>
          <p>
            Shopify is the go-to platform for launching, scaling, and managing
            modern ecommerce brands. It&apos;s secure, flexible, and built for growth.
          </p>

          <div className="tech-features">
            <div className="feature">
              <div className="icon-container">
                <Clock size={32} />
              </div>
              <h3>Fast Setup</h3>
              <p>
                Launch your store in days with a platform that&apos;s built for speed and ease.
              </p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <ShoppingCart size={32} />
              </div>
              <h3>Highly Scalable</h3>
              <p>
                From 10 to 10,000 products, Shopify scales with your business without compromise.
              </p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Shield size={32} />
              </div>
              <h3>Secure & Reliable</h3>
              <p>
                Shopify offers best-in-class security and 24/7 uptime for uninterrupted sales.
              </p>
            </div>

            <div className="feature">
              <div className="icon-container">
                <Layers size={32} />
              </div>
              <h3>Customizable</h3>
              <p>
                Tailor your store with custom themes, integrations, and advanced features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="subtitle">
            Structured for speed, precision, and quality delivery.
          </p>
          <div className="steps-row">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="icon-circle">{step.icon}</div>
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
                  <div className="client-icon">{t.icon}</div>
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
