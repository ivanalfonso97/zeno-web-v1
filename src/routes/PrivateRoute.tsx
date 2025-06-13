import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authService'
import { setOnAuthErrorCallback, AuthError } from '../lib/api/fetchWithAuth'

interface PrivateRouteProps {
  // You can add props here if needed, e.g., roles
}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const jwtAccess = sessionStorage.getItem('jwt-access')
  const user = sessionStorage.getItem('user')
  const navigate = useNavigate()

  // User is authenticated if both jwt-access token and user data are present
  const isAuthenticated = !!jwtAccess && !!user

  // Set global authentication error callback
  useEffect(() => {
    const handleAuthError = () => {
      console.error('AuthError triggered callback in PrivateRoute. Logging out...')
      logout(navigate)
    }

    setOnAuthErrorCallback(handleAuthError)

    // Cleanup: remove the callback when the component unmounts
    return () => {
      setOnAuthErrorCallback(() => {})
    }
  }, [navigate]) // Depend on navigate to ensure it's always current

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default PrivateRoute 