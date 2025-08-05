import Head from "next/head";

export default function CareerHero() {
  return (
    <div className="terms-and-conditions-page" dir="ltr" lang="en">
      <Head>
        <title>Careers | DH Solution</title>
      </Head>

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Careers</h1>
          <p className="terms-subtitle">
            Join the DH Solution team and kickstart your career in an innovative and supportive work environment.
          </p>
        </div>
      </section>
    </div>
  );
}
