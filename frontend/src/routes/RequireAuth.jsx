// src/routes/RequireAuth.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const token = localStorage.getItem("token"); // check if token exists
  const location = useLocation();

  if (!token) {
    // Redirect to login and preserve current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
