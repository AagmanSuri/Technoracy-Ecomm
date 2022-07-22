import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { Link } from "react-router-dom";
import "../css/login.css";
const Login = () => {
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
          <h1>Login</h1>
        </div>
        <label className="text email">Email:</label>
        <input placeholder="aagman@gmail.com"className="input email-input" type="email" />
        <label className="text password">Password:</label>
        <input placeholder="*******" className="input password-input" type="password" />
        <div className="btn-flex">
          <button className="btn-login" onClick={loginHandeler}>
            Login
          </button>
        </div>
        <div className="btn-flex">
          <button className="btn-login guest-login" onClick={loginHandeler}>
            Login as guest
          </button>
        </div>
        <div className="text-dec">
          <span>
            Don't have an Account ?{" "}<Link  className="sign-up" to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
