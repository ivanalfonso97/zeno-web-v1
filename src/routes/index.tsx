import { createBrowserRouter } from 'react-router-dom'

import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignupPage'
import AuthLayout from '../layouts/AuthLayout'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthLayout>
        <SignupPage />
      </AuthLayout>
    ),
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <div>Welcome to the Chat App! (Protected)</div>,
      },
    ],
  },
]) 