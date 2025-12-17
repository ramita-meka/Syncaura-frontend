import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Projects', icon: '📁' },
    { name: 'Tasks', icon: '✓' },
    { name: 'Chat', icon: '💬' },
    { name: 'Meetings', icon: '📅' },
    { name: 'Documents', icon: '📄' },
    { name: 'Complaints', icon: '⚠️' },
    { name: 'Notice', icon: '🔔' },
    { name: 'Attendance', icon: '⏱️' },
    { name: 'Leave', icon: '☂️' },
    { name: 'Performance', icon: '📊' },
    { name: 'Integrations', icon: '🔗' },
    { name: 'Settings', icon: '⚙️' },
  ]

  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveItem(item.name)
            }}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
