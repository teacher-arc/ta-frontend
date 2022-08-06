import React from "react";
import { Navigate, Route } from "react-router-dom";
import * as ROUTELIST from "./routes";
export const PrivateRoute = ({ children }) => {
  const email = localStorage.getItem("email");

  if (!email) {
    return <Navigate to={ROUTELIST.AUTH} replace />;
  }

  return children;
};
