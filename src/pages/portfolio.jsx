import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Our Portfolio | DH Solutions</title>
        <meta 
          name="description" 
          content="Explore our portfolio showcasing successful projects in custom software development, AI solutions, and digital transformations. See how DH Solutions empowers businesses globally." 
        />
        <meta name="keywords" content="custom software development, AI solutions, digital transformations, business portfolio, successful projects, DH Solutions portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="path-to-image.jpg" />
        <meta property="og:description" content="Explore our portfolio of successful projects with DH Solutions." />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Portfolio1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Portfolio;
