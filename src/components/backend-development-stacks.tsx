import React from 'react';
import { techStacks } from './techStackData';
import styles from './services-page-stacks.module.css';

const OurTechStacksWithLogos = () => {
  // Select the second category (Backend Development)
  const secondCategory = techStacks[1];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Tech Stacks</h2>
      <div className={styles.categoryBlock}>
        <h3 className={styles.categoryTitle}>{secondCategory.category}</h3>
        <div className={styles.stackGrid}>
          {secondCategory.stacks.map((stack, i) => (
            <div key={i} className={styles.stackItem}>
              <i className={`${stack.icon} ${styles.icon}`}></i>
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechStacksWithLogos;
