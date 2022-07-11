import React, { useEffect } from "react";
import { useAuth } from "../Context/authContext";
import Navbar from "../Components/Navbar";
import "../css/Home.css";
import HomeBackground from "../Assets/HomeBackground.jpg";
const Home = () => {
  // useEffect(() => {
  //   fetch("/api/categories")
  //     .then((response) => response.json())
  //     .then(console.log);
  // }, []);
  // const { isLogin, setIsLogin } = useAuth();

  return (
    <div className="container">
      <div class="banner-container">
        <div className="bannerHeading">
          <h3>Find all your tech accessories here....</h3>
        </div>

        <img
          className="background"
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magsafe-202203?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1644980568536"
        ></img>
      </div>
      <div>
        <button class="browse-product-btn">Browse Products</button>
      </div>
    </div>
  );
};

export default Home;
