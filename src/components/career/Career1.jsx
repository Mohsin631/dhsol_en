"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";

const Career1 = () => {
  const t = useTranslations();

  return (
    <section className="career-section" id="job_list">
      <div className="container">
        <div className="career-header">
          <h2 className="career-title">{t("careerHeading")}</h2>
          <p className="career-subtitle">
            {t("careerNoJobsHeading")} {t("careerNoJobsLine2")}
          </p>
        </div>

        <div className="cta-box">
          <div className="cta-text">
            <h3>We&#39;re always hiring!</h3>
            <p>
              Explore exciting career opportunities and become part of an
              innovative and dynamic team at DH Solution.
            </p>
          </div>
          <Link
            href="https://careers.dhsol.net"
            target="_blank"
            className="cta-button"
          >
            View Available Jobs
          </Link>
        </div>

        <div className="contact-hr">
        <p style={{ color: "white" }}>
  Can’t find your role? Send your resume to{" "}
  <a href="mailto:hr@dhsol.net" style={{ color: "white" }}>
    hr@dhsol.net
  </a>
</p>

        </div>
      </div>
    </section>
  );
};

export default Career1;
