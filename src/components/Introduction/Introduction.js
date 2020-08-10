import React from "react";

import styles from "./Introduction.module.css";

export default function Introduction() {

    return(
        <div className={styles.introSection}>
            <p className={styles.introTitle}>
                Hello! I'm <span className={styles.introTitleName}>Jacob Hoel</span>.<br />
                I'm a full-stack engineer.
            </p>
        </div>
    );
}