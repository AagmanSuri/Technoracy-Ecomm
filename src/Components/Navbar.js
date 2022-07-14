import React, { useState } from "react";
import Menu from "../Assets/menu.svg";
import Cross from "../Assets/cross.png";

import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";

const Navbar = () => {
  const { isLogin, setIsLogin } = useAuth();
  const [isPhoneMenuShow, setisPhoneMenuShow] = useState(false);

  return (
    <div className="NavContainer">
      <Link
        onClick={() => {
          setisPhoneMenuShow(false);
        }}
        className="link logo left-shift"
        to="/"
      >
        Technoracy
      </Link>

      <button
        onClick={() => {
          console.log("clicked");
          setisPhoneMenuShow((isPhoneMenuShow) => !isPhoneMenuShow);
        }}
        style={{ color: "white" }}
        className="button ham-btn unhide"
      >
        {!isPhoneMenuShow ? (
          <img src={Menu} alt="menu"></img>
        ) : (
          <img src={Cross} alt="menu"></img>
        )}
      </button>
      <div
        className="phoneMenuShow"
        style={
          !isPhoneMenuShow
            ? { display: "none" }
            : { display: "flex", color: "white", overflow: "hidden" }
        }
      >
        {isLogin ? (
          <Link
            className="link"
            onClick={() => {
              setisPhoneMenuShow(false);
              setIsLogin(false);
            }}
            to="/"
          >
            Logout
          </Link>
        ) : (
          <Link
            onClick={() => {
              setisPhoneMenuShow(false);
            }}
            className="link"
            to="login"
          >
            Login
          </Link>
        )}
        <Link
          onClick={() => {
            setisPhoneMenuShow(false);
          }}
          className="link"
          to="wishlist"
        >
          Wishlist
        </Link>
        <Link
          onClick={() => {
            setisPhoneMenuShow(false);
          }}
          className="link"
          to="cart"
        >
          Cart
        </Link>
      </div>
      {/* <input className="search" placeholder="Search" /> */}
      {isLogin ? (
        <Link
          className="link hide right-shift"
          onClick={() => {
            setIsLogin(false);
          }}
          to="/"
        >
          Logout
        </Link>
      ) : (
        <Link className="link hide right-shift " to="login">
          Login
        </Link>
      )}
      <Link className="link  hide right-shift " to="wishlist">
        Wishlist
      </Link>
      <Link className="link hide right-shift-1 " to="cart">
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
