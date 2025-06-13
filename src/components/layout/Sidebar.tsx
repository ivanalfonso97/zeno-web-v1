import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authService'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Chat' },
    { path: '/integrations', label: 'Integrations' },
    // { path: '/settings', label: 'Settings' },
  ]

  const handleLogout = () => {
    logout(navigate)
  }

  return (
    <div className="w-72 h-screen bg-dark-surface p-8 flex flex-col">
      <h1 className="w-full text-center logo-medium text-white mb-8">Zeno AI</h1>
      <nav className="flex-grow">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`medium-regular flex items-center px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-white bg-opacity-5 text-white'
                    : 'text-gray hover:text-white hover:bg-white hover:bg-opacity-5'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="btn btn-danger w-full bg-white bg-opacity-5 hover:bg-opacity-100"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar