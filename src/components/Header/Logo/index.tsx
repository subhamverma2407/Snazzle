import React from "react";
import Icon from "./../../../assets/logo-no-bg.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={Icon} alt="Brand Logo" />
    </div>
  );
};

export default Logo;
