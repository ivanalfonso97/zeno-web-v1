import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar: React.FC = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Chat' },
    { path: '/integrations', label: 'Integrations' },
    { path: '/settings', label: 'Settings' },
  ]

  return (
    <div className="w-72 h-screen bg-dark-frame p-8">
      <h1 className="w-full text-center logo-medium text-white mb-8">Zeno AI</h1>
      <nav>
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
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
    </div>
  )
}

export default Sidebar