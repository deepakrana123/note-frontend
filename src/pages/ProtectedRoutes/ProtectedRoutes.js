import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({isLogged,children}) => {
    if (!isLogged) {
        return <Navigate to="/" replace />;
      }
      return children;
}

export default ProtectedRoutes