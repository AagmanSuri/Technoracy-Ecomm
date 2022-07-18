import React, { useState } from "react";
import "../css/Productpage.css";

import { useNavigate, useParams } from "react-router-dom";
import { products } from "../backend/db/products";
const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dataDb = products.find((product) => {
    return product._id === id;
  });

  const [data, setData] = useState(dataDb);

  console.log("id", id);

  return (
    <div className="product-card-container">
      <div className="product-page-card">
        <div className="product-card-image-container">
          <img className="product-card-image" src={data?.image}></img>
        </div>
        <div className="product-page-details">
          <h1>{data?.title}</h1>
          <h1>₹{data?.price}</h1>
          <hr></hr>
          <h3>Description:</h3>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            culpa voluptates dolores illo assumenda ullam ipsam, omnis in
            explicabo voluptas dolore dolor beatae eius eos. Exercitationem
            cupiditate optio illo eveniet.
          </p>
          <div className="product-btn-card">
            <button
              className="detail-page-btn"
              onClick={() => {
                navigate("/product");
              }}
            >
              Go Back
            </button>
            <button
              className="detail-page-btn"
              onClick={() => {
                navigate("/product");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
