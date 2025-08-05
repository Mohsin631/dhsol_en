import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterLogoWhite from '../../../public/assets/imgs/logo/footer-logo-white.png';


const Footer3 = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column footer__branding">
          <div className="footer__logo">
            <Image src={FooterLogoWhite} alt="TaskUs Logo" width={200} />
          </div>
          <p style={{ color: "#fff" }}>
  We exist to empower people to deliver Ridiculously Good innovation to the world’s best companies.
</p>

          <div className="footer__socials">
            <i className="icon linkedin"></i>
            <i className="icon facebook"></i>
            <i className="icon instagram"></i>
            <i className="icon youtube"></i>
            <i className="icon x"></i>
          </div>
        </div>

        <div className="footer__column">
          <h4>Services</h4>
          <ul>
            <li><Link href="/service-details-1">Front-End Development</Link></li>
            <li><Link href="/service-details-2">Back-End Development</Link></li>
            <li><Link href="/service-details-3">Mobile Applications</Link></li>
            <li><Link href="/service-details-4">AI/ML Solutions</Link></li>
            <li><Link href="/service-details-5">Cyber Security</Link></li>
            <li><Link href="/service-details-6">DevOps Solutions</Link></li>
            <li><Link href="/service-details-7">Software Development</Link></li>
            <li><Link href="/service-details-8">QA & Testing </Link></li>
            <li><Link href="/service-details-9">Computer Vision </Link></li>
            <li><a href="tel:8886105270"><strong>Phone:</strong> (888) 610-DHSOL</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Hire an Expert</h4>
          <ul>
            <li><Link href="/hire/php-engineer">Hire a PHP Engineer</Link></li>
            <li><Link href="/hire/shopify-expert">Hire a Shopify Expert</Link></li>
            <li><Link href="/hire/wordpress-developer">Hire a WordPress Developer</Link></li>
            <li><Link href="/hire/react-developer">Hire a React Developer</Link></li>
            <li><Link href="/hire/python-developer">Hire a Python Developer</Link></li>
            <li><Link href="/hire/nodejs-developer">Hire a Node.js Developer</Link></li>
            <li><Link href="/hire/java-developer">Hire a Java Developer </Link></li>
            <li><Link href="/hire/laravel-developer">Hire a Laravel Developer</Link></li>
            <li><Link href="/hire/magento-expert">Hire a Magento Expert</Link></li>
            <li><Link href="/hire/angular-developer">Hire an Angular Developer </Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Hire an Expert</h4>
          <ul>
            <li><Link href="/hire/vuejs-developer">Hire a Vue.js Developer</Link></li>
            <li><Link href="/hire/aws-expert">Hire an AWS Expert</Link></li>
            <li><Link href="/hire/ios-developer">Hire an iOS Developer</Link></li>
            <li><Link href="/hire/android-developer">Hire an Android Developer</Link></li>
            <li><Link href="/hire/cloud-engineer">Hire a Cloud Engineer</Link></li>
            <li><Link href="/hire/uiux-designer">Hire a UI/UX Designer</Link></li>
            <li><Link href="/hire/database-admin">Hire a Database Admin </Link></li>
            <li><Link href="/hire/devops-engineer">Hire a DevOps Engineer</Link></li>
            <li><Link href="/hire/fullstack-developer">Hire a Fullstack Developer</Link></li>
            <li><Link href="/hire/qa-engineer">Hire a QA Engineer</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Other</h4>
          <ul>
            <li><Link href="/cost-estimator">Cost Estimator</Link></li>
            <li><Link href="/cloud-advisor">Cloud Advisor</Link></li>
            <li><Link href="/project-timeline">Project Timeline Estimator</Link></li>
            <li><Link href="/security-calculator">Security Risk Assessor</Link></li>
            <li><Link href="/tech-recommender">Tech Recommender</Link></li>
            <li><Link href="/timezone-converter">Timezone Converter</Link></li>
            <li><Link href="/about">About DH Solutions</Link></li>
            <li><Link href="/career">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <ul>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms and Conditions</Link></li>
          <li><Link href="/supplier-code">Global Supplier Code of Conduct</Link></li>
          <li><Link href="/human-trafficking">Anti-Human Trafficking and Slavery Policy</Link></li>
          <li><Link href="/cookie-policy">Cookie Policy</Link></li>
          <li><Link href="/ai-policy">Global AI Policy</Link></li>
        </ul>
        <p>© 2025 DH Solutions LLC</p>
      </div>
    </footer>
  );
};

export default Footer3;
