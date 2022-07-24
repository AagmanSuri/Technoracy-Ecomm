import React,{useState} from "react";
import {products} from "../../backend/db/products"
import "../../css/wishlist.css"
import star from "../../Assets/star.png"
import like from "../../Assets/like.png";
import unlike from "../../Assets/unlike.png";

const Wishlist = () => {
  
  const [data,setData]=useState(products);

  return (
    <div className="wishlist-container">
      <h1>Wishlist ({data.length})</h1>
      {/* <div className="wishlist-product-list">
        {data.map((item) => {
          return <h1>{item?.title}</h1>;
        })}
      </div> */}
      <div className="card-products-wishlist">
        {data?.map((product) => {
          return (
            <div key={product._id} className="card-container-product-wishlist">
              <img
                onClick={() => {
                  navigate(`/product${product._id}`);
                }}
                className="card-image-product-wishlist"
                src={product.image ? product.image : loading}
              ></img>

              {product.type === "new" && (
                <div className="new-tag-wishlist">New</div>
              )}
              {product.type === "trending" && (
                <div className="trending-tag-wishlist">Trending</div>
              )}
              <h3 className="card-text-wishlist padding">{product.title}</h3>
              <h4 className="card-text-wishlist price-text-wishlist">
                ₹{product.price}
                <span className="rating-wishlist">{product.rating}</span>
                <img className="star-wishlist" src={star}></img>
              </h4>
              <div className="wishlist-btn-flex">
                <button className="add-to-card-btn-wishlist">
                  Add to cart
                </button>
                <button
                  onClick={() => likeHandeler(product._id, product)}
                  className="card-wishlist-btn"
                >
                  <img
                    className="image-card-wishlist"
                    src={true ? like : unlike}
                  ></img>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
