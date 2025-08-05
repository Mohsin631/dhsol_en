import CareerBenefit from "@/components/benefit/CareerBenefit";
import Career1 from "@/components/career/Career1";
import RootLayout from "@/components/common/layout/RootLayout";
import CareerGallery from "@/components/gallery/CareerGallery";
import CareerHero from "@/components/hero/CareerHero";
import WhyJoinDH from "@/components/whydh/whydh";
import HiringProcess from "@/components/HiringProcess/HiringProcess";
import CareerFAQ from "@/components/careerFAQ/careerFAQ";
import Head from "next/head";

const Career = () => {
  return (
    <div>
      <Head>
        <title>Careers at DH Solution - Join Our Growing Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at DH Solution. Join our dynamic team and help shape the future of software development, AI, and digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="career opportunities, join DH Solution, software development, AI careers, digital solutions, tech jobs, work with us"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Careers at DH Solution - Join Our Growing Team" />
        <meta
          property="og:description"
          content="Discover a rewarding career at DH Solution. Explore our open positions and learn more about the benefits of working with a top software development agency."
        />
        <meta property="og:url" content="https://dhsol.net/career" />
        <meta property="og:image" content="https://dhsol.net/images/career-hero.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at DH Solution - Join Our Growing Team" />
        <meta
          name="twitter:description"
          content="Join DH Solution and be a part of a leading team in software development, AI, and digital innovation. Explore our career opportunities today!"
        />
        <meta name="twitter:image" content="https://dhsol.net/images/career-hero.jpg" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <CareerHero />
          <CareerGallery />
          <Career1 />
          <CareerBenefit />
          <WhyJoinDH />
          <HiringProcess />
          <CareerFAQ />
        </RootLayout>
      </main>
    </div>
  );
};

export default Career;
