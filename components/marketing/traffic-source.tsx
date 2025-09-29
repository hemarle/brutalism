"use client"
import React from 'react'
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import { useTimeline } from '@/contexts/TimelineContext'
import { generateChartData } from '@/lib/data/marketing-data'

function TrafficSource() {
  const { period } = useTimeline();
  const data = generateChartData(period);

  return (
    <div className='border-padded w-full bg-white'>
      <h4 className=''>Traffic Source</h4>
      
      <div className="py-4">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barSize={40}>
            <XAxis
              dataKey="name"
              stroke="#4B5563"
              tick={{ fontSize: 12, fill: "#4B5563" }}
              tickLine={false}
            />
            <YAxis
              stroke="#4B5563"
              tick={{ fontSize: 12, fill: "#4B5563" }}
              tickLine={false}
              width={40} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
              cursor={{fill: 'transparent'}}
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "8px",
              }}
            />
            <Bar 
              dataKey="pv" 
              stackId="months" 
              fill="#94e056" 
              radius={[0, 0, 0, 0]}
              name="Organic Traffic"
            />
            <Bar 
              dataKey="uv" 
              stackId="months" 
              fill="#abe77a" 
              radius={[4, 4, 0, 0]}
              name="Paid Traffic"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}


export default TrafficSource
