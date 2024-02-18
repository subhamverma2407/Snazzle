import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import styles from "./UserActions.module.scss";
import { useAppSelector } from "../../../hooks/reduxHook";

const UserActions = () => {
  const cartCount = useAppSelector((state) => state.cart.items.length);
  return (
    <div className={styles.userActions}>
      <span>
        <FaRegHeart />
      </span>
      <span className={styles.cart}>
        <FaCartPlus />
        {cartCount > 0 && (
          <span className={styles.cartCounter}>{cartCount}</span>
        )}
      </span>
      <span>
        <CgProfile />
      </span>
    </div>
  );
};

export default UserActions;
