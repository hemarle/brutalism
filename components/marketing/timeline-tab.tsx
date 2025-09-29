"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useTimeline } from '@/contexts/TimelineContext'
import type { TimelinePeriod } from '@/lib/data/marketing-data'

function TimelineTab() {
  const { period, setPeriod } = useTimeline();

  const timelinePeriods: { label: string; value: TimelinePeriod }[] = [
    { label: '7 Days', value: '7days' },
    { label: '14 Days', value: '14days' },
    { label: '1 Month', value: '1month' },
  ];

  return (
    <div className='border-2 rounded flex font-semibold' role="tablist" aria-label="Timeline filter">
      {timelinePeriods.map((item, index) => (
        <Button
          key={item.value}
          size='sm'
          variant={period === item.value ? 'default' : 'ghost'}
          className={`cursor-pointer px-4 py-1 rounded-none ${
            index !== timelinePeriods.length - 1 ? 'border-r-2' : ''
          } ${
            period === item.value 
              ? 'text-white bg-green-600 shadow-lg' 
              : 'text-green-700 hover:bg-green-50'
          } `}
          onClick={() => setPeriod(item.value)}
          role="tab"
          aria-selected={period === item.value}
          aria-controls="dashboard-content"
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}

export default TimelineTab
