import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("accessToken");

  if (!token) {
    alert("Please login to access the dashboard");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;