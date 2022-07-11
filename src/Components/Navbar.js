import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
const Navbar = () => {
  const { isLogin, setIsLogin } = useAuth();

  return (
    <div className="NavContainer">
      <Link to="/">Technoracy</Link>
      <input className="search" placeholder="Search" />
      {isLogin ? (
        <Link
          onClick={() => {
            setIsLogin(false);
            console.log("c");
          }}
          to="/"
        >
          Logout
        </Link>
      ) : (
        <Link to="login">Login</Link>
      )}
      <Link to="wishlist">Wishlist</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
};

export default Navbar;
