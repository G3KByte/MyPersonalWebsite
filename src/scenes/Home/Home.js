import React from 'react';

import NavigationBar from "../../components/NavigationBar";
import Introduction from "../../components/Introduction";

import styles from "./Home.module.css";

class Home extends React.Component {
    render() {
        return (
            <div className={styles.homePage}>
                <Introduction />
                <NavigationBar/>
            </div>
        )
    }
}

export default Home;