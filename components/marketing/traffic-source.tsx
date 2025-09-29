"use client"
import React from 'react'
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
function TrafficSource() {
  const data = [
  {
    "name": "Month A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Month B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Month C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Month D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Month E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Month F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Month G",
    "uv": 3490,
    "pv": 4300
  }
]
  return (
    <div className=' border-padded  w-full bg-white'>
      <h4 className=''>Traffic Source</h4>
      

<div className="py-4 ">
  <ResponsiveContainer width="100%" height={320} >
<BarChart data={data} barSize={40} >
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
<Bar dataKey="pv" stackId="months" fill="#94e056" radius={[0, 0, 0, 0]}  />
<Bar dataKey="uv" stackId="months" fill="#abe77a" radius={[4, 4, 0, 0]} />
</BarChart>
</ResponsiveContainer>
</div>

    </div>
  )
}


export default TrafficSource
