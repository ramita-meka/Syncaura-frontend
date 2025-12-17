import { useEffect } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import './Dashboard.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

const Dashboard = () => {
  const statCards = [
    { title: 'DB', value: '2,543', label: 'Database Records', bgColor: '#E3F2FD', icon: '📊' },
    { title: 'ID', value: '1,234', label: 'Active IDs', bgColor: '#F3E5F5', icon: '🔑' },
    { title: 'UI', value: '856', label: 'UI Components', bgColor: '#FFF3E0', icon: '🎨' },
    { title: 'IN', value: '92%', label: 'Uptime Status', bgColor: '#F3E5F5', icon: '⚡' },
  ]

  const projectChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Completed',
        data: [65, 78, 85, 92],
        backgroundColor: '#3b82f6',
        borderRadius: 6,
      },
      {
        label: 'In Progress',
        data: [45, 52, 48, 55],
        backgroundColor: '#10b981',
        borderRadius: 6,
      },
      {
        label: 'Pending',
        data: [30, 25, 20, 15],
        backgroundColor: '#f59e0b',
        borderRadius: 6,
      },
      {
        label: 'Blocked',
        data: [15, 12, 10, 8],
        backgroundColor: '#ef4444',
        borderRadius: 6,
      },
    ],
  }

  const productivityChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'Team Productivity',
        data: [45, 52, 48, 65, 72, 68, 78, 85],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          padding: 15,
          font: {
            size: 12,
            weight: '500',
          },
          color: getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim(),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim(),
          drawBorder: false,
        },
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
          font: {
            size: 11,
          },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
          font: {
            size: 11,
          },
        },
      },
    },
  }

  return (
    <div className="dashboard">
      <div className="stats-grid">
        {statCards.map((card, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <h3>{card.title}</h3>
              <span className="stat-icon" style={{ background: card.bgColor }}>
                {card.icon}
              </span>
            </div>
            <p className="stat-value">{card.value}</p>
            <p className="stat-label">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Project Status</h3>
            <span className="chart-menu">⋮</span>
          </div>
          <Bar data={projectChartData} options={chartOptions} />
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Team Productivity</h3>
            <span className="chart-menu">⋮</span>
          </div>
          <Line data={productivityChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
