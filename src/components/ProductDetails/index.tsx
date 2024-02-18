import React from "react";
import { useParams } from "react-router";

const Product: React.FC = () => {
  const params = useParams();
  return <div>Product {params.id}</div>;
};

export default Product;
