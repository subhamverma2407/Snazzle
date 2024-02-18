import React, { useState, useEffect } from "react";
import Product from "../ProductCard";
import styles from "./Products.module.scss";
import { useAppDispatch } from "../../hooks/reduxHook";
import { addToCart } from "../../redux/features/cart";

const Products: React.FC = () => {
  const [data, setData] = useState<any | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const addToCartHandler = (e: any, item: any) => {
    dispatch(addToCart(item));
    e.stopPropagation();
  };

  return (
    <div className={styles.productsList}>
      {data &&
        data?.products.map((item: any) => {
          return (
            <Product
              id={item.id}
              key={item.id}
              image={item.thumbnail}
              title={item.title}
              price={item.price}
              rating={item.rating}
              addToCartHandler={(e: any) => addToCartHandler(e, item)}
            />
          );
        })}
    </div>
  );
};

export default Products;
