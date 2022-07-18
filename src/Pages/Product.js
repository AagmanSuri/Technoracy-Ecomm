import React, { useState } from "react";
import "../css/Product.css";
import { products as productDb } from "../backend/db/products";
import { categories as categoriesDb } from "../backend/db/categories";
import loading from "../Assets/loading.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import star from "../Assets/star.png";
import like from "../Assets/like.png";
import unlike from "../Assets/unlike.png";
const Product = () => {
  const [products, setProducts] = useState(productDb);
  const [categories, setCategories] = useState(categoriesDb);
  // const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();

  const likeHandeler = (id) => {
    setProducts((products) => {
      return products.map((product) => {
        if (product._id === id) {
          return { ...product, wishlist: !product.wishlist };
        } else {
          return product;
        }
      });
    });
    console.log(products);
  };

  return (
    <div className="parent-container">
      <div className="option-panel">
        <div className="display-flex-row">
          <h3>Filters</h3>
          <button className="clearbtn">Clear</button>
        </div>
        <hr></hr>
        <div>
          <h4>
            <label>Price</label>{" "}
          </h4>
          <input type="range" />
        </div>
        <hr></hr>
        <div>
          <h4>Category</h4>

          {categories.map((category) => {
            return (
              <div key={category._id} className="label-filter">
                <label>
                  <input type="checkbox" />
                  {category?.categoryName}
                </label>
              </div>
            );
          })}
        </div>
        <hr></hr>
        <div>
          <h4>Ratings</h4>
        </div>

        <div className="label-filter">
          <label>
            <input name="rate" type="radio" />1 Star & above
          </label>
        </div>
        <div className="label-filter">
          <label>
            <input name="rate" type="radio" />2 Star & above
          </label>
        </div>
        <div className="label-filter">
          <label>
            <input name="rate" type="radio" />3 Star & above
          </label>
        </div>
        <div className="label-filter">
          <label>
            <input name="rate" type="radio" />4 Star & above
          </label>
        </div>
        <hr></hr>
        <div className="label-filter">
          <h4>Sort by</h4>
        </div>
        <div className="label-filter">
          <label>
            <input name="sort" type="radio" />
            Price : Low to high
          </label>
        </div>
        <div className="label-filter">
          <label>
            <input name="sort" type="radio" />
            Price : High to low
          </label>
        </div>
      </div>

      <div className="product-panel">
        <div>
          <h1>Showing All products ({products.length})</h1>
        </div>
        <div className="card-products">
          {products?.map((product) => {
            return (
              <div key={product._id} className="card-container-product">
                <img
                  onClick={() => {
                    navigate(`/product${product._id}`);
                  }}
                  className="card-image-product"
                  src={product.image ? product.image : loading}
                ></img>
                <button
                  onClick={() => likeHandeler(product._id, product)}
                  className="card-wishlist"
                >
                  <img
                    className="image-card-wishlist"
                    src={product.wishlist ? like : unlike}
                  ></img>
                </button>
                {product.type === "new" && <div className="new-tag">New</div>}
                {product.type === "trending" && (
                  <div className="trending-tag">Trending</div>
                )}
                <h3 className="card-text padding">{product.title}</h3>
                <h4 className="card-text price-text">
                  ₹{product.price}
                  <span className="rating">{product.rating}</span>
                  <img className="star" src={star}></img>
                </h4>
                <div>
                  <button className="add-to-card-btn">Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
