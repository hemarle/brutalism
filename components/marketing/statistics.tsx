"use client"
import React from 'react'
import { useTimeline } from '@/contexts/TimelineContext'
import { generateStatsData } from '@/lib/data/marketing-data'
import StatsCard from './stats-card'
import {
  Users,
  Banknote,
  CircleDollarSign,
  Check,
} from "lucide-react"

function StatsCardContainer() {
  const { period } = useTimeline();
  const statsData = generateStatsData(period);
  
  // Format values based on type
  const formatValue = (value: number, type: string) => {
    switch (type) {
      case 'totalSpend':
        return `$${value.toLocaleString()}`;
      case 'visitors':
        return value.toLocaleString();
      case 'acquisition':
        return `${value}%`;
      case 'revenue':
        return `${value}%`;
      default:
        return value.toString();
    }
  };

  // Calculate percentage change
  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100);
  };

  const statsConfig = [
    {
      title: "Total Spend",
      type: "totalSpend",
      icon: <Banknote color="#7cda31" size={24} />,
      data: statsData.totalSpend
    },
    {
      title: "Visitor",
      type: "visitors", 
      icon: <Users color="#7cda31" size={24} />,
      data: statsData.visitors
    },
    {
      title: "Acquisition",
      type: "acquisition",
      icon: <Check color="#7cda31" className="rounded-full border-2 stroke-2 border-green-500" size={24} />,
      data: statsData.acquisition
    },
    {
      title: "Revenue", 
      type: "revenue",
      icon: <CircleDollarSign color="#7cda31" size={24} />,
      data: statsData.revenue
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
      {statsConfig.map((stat) => (
        <StatsCard
          key={stat.type}
          title={stat.title}
          value={formatValue(stat.data.current, stat.type)}
          previousValue={formatValue(stat.data.previous, stat.type)}
          change={calculateChange(stat.data.current, stat.data.previous)}
          icon={stat.icon}
          id={stat.type}
        />
      ))}
    </div>
  )
}

export default StatsCardContainer
