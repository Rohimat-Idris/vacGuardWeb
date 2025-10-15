'use client'
import { useState } from 'react'
import { 
  HomeIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  CogIcon,
  BellIcon,
  MagnifyingGlassIcon as SearchIcon,
  XMarkIcon,
  Bars3Icon,
  CheckCircleIcon,
  ExclamationTriangleIcon as ExclamationIcon
} from '@heroicons/react/24/outline'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function VaxGuardDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sample data
  const stats = [
    { title: 'Total Children', value: '1,248', change: '+12%', icon: <UserGroupIcon className="h-6 w-6 text-blue-500" /> },
    { title: 'Upcoming Vaccines', value: '87', change: '+5%', icon: <CalendarIcon className="h-6 w-6 text-green-500" /> },
    { title: 'Overdue Vaccines', value: '23', change: '-3%', icon: <ExclamationIcon className="h-6 w-6 text-red-500" /> },
    { title: 'Completion Rate', value: '92%', change: '+2%', icon: <CheckCircleIcon className="h-6 w-6 text-purple-500" /> }
  ]

  const upcomingVaccines = [
    { name: 'Emma Johnson', vaccine: 'MMR', dueDate: 'May 15, 2023', status: 'Due' },
    { name: 'Liam Smith', vaccine: 'DTaP', dueDate: 'May 18, 2023', status: 'Due' },
    { name: 'Olivia Brown', vaccine: 'Hepatitis B', dueDate: 'May 20, 2023', status: 'Due' },
    { name: 'Noah Wilson', vaccine: 'Polio', dueDate: 'May 22, 2023', status: 'Due' },
  ]

  const childrenData = [
    { id: 1, name: 'Emma Johnson', gender: 'Female', age: '2 years', lastVaccine: 'Hib', nextDue: 'MMR', status: 'Due soon' },
    { id: 2, name: 'Liam Smith', gender: 'Male', age: '18 months', lastVaccine: 'DTaP', nextDue: 'Hep B', status: 'Up to date' },
    { id: 3, name: 'Olivia Brown', gender: 'Female', age: '3 years', lastVaccine: 'Polio', nextDue: 'Varicella', status: 'Overdue' },
    { id: 4, name: 'Noah Wilson', gender: 'Male', age: '4 years', lastVaccine: 'MMR', nextDue: 'DTaP', status: 'Up to date' },
  ]

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Vaccines Administered',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Vaccines Scheduled',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 max-w-xs">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex h-16 flex-shrink-0 items-center px-4">
              <h2 className="text-lg font-semibold text-blue-600">VaxGuard</h2>
            </div>
            <div className="flex-1 space-y-1 overflow-y-auto p-4">
              <NavItem href="/dashboard" icon={<HomeIcon className="h-5 w-5" />} active>
                Dashboard
              </NavItem>
              <NavItem href="/dashboard/children" icon={<UserGroupIcon className="h-5 w-5" />}>
                Children
              </NavItem>
              <NavItem href="/dashboard/schedule" icon={<CalendarIcon className="h-5 w-5" />}>
                Schedule
              </NavItem>
              <NavItem href="/dashboard/reports" icon={<ChartBarIcon className="h-5 w-5" />}>
                Reports
              </NavItem>
              <NavItem href="/dashboard/settings" icon={<CogIcon className="h-5 w-5" />}>
                Settings
              </NavItem>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex w-64 flex-col border-r border-gray-200 bg-white">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <h2 className="text-lg font-semibold text-blue-600">VaxGuard</h2>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto p-4">
            <NavItem href="/dashboard" icon={<HomeIcon className="h-5 w-5" />} active>
              Dashboard
            </NavItem>
            <NavItem href="/dashboard/children" icon={<UserGroupIcon className="h-5 w-5" />}>
              Children
            </NavItem>
            <NavItem href="/dashboard/schedule" icon={<CalendarIcon className="h-5 w-5" />}>
              Schedule
            </NavItem>
            <NavItem href="/dashboard/reports" icon={<ChartBarIcon className="h-5 w-5" />}>
              Reports
            </NavItem>
            <NavItem href="/dashboard/settings" icon={<CogIcon className="h-5 w-5" />}>
              Settings
            </NavItem>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="md:hidden -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setSidebarOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-800">VaxGuard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search children or vaccines..."
                  className="rounded-lg border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100">
                <BellIcon className="h-5 w-5" />
              </button>
              
              <div className="hidden md:flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  AM
                </div>
                <span className="text-sm font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-4 md:p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Immunization Dashboard</h2>
              <div className="flex items-center space-x-2">
                <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  Export
                </button>
                <button className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Add Child
                </button>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                    <div className="rounded-full bg-gray-100 p-3">{stat.icon}</div>
                  </div>
                  <p className={`mt-2 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
              ))}
            </div>
            
            
            {/* Chart and upcoming vaccines */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">Immunization Trends</h3>
                  <div className="mt-4 h-80">
                    <Line options={chartOptions} data={chartData} />
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Vaccines</h3>
                  <div className="mt-4 space-y-4">
                    {upcomingVaccines.map((item, index) => (
                      <div key={index} className="flex items-start pb-4 last:pb-0 border-b last:border-b-0 border-gray-100">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.vaccine} • Due {item.dueDate}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    View All
                  </button>
                </div>
              </div>
            </div>
            
            {/* Children table */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Children Records</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Child
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Vaccine
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Due
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {childrenData.map((child) => (
                      <tr key={child.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                                {child.name.charAt(0)}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{child.name}</div>
                              <div className="text-sm text-gray-500">{child.gender}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {child.age}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {child.lastVaccine}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {child.nextDue}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            child.status === 'Up to date' 
                              ? 'bg-green-100 text-green-800' 
                              : child.status === 'Due soon' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'
                          }`}>
                            {child.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NavItem({ href, icon, children, active = false }: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="h-5 w-5">{icon}</span>
      <span>{children}</span>
    </a>
  )
}