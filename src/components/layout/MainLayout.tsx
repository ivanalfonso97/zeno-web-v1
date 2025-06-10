import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-dark-base">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout