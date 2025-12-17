import { useState, useEffect } from 'react'
import Sidebar from '../components/Admin/Sidebar'
import Header from '../components/Admin/Header'
import Dashboard from '../components/Admin/Dashboard'

import './index.css';
function AdminDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden ">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Dashboard />
      </main>
    </div>
  )
}

export default AdminDashboard
