import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails7 from "@/components/portfolio/PortfolioDetails7";
import ScheduleMeetingSection from "@/components/cta/CTAPortfolio";

const PortfolioDetails = () => {
  return (
    <>
      <Head>
        <title>Portfolio Details</title>
        <meta name="description" content="Portfolio Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <PortfolioDetails7 />
          <ScheduleMeetingSection/>
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetails;
