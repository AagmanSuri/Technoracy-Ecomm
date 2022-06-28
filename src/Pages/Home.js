import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
