import React from 'react';

import styles from "./About.module.css";
import aboutPicture from '../../assets/images/aboutPicture1.jpeg';

class About extends React.Component {
  render() {
    return (
      <div className={styles.aboutPage}>
        <div>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutSectionHorizontal}>
          <img alt={'Picture of Jacob wearing glasses'} src={aboutPicture} className={styles.aboutPicture}/>
          <p>
            Hello reader, my name is Jacob. I am a software engineer with a passion for building/scaling
            products to give users the best digital experience (DX) possible. I am on a lifelong journey seeking to
            learn the latest and greatest technologies that fascinate me. Currently I am expanding my knowledge on
            serverless cloud products and infrastructure as code using the AWS CDK.
          </p>
        </div>
        <div className={styles.aboutSectionVertical}>
          <h3>Employment</h3>
          <p>
            Currently at&nbsp;
            <a
              target={'_blank'}
              className={'emphasisColor'}
              href={'https://www.zappos.com/about/how-we-work'}
            >
              Zappos
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;