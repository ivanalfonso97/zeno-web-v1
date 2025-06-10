import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {
  // You can add props here if needed, e.g., roles
}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const jwtAccess = sessionStorage.getItem('jwt-access')
  const user = sessionStorage.getItem('user')

  // User is authenticated if both jwt-access token and user data are present
  const isAuthenticated = !!jwtAccess && !!user

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default PrivateRoute 