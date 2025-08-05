import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TermsAndConditions from "@/components/terms/terms";
import ProjectTimelineEstimator from "@/components/project-timeline-estimator/project-timeline";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Project Timeline Estimator | DH Solution</title>
        <meta name="description" content="Project Timeline Estimator | DH Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">

          <ProjectTimelineEstimator />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
