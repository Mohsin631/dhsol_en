import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CostEstimator from "@/components/costestimator/CostEstimator";
import FaqCTA from "@/components/cta/FaqCTA";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Cost Estimator - DH Solutions</title>
        <meta
          name="description"
          content="Use DH Solutions' cost estimator to calculate the estimated costs of your software development projects. Get an accurate cost breakdown for services such as web development, AI solutions, mobile app development, and more."
        />
        <meta
          name="keywords"
          content="cost estimator, software development, cost calculator, project estimation, DH Solutions, software services cost, web development, mobile app development, AI solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Cost Estimator - DH Solutions" />
        <meta
          property="og:description"
          content="Estimate your software development costs with DH Solutions' easy-to-use cost estimator tool. Calculate your project cost in minutes."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/cost-estimator" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cost Estimator - DH Solutions" />
        <meta
          name="twitter:description"
          content="Get an accurate estimate for your software project with DH Solutions' cost estimator tool. Estimate the cost for web development, AI, mobile apps, and more."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>

      <main>
        <RootLayout header="header3" footer="footer3">
          <CostEstimator />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
