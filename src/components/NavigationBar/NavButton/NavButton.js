import React from "react";

import {Link} from "react-router-dom";

import styles from "./NavButton.module.css";

function NavButton({name, to}) {
  return (
    <Link to={to}>
      <button className={styles.navButton}>
        {name}
      </button>
    </Link>
  );
}

export default NavButton;