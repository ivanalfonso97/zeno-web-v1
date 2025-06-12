import { createBrowserRouter } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../components/layout/MainLayout'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignupPage'
import IntegrationsPage from '../pages/integrations/IntegrationsPage'
import LinkGoogleCalendarPage from '../pages/integrations/LinkGoogleCalendarPage'

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
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'integrations',
            element: <IntegrationsPage />,
          },
          {
            path: 'integrations/link-google-calendar',
            element: <LinkGoogleCalendarPage />,
          },
        ],
      },
    ],
  },
]) 