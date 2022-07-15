import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../backend/db/products";
const ProductPage = () => {
  const { id } = useParams();

  const dataDb = products.find((product) => {
    return product._id === id;
  });

  const [data, setData] = useState(dataDb);

  console.log("id", id);

  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.price}</h1>
      <h1>{data?.rating}</h1>
    </div>
  );
};

export default ProductPage;
