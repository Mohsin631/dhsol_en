'use client';

const DigitalAgencyAbout = () => {
  return (
    <section className="about-section">
      <div className="content-wrapper">
        <h2>About DH Solutions</h2>
        <div className="underline"></div>
        <p>
          At DH Solutions, we harness innovative technology and creative solutions to empower businesses globally. With over 10 years of experience, our team specializes in custom software, AI-powered platforms, and digital transformation services that drive growth and success.
        </p>
        <p>
          We believe in partnership, quality, and delivering scalable, reliable digital experiences. Whether you&apos;re a startup or enterprise, DH Solutions is your trusted tech ally in the fast-evolving digital landscape.
        </p>
        <button onClick={() => window.location.href = '/about'} className="cta-btn">
          Learn More
        </button>
      </div>

      <style jsx>{`
        .about-section {
          background: #fefefe url('data:image/svg+xml;utf8,<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="2" fill="%23e0e7ff"/></svg>') repeat;
          padding: 7rem 2rem;
          display: flex;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          color: #1e293b;
        }

        .content-wrapper {
          max-width: 720px;
          text-align: center;
        }

        h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .underline {
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, #4f46e5, #3b82f6);
          margin: 0 auto 2rem auto;
          border-radius: 2px;
        }

        p {
          font-size: 1.15rem;
          line-height: 1.75;
          color: #475569;
          margin-bottom: 1.8rem;
        }

        .cta-btn {
          background: linear-gradient(90deg, #4f46e5, #3b82f6);
          border: none;
          padding: 0.75rem 2.25rem;
          border-radius: 9999px;
          font-weight: 700;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 10px 15px rgba(79, 70, 229, 0.3);
          transition: background 0.3s ease;
          user-select: none;
        }

        .cta-btn:hover,
        .cta-btn:focus {
          background: linear-gradient(90deg, #4338ca, #2563eb);
          outline: none;
        }

        @media (max-width: 600px) {
          .about-section {
            padding: 4rem 1rem;
          }

          h2 {
            font-size: 2.25rem;
          }

          p {
            font-size: 1rem;
          }

          .cta-btn {
            width: 100%;
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DigitalAgencyAbout;
