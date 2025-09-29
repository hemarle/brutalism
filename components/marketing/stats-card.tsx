import React, { ReactNode } from 'react'

interface StatsCardProps {
    title?: string;
    value: string;
    previousValue: string;
    change: number;
    icon: ReactNode;
    id?: string;
}

function StatsCard({ title, value, previousValue, change, icon }: StatsCardProps) {
  
  return (
    <div className='border-padded w-full' role="region" aria-labelledby={title ? `${title}-heading` : undefined}>
      <h3 id={title ? `${title}-heading` : undefined} className='font-semibold'>{title}</h3>
      <div className="mt-4 flex justify-between">
        <div className="">
          <p className='mb-2 text-2xl font-bold' aria-label={`Current ${title}: ${value}`}>{value}</p>
          <p className='font-semibold'>Previous</p>
          <p aria-label={`Previous ${title}: ${previousValue}`}>{previousValue}</p>
        </div>
        <div className="text-right">
          <div className="mb-2 flex justify-end" aria-hidden="true">
            {icon}
          </div>
          <p className='font-semibold'>Progress</p>
          <p 
            className={`font-bold ${change > 0 ? "text-green-700" : "text-red-500"}`}
          >
            {change > 0 ? '+' : ''}{change.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard