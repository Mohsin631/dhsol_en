import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import AntiHumanTraffickingPolicy from "@/components/others/AntiHumanTraffickingPolicy";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Anti-Human Trafficking Policy | DH Solution</title>
        <meta name="description" content="Anti-Human Trafficking Policy | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <AntiHumanTraffickingPolicy />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
