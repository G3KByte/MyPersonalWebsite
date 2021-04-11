import React from "react";

import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
      <p>...looking for Waldo</p>
    </div>
  );
}

export default Loader;