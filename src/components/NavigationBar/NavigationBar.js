import React from "react";

import styles from "./NavigationBar.module.css";
import NavButton from "./NavButton";

function NavigationBar() {
  return (
    <div className={styles.navigationBarContainer}>
      <NavButton to={'/'} name={'Home'}/>
      <NavButton to={'/about'} name={'About'}/>
      {/*<NavButton to={'/projects'} name={'Projects'}/>*/}
      {/*<NavButton to={'/rants'} name={'Rants'}/>*/}
      {/*<NavButton to={'/contact'} name={'Contact'}/>*/}
    </div>
  );
}

export default NavigationBar;