import React from 'react';
import Link from 'next/link';
import {
  FaWordpress, FaShopify, FaPhp, FaReact, FaPython, FaNodeJs, FaJava,
  FaLaravel, FaMagento, FaAngular, FaVuejs, FaHtml5, FaCss3, FaJs,
  FaAndroid, FaApple, FaCloud, FaAws, FaGoogle, FaDocker, FaFigma,
  FaDatabase, FaSlack, FaGithub, FaGitAlt, FaJenkins, FaCogs
} from 'react-icons/fa';

// Helper to generate path-friendly slugs
const slugify = (str) =>
  '/hire/' +
  str
    .toLowerCase()
    .replace(/hire an? /, '')      // Remove "Hire a"/"Hire an"
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/\./g, '')            // Remove dots
    .replace(/[^a-z0-9\-]/g, '');  // Remove special characters

const skills = [
  { name: 'Hire a PHP Engineer', icon: <FaPhp /> },
  { name: 'Hire a Shopify Expert', icon: <FaShopify /> },
  { name: 'Hire a WordPress Developer', icon: <FaWordpress /> },
  { name: 'Hire a React Developer', icon: <FaReact /> },
  { name: 'Hire a Python Developer', icon: <FaPython /> },
  { name: 'Hire a Node.js Developer', icon: <FaNodeJs /> },
  { name: 'Hire a Java Developer', icon: <FaJava /> },
  { name: 'Hire a Laravel Developer', icon: <FaLaravel /> },
  { name: 'Hire a Magento Expert', icon: <FaMagento /> },
  { name: 'Hire an Angular Developer', icon: <FaAngular /> },
  { name: 'Hire a Vue.js Developer', icon: <FaVuejs /> },
  { name: 'Hire an HTML/CSS Expert', icon: <><FaHtml5 /> <FaCss3 /></> },
  { name: 'Hire a JavaScript Developer', icon: <FaJs /> },
  { name: 'Hire an Android Developer', icon: <FaAndroid /> },
  { name: 'Hire an iOS Developer', icon: <FaApple /> },
  { name: 'Hire a Cloud Engineer', icon: <FaCloud /> },
  { name: 'Hire an AWS Expert', icon: <FaAws /> },
  { name: 'Hire a Google Cloud Engineer', icon: <FaGoogle /> },
  { name: 'Hire a Docker Expert', icon: <FaDocker /> },
  { name: 'Hire a UI/UX Designer', icon: <FaFigma /> },
  { name: 'Hire a Database Admin', icon: <FaDatabase /> },
  { name: 'Hire a Slack Integrator', icon: <FaSlack /> },
  { name: 'Hire a GitHub Expert', icon: <FaGithub /> },
  { name: 'Hire a Git Specialist', icon: <FaGitAlt /> },
  { name: 'Hire a Jenkins DevOps Engineer', icon: <FaJenkins /> },
  { name: 'Hire a DevOps Engineer', icon: <FaCogs /> },
  { name: 'Hire a QA Engineer', icon: <FaCogs /> },
  { name: 'Hire a Frontend Developer', icon: <FaReact /> },
  { name: 'Hire a Backend Developer', icon: <FaNodeJs /> },
  { name: 'Hire a Fullstack Developer', icon: <FaJs /> },
];

const HireAnExpert = () => {
  return (
    <section className="hire-expert-section">
      <div className="container">
        <h2 className="section-heading">Hire an Expert</h2>
        <p className="section-subheading">Choose the right professional for your next big idea</p>
        <div className="expert-grid">
          {skills.map((skill, index) => (
            <Link key={index} href={slugify(skill.name)} className="expert-card">
              <div className="expert-icon">{skill.icon}</div>
              <h3 className="expert-title">{skill.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireAnExpert;
