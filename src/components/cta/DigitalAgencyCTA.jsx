'use client';

import ContactForm from "@/components/contact/ContactForm";
import { useEffect, useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import ScheduleMeetingDark from "@/components/meeting/ScheduleMeetingDark";

export default function CallToAction() {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '242541729',
          formId: '2b8369ed-d041-4329-a94d-13a0b946b5ba',
          region: 'na2',
          target: '#hubspot-form',
        });
        setHubspotLoaded(true);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        {/* Left Side Content */}
        <div className="cta-text">
          <div className="cta-badge">
            <Terminal size={16} />
            <span>Expert Software Team</span>
          </div>
          <h1>
            Let&rsquo;s Build Something <span className="highlight">Extraordinary</span>
          </h1>
          <p style={{ color: "#fff" }}>
            At DH Solutions, we deliver high-performing apps, powerful backends, and digital products that scale. Let&rsquo;s turn your idea into reality.
          </p>

          <ul className="cta-features">
            <li><Sparkles size={18} /> Custom Web &amp; Mobile Development</li>
            <li><Sparkles size={18} /> AI &amp; ML Integrations</li>
            <li><Sparkles size={18} /> API Architecture &amp; Cloud Solutions</li>
          </ul>

          <div className="cta-stats">
            <div>
              <h3>1000+</h3>
              <p style={{ color: "#fff" }}>Projects Delivered</p>
            </div>
            <div>
              <h3>40+</h3>
              <p style={{ color: "#fff" }}>Industries Served</p>
            </div>
            <div>
              <h3>95%</h3>
              <p style={{ color: "#fff" }}>Client Retention</p>
            </div>
          </div>
        </div>

        {/* Right Side HubSpot Form */}
        <div className="cta-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
