import React from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    toast.error("non-users cant access site URL paths", {
      style: {
        textTransform: "capitalize",
        fontWeight:"bold",
        color: "gray",
      },
    });
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
