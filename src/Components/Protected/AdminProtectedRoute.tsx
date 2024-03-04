// export default ProtectedRoute;
import React from 'react';

import {
  Navigate,
  Outlet,
} from 'react-router-dom';

import auth from '../../services/authService';

export interface IProtected {
  children?: React.ReactNode
}

export const AdminProtectedRoute: React.FC<IProtected> = ({ children }) => {

  const user = auth.getCurrentUser()

  return user && user.is_admin ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate
      to={'/not-allowed'}
      state={{ from: location.pathname }}
    />
  );
}