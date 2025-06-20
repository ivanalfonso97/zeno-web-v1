import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authService'

const Navbar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Chat' },
    { path: '/integrations', label: 'Integrations' },
  ]

  const handleLogout = () => {
    logout(navigate)
  }

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark-surface border-t border-white border-opacity-5">
      {/* Mobile Menu Button */}
      {/* <div className="flex justify-between items-center px-4 py-2">
        <h1 className="logo-medium text-white">Zeno AI</h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`} />
        </button>
      </div> */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute bottom-full left-0 right-0 bg-dark-surface border-t border-white border-opacity-5">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`medium-regular flex items-center px-4 py-3 ${
                    isActive(item.path)
                      ? 'bg-white bg-opacity-5 text-white'
                      : 'text-gray hover:text-white hover:bg-white hover:bg-opacity-5'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  handleLogout()
                }}
                className="w-full text-left medium-regular flex items-center px-4 py-3 text-support-red hover:bg-white hover:bg-opacity-5"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center ${
              isActive(item.path)
                ? 'text-white'
                : 'text-gray'
            }`}
          >
            <i className={`bi ${item.path === '/' ? 'bi-chat-dots' : 'bi-gear'} icon-regular`} />
            <span className="small-regular mt-1">{item.label}</span>
          </Link>
        ))}
        <div className={`flex flex-col`}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isMenuOpen ? "" : ""}`}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x-lg text-white' : 'bi-list text-gray'} icon-regular`} />
          </button>
          <span className={`small-regular mt-1 ${isMenuOpen ? "text-white" : "text-gray"}`}>Menu</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 