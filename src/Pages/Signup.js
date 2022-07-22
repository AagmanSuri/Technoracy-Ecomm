import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { Link } from "react-router-dom";
import "../css/signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLogin, setIsLogin } = useAuth();

  console.log("loc from login", location);

  // const signupHandler = async () => {
  //   try {
  //     const response = await axios.post(`/api/auth/signup`, {
  //       firstName: "aagman",
  //       lastName: "suri",
  //       email: "aagman@gmail.camp",
  //       password: "aagman"
  //     });
  //     console.log(response);
  //     localStorage.setItem("token", response.data.encodedToken);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const loginHandeler = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
      });
      console.log("res from login", response);
      setIsLogin(true);
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isLogin);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login">
          <h1>Sign up</h1>
        </div>
        <label className="text email">Full Name </label>
        <input
          placeholder="Aagman Suri"
          className="input name-input"
          type="name"
        />
        <label className="text email">Email </label>
        <input
          placeholder="aagman@gmail.com"
          className="input email-input"
          type="email"
        />
        <label className="text password">Password </label>
        <input
          placeholder="*******"
          className="input password-input"
          type="password"
        />
        <div className="btn-flex">
          <button className="btn-login" onClick={loginHandeler}>
            Create new account
          </button>
        </div>
        <div className="btn-flex">
          {/* <button className="btn-login guest-login" onClick={loginHandeler}>
            Create new account
          </button> */}
        </div>
        <div className="text-dec-signup">
          <span>
            Already a member ?{" "}
            <Link className="sign-up" to="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
