"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";

const imageSources = [
  {
    image: "/assets/imgs/hero/1.jpg",
    title: "Innovating the Future",
    subtitle: "Shaping tomorrow with cutting-edge solutions.",
  },
  {
    image: "/assets/imgs/hero/2.jpg",
    title: "AI-Powered Systems",
    subtitle: "Transforming industries with advanced technology.",
  },
  {
    image: "/assets/imgs/hero/3.jpg",
    title: "High-Tech Revolution",
    subtitle: "Leading digital transformation globally.",
  },
  {
    image: "/assets/imgs/hero/4.jpg",
    title: "Smart Development",
    subtitle: "Engineering intelligent systems.",
  },
  {
    image: "/assets/imgs/hero/5.jpg",
    title: "Digital Excellence",
    subtitle: "Delivering innovation at scale.",
  },
  {
    image: "/assets/imgs/hero/6.jpg",
    title: "Next-Gen Services",
    subtitle: "Unlocking possibilities with digital intelligence.",
  },
];

const DigitalAgencyHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to([titleRef.current, subtitleRef.current], {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(imageRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
        gsap.fromTo(
          [titleRef.current, subtitleRef.current],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" }
        );
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
        );
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" dir="ltr">
      <div className="hero-bg">
        <Image
          src={imageSources[currentIndex].image}
          alt={imageSources[currentIndex].title}
          fill
          ref={imageRef}
          style={{ objectFit: "cover", zIndex: -2 }}
          className="hero-img"
          priority
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-left">
          <Link href="/service-v5" className="hero-link" style={{ color: '#3533cd' }}>
            Services & Strategies <i className="fa-solid fa-arrow-right" />
</Link>
          <h1 ref={titleRef}>{imageSources[currentIndex].title}</h1>
          <p ref={subtitleRef}>{imageSources[currentIndex].subtitle}</p>

          <div className="experience-box">
            <h2>1000+</h2>
            <p>Successfully Completed Projects</p>
          </div>
        </div>

        <div className="hero-right">
          <div className="form-box">
            <h3>Schedule a Meeting</h3>
            <p>Book a quick session with our team to discuss your goals and how we can assist.</p>
            <ContactForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
        }

        .hero-img {
          transition: transform 1s ease, opacity 1s ease;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 3rem 0;
          color: white;
        }

        .hero-left {
          max-width: 55%;
          text-align: left;
        }

        .hero-link {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.1rem;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .hero-left h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 0;
          color: #fff;
        }

        .hero-left p {
          font-size: 1.3rem;
          margin-top: 0.7rem;
          color: #fff;
        }

        .experience-box {
          margin-top: 2rem;
        }

        .experience-box h2 {
          font-size: 2.2rem;
          font-weight: bold;
          color: #3533cd;
        }

        .experience-box p {
          margin-top: 0.3rem;
        }

        .hero-right {
          max-width: 40%;
        }

        .form-box {
          background: rgba(255, 255, 255, 0.08);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .form-box h3 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 1rem;
          color: #3533cd;
        }

        .form-box p {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #eee;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            padding: 20rem 1rem;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero-right {
            display: none;
          }

          .hero-left h1 {
            font-size: 2.2rem;
          }

          .hero-left p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DigitalAgencyHero;
