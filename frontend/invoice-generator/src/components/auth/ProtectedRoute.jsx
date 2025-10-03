import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

const ProtectedRoute = ({ children }) => {
  // Will integrate these values later
  const isAuthenticated = true;
  const isLoading = false;

  if (isLoading) {
    // You can render a spinner component here
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    <Navigate to="/login" replace />;
  }
  return <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>;
};

export default ProtectedRoute;
