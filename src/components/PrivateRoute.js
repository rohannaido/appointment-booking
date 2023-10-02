import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../store/authSlice";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }) {
    const userData = useSelector(selectUser);
    const location = useLocation();
    return userData?.token ? children : <Navigate to="/login" state={{ from: location?.pathname }} replace />;
}