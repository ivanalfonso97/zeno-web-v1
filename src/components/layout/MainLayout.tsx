import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-dark-base">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Navbar />
    </div>
  )
}

export default MainLayout