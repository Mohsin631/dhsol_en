import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import HireAnExpert from "@/components/hire/hire";
import HowItWorks from "@/components/hire/howitworks";
import StartingFrom from "@/components/hire/PricingPackages";
import ExpertFAQ from "@/components/hire/expertfaq";
import Head from "next/head";


const About = () => {
  return (
    <div>
      <Head>
        <title>Hire a Developer - Expert Developers for Your Projects</title>
        <meta
          name="description"
          content="Looking to hire a developer? We provide expert developers for various technologies to meet your business needs. Get in touch with our team today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="hire a developer, expert developers, software development, hire remote developer, IT solutions, hire JavaScript, Python, Node.js, React developer"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire a Developer - Expert Developers for Your Projects" />
        <meta
          property="og:description"
          content="Hire expert developers for your next project. We offer remote and flexible hiring options for developers specializing in various technologies."
        />
        <meta property="og:url" content="https://dhsol.net/hire" />
        <meta property="og:image" content="https://dhsol.net/images/hire-developer.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire a Developer - Expert Developers for Your Projects" />
        <meta
          name="twitter:description"
          content="Find and hire expert developers for your business. Explore our hiring process and start building your team today."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/hire-developer.jpg" />
      </Head>
      <main>
        <RootLayout>
          <HireAnExpert />
          <AboutCounter />
          <HowItWorks />
          <StartingFrom />
          <ExpertFAQ />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
