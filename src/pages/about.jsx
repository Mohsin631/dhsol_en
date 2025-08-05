import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About DH Solution - Expert Software Development Agency</title>
        <meta
          name="description"
          content="Learn more about DH Solution, a leading software development company providing IT solutions and expertise in web development, AI, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="About DH Solution, software development agency, IT solutions, web development, AI expertise, digital solutions"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About DH Solution - Expert Software Development Agency" />
        <meta
          property="og:description"
          content="Discover DH Solution, a top software development agency offering expert IT services, AI, and web development solutions tailored to your needs."
        />
        <meta property="og:url" content="https://dhsol.net/about" />
        <meta property="og:image" content="https://dhsol.net/images/about-hero.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DH Solution - Expert Software Development Agency" />
        <meta
          name="twitter:description"
          content="Learn more about DH Solution, a leading agency specializing in AI, web development, and tailored IT solutions for businesses."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/about-hero.jpg" />
      </Head>
      <main>
        <RootLayout>
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <AboutTeam />
          <DigitalAgencyBrand />
          <AboutTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
