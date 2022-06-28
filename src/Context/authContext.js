import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
