import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ContactSection from "@/components/contact/ContactSection";
import GlobalPresence from "@/components/contact/GlobalPresence";
import QuickLinks from "@/components/contact/quicklinks";
import TrustSection from "@/components/contact/TrustSection";
import WhiteFAQ from "@/components/contact/faqs";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact DH Solution - Get in Touch with Us</title>
        <meta
          name="description"
          content="Contact DH Solution for inquiries, support, or partnerships. Reach out to our team for assistance or explore our global presence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="contact DH Solution, contact us, software development inquiry, global presence, support, partnership, reach out"
        />
        <meta name="author" content="DH Solution" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact DH Solution - Get in Touch with Us" />
        <meta
          property="og:description"
          content="Have questions or need support? Contact DH Solution for all inquiries, or explore our services and global presence."
        />
        <meta property="og:url" content="https://dhsol.net/contact" />
        <meta property="og:image" content="https://dhsol.net/images/contact-hero.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact DH Solution - Get in Touch with Us" />
        <meta
          name="twitter:description"
          content="Reach out to DH Solution for inquiries, support, or partnership. Explore our global presence and services."
        />
        <meta name="twitter:image" content="https://dhsol.net/images/contact-hero.jpg" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ContactSection />
          <GlobalPresence />
          <QuickLinks />
          <TrustSection />
          <WhiteFAQ />
        </RootLayout>
      </main>
    </>
  );
};

export default Contact;
