import ContactForm from "@/components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-full-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="content-box">
            <h1 className="tagline">gET A DEMO</h1>
            <h2 className="headline" style={{ color: "#fff" }}>
              We&rsquo;d Love to Show You Around
            </h2>
            <p className="description" style={{ color: "#fff" }}>
              Ready to see how <strong>DH Solutions</strong> can help transform your service delivery? <br /><br />
              Call us, chat with us, or fill out the form to get in touch — we&rsquo;re excited to see what challenges we can solve together.
            </p>
          </div>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
