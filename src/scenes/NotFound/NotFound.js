import React from 'react';
import styles from './NotFound.module.css';

function NotFound() {

  return (
    <div className={styles.notFoundContainer}>
      <p className={styles.notFoundMessage}>
        <span className={styles.notFoundError}>{'{'} 404</span> Waldo not found <span className={styles.notFoundError}>{'}'}</span>
      </p>
    </div>
  );
}

export default NotFound;