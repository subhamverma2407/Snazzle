import React from "react";
import styles from "./ProductCard.module.scss";
import { FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  addToCartHandler: Function;
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const { id, title, image, price, rating, addToCartHandler } = props;
  const navigate = useNavigate();

  const renderRating = () => {
    return [...Array(5)].map((v, i) => {
      if (i < Math.floor(rating)) {
        return <FaStar className={styles.filledStar} key={i} />;
      }
      return <FaRegStar key={i} />;
    });
  };

  const handleProductCardClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div onClick={() => handleProductCardClick()} className={styles.product}>
      <div className={styles.productImage}>
        <span className={styles.wishList}>
          <FaRegHeart />
        </span>
        <img src={image} alt="product"></img>
        <div onClick={(e) => addToCartHandler(e)} className={styles.addToCart}>
          Add to Cart
        </div>
      </div>
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productPrice}>{`$${price}`}</div>
      <div className={styles.rating}>Rating: {renderRating()}</div>
    </div>
  );
};

export default ProductCard;
