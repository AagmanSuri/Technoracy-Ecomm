import React from "react";
import Menu from "../Assets/menu.svg";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
const Navbar = () => {
  const { isLogin, setIsLogin } = useAuth();

  return (
    <div className="NavContainer">
      <Link className="link logo left-shift" to="/">
        Technoracy
      </Link>
      <button class="button ham-btn unhide">
        <img src={Menu}></img>
      </button>
      {/* <input className="search" placeholder="Search" /> */}
      {isLogin ? (
        <Link
          className="link hide right-shift"
          onClick={() => {
            setIsLogin(false);
            console.log("c");
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
