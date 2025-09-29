'use client'
import React, { useState } from 'react'
import Navbar from '@/components/layout/navbar'
// import Sidebar from '@/components/layout/Sidebar'
import MetricCard from '@/components/MetricCard'
import TrafficChart from '@/components/TrafficChart'
import AcquisitionChart from '@/components/AcquisitionChart'
import BudgetByPlatform from '@/components/BudgetByPlatform'
import Sidebar from './layout/sidebar'

function Dashboard() {
  const [activeItem, setActiveItem] = useState('Marketing')

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex">
        {/* <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} /> */}
        <Sidebar/>
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Marketing</h1>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50">
                7 Days
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50">
                14 Days
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50">
                1 Month
              </button>
            </div>
          </div>

          {/* Top Row Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <MetricCard
              title="Total Spend"
              value="$8,765"
              change="4.32%"
              changeType="positive"
              period="$10,234"
              icon="💰"
            />
            <MetricCard
              title="Visitor"
              value="14,321"
              change="6.43%"
              changeType="positive"
              period="12,843"
              icon="👥"
            />
            <MetricCard
              title="Acquisition"
              value="1,023"
              change="18.21%"
              changeType="positive"
              period="878"
              icon="📈"
            />
            <MetricCard
              title="Revenue"
              value="$18,765"
              change="27.87%"
              changeType="positive"
              period="$16,432"
              icon="💵"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <TrafficChart />
            <AcquisitionChart />
          </div>

          {/* Budget by Platform */}
          <div className="max-w-md">
            <BudgetByPlatform />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard