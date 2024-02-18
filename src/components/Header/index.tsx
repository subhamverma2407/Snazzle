import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftNav}>
        <Logo />
        <Menu />
      </div>
      <div className={styles.rightNav}>
        <SearchBar />
        <UserActions />
      </div>
    </div>
  );
};

export default Header;
