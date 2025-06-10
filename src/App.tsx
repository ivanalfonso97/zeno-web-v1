import { useState, useEffect } from 'react';
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Initialize from localStorage or default to system preference
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <div>
      {/* Simple Dark Mode Toggle Button (you might move this to a header/footer later) */}
      {/* <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-800 text-white shadow-lg z-50"
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
