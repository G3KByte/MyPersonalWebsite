import React from "react";

import styles from "./Introduction.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Introduction() {

    return (
        <div className={styles.introSection}>
            <p className={styles.introTitle}>
                Hello! I'm <span className={styles.introTitleName}>Jacob Hoel</span>.<br/>
                I'm a full-stack engineer.
            </p>
            <div className={styles.socialsSection}>
                <a href={"https://www.linkedin.com/in/jacob-hoel-601221179/"}
                   className={styles.socialLink}
                   target={"_blank"}
                >
                    <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                </a>
                <a href={"https://github.com/G3KByte"}
                   className={styles.socialLink}
                   target={"_blank"}
                >
                    <FontAwesomeIcon icon={['fab', 'github']}/>
                </a>
            </div>
        </div>
    );
}