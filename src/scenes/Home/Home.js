import React from 'react';

import Introduction from "../../components/Introduction";

import styles from './Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        <Introduction/>
      </div>
    )
  }
}

export default Home;