import React, { useState } from 'react';
import { techStacks } from './techStackData';
import styles from './OurTechStacksWithLogos.module.css';

const OurTechStacksWithLogos = () => {
  const [activeCategory, setActiveCategory] = useState<string>(techStacks[0]?.category || '');

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Tech Stacks</h2>
        <p className={styles.subheading}>
          We use the most modern technologies and tools to bring ideas to life.
        </p>
      </div>

      <div className={styles.techStackContainer}>
        <div className={styles.categoryColumn}>
          {techStacks.map((tech) => (
            <div
              key={tech.category}
              className={`${styles.category} ${activeCategory === tech.category ? styles.active : ''}`}
              onMouseEnter={() => setActiveCategory(tech.category)}
              onClick={() => setActiveCategory(tech.category)}
            >
              {tech.category}
            </div>
          ))}
        </div>

        <div className={styles.stackColumn}>
          {activeCategory && (
            <div className={styles.stackList}>
              {techStacks
                .find((cat) => cat.category === activeCategory)
                ?.stacks.map((stack) => (
                  <div key={stack.name} className={styles.stackItem}>
                    <i className={`${stack.icon} ${styles.icon}`}></i>
                    <span>{stack.name}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTechStacksWithLogos;
