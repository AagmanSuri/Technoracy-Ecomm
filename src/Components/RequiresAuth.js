import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children, isLogin }) => {
  const location = useLocation();
  return isLogin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiresAuth;
