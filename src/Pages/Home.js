import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((db) => setData(db));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <img
        className="img-background-hide"
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magsafe-202203?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1644980568536"
      ></img>
      <div className="banner-container">
        <div className="bannerHeading">
          <h3 className="text-heading">
            Find all your tech & accessories here....
          </h3>
        </div>
        <img
          className="background"
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magsafe-202203?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1644980568536"
        ></img>
      </div>
      <div>
        <div className="category-heading center margin-top margin-bottom ">
          Browse by categories
        </div>
      </div>
      <div className="card-container  ">
        {data?.categories.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate("/product");
              }}
              className="center"
            >
              <div key={item.id} className="card">
                {/* <h1>{item.categoryName}</h1>
              <button>Explore more</button> */}
                <img
                  className="card-image"
                  src={item.categoryImage}
                  alt={item.categoryName}
                ></img>
              </div>
              <div className="category-name">
                <span>{item.categoryName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
