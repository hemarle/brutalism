"use client"
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useTimeline } from '@/contexts/TimelineContext'
import { generateChartData } from '@/lib/data/marketing-data'

function AcquisitionChart() {
  const { period } = useTimeline();
  const data = generateChartData(period);

  return (
    <div className='border-padded w-full'>
      <h4 className=''>Acquisition Vs Cost</h4>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={235}>                    
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tickLine={false}
              tick={{ fontSize: 12, fill: "#4B5563" }}
            />
            <YAxis 
              tickLine={false}
              tick={{ fontSize: 12, fill: "#4B5563" }}
              width={45} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />
            <Area 
              type="monotone" 
              dataKey="uv" 
              stroke="#8884d8" 
              fillOpacity={1} 
              fill="url(#colorUv)"
              name="Acquisition"
            />
            <Area 
              type="monotone" 
              dataKey="pv" 
              stroke="#82ca9d" 
              fillOpacity={1} 
              fill="url(#colorPv)"
              name="Cost"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AcquisitionChart
