import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
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
    <div>
      <label>Email:</label>
      <input type="email" />
      <label>Password:</label>
      <input type="password" />
      {/* <button onClick={signupHandler}>Signup</button> */}
      <button onClick={loginHandeler}>Login</button>
    </div>
  );
};

export default Login;
