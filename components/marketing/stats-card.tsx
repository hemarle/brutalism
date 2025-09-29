import React, { ReactNode } from 'react'

interface StatsCardProps {
    title?: string;
    value:string;
    change: number;
    previousValue?: string;
    icon:ReactNode
}
function StatsCard({ title, value, previousValue, change, icon }: StatsCardProps) {
  return (
    <div className='border-padded'>
      <h3 className='font-semibold'>{title}</h3>
      <div className=" mt-4  flex justify-between  ">
        <div className="">
      <h2 className='mb-2'>{value}</h2>
<p className='font-semibold'>Previous</p>
<p>{previousValue}</p>
        </div>
        <div className="text-right">
            <div className="mb-2 flex justify-end">

            {icon}
            </div>
            <p className='font-semibold'>Progress</p>
            <p className={`font-bold ${change > 0 ? "text-green-700" : "text-red-500"}`}>{change}%</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard