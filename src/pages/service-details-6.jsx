import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/service/6/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/service/6/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/6/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/service/6/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import OurTechStacksWithLogos from '@/components/devops-solutions-stacks';     

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Expert DevOps Services</title>
        <meta
          name="description"
          content="Streamline your software development and IT operations with expert DevOps services that enhance collaboration, automate workflows, and accelerate deployment for faster time-to-market."
        />
        <meta
          name="keywords"
          content="DevOps services, continuous integration, continuous delivery, automation, collaboration, software deployment, IT operations, agile development, cloud solutions, infrastructure management"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceDetailsDevelopment />
          <ServiceDetailsWorkflow />
          <ServiceDetailsService />
          <OurTechStacksWithLogos />
          <ServiceDetailsFaq />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
