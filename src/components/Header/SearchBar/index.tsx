import React from "react";
import { IoIosSearch } from "react-icons/io";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" />
      <IoIosSearch />
    </div>
  );
};

export default SearchBar;
