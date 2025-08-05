// pages/team.jsx
import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TeamCounter from "@/components/counter/TeamCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutTeam from "@/components/team/AboutTeam";
import TeamTestimonials from "@/components/team/testimonials";

const Team = () => {
  return (
    <div>
      <Head>
        <title>Team</title>
        <meta
          name="description"
          content="Meet our team of experts who drive innovation, creativity, and success in every project we undertake. Learn more about the talented individuals behind our services."
        />
        <meta
          name="keywords"
          content="team, team members, digital agency, creative team, expert team, business team, team success, innovation, professionals, digital experts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3">
          <AboutTeam />
          <TeamCounter />
 
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default Team;
