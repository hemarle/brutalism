"use client"
import React from 'react'
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
function TrafficSource() {
  const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]
  return (
    <div className=' border-padded  w-full bg-white'>
      <h4 className=''>Traffic Source</h4>
      

<div className="py-4 ">
  <ResponsiveContainer width="100%" height={350}>
  <BarChart   data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv"  stackId="months" fill="#8884d8" />
  <Bar dataKey="uv" stackId="months"  fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>

    </div>
  )
}


export default TrafficSource
