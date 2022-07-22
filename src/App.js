import "./App.css";
import Mockman from "mockman-js";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Cart from "./Pages/Private/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import RequiresAuth from "./Components/RequiresAuth";
import { useAuth } from "./Context/authContext";
import Wishlist from "./Pages/Private/Wishlist";
import Navbar from "./Components/Navbar";
import ProductPage from "./Pages/ProductPage";
import Signup from "./Pages/Signup";
function App() {
  const { isLogin, setIsLogin } = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product:id" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth isLogin={isLogin}>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth isLogin={isLogin}>
              <Wishlist />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
