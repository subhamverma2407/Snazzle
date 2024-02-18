import React from "react";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>Contact</li>
        <li>About</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default Menu;
