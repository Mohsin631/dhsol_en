import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CookiePolicy from "@/components/others/CookiePolicy";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy | DH Solution</title>
        <meta name="description" content="Cookie Policy | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <CookiePolicy />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
