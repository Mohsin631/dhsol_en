import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TermsAndConditions from "@/components/terms/terms";
import SecurityRiskAssessor from "@/components/security/security";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Security Risk Assessor | DH Solution</title>
        <meta name="description" content="Security Risk Assessor | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">

          <SecurityRiskAssessor />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
