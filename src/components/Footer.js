import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        Developed by <strong>Mohamed Ayman</strong>
      </div>
      <div className={styles.Icons}>
        <a href="https://github.com/moabdelbasset" target="_blank" rel="noopener noreferrer" alt="Github link" aria-label='Github'>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-ayman-b29b5b66/" target="_blank" rel="noopener noreferrer" alt="LinkedIn link" aria-label='LinkedIn'>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
