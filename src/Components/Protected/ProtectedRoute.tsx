
export interface IProtected {
  children?: React.ReactNode
}

// export default ProtectedRoute;
import React from "react"
import { Outlet, Navigate } from "react-router-dom";
import auth from "../../services/authService";
export const ProtectedRoute: React.FC<IProtected> = ({ children }) => {

  const user = auth.getCurrentUser()

  return user ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate
      to={'/login'}
      state={{ from: location.pathname }}
    />
  );
}