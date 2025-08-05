import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TermsAndConditions from "@/components/terms/terms";
import TimeZoneConverter from "@/components/Timezone/TimeZoneConverter";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Cloud Hosting Advisor | DH Solution</title>
        <meta name="description" content="Cloud Hosting Advisor | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">

          <TimeZoneConverter />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
