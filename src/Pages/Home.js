import React, { useEffect } from "react";
import { useAuth } from "../Context/authContext";

const Home = () => {
  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then(console.log);
  }, []);

  const { isLogin, setIsLogin } = useAuth();
  return (
    <div>
      {}
      <h1>Home</h1>
      <h1>{isLogin}</h1>
    </div>
  );
};

export default Home;
