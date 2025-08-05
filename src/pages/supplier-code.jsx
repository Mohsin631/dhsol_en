import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import GlobalSupplierCodeOfConduct from "@/components/others/GlobalSupplierCodeOfConduct";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Supplier Code of Conduct | DH Solution</title>
        <meta name="description" content="Supplier Code of Conduct | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <GlobalSupplierCodeOfConduct />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
