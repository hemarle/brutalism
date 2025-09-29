"use client"
import { Facebook } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
// import { Progress } from '../ui/progress';
function BudgetByPlatform() {
  const platforms = [
    { name: 'Instagram', icon: <Facebook/> , amount: '$12,345', percentage: 60, color: '#cda31' },
    { name: 'X (Twitter)', icon: '✕', amount: '$1,543', percentage: 36, color: '#f87171' },
  ]
  return (
    <div className=' border-padded  w-full '>
      <h4 className=''>Budget by Platform</h4>
      <div className="">
        {platforms.map((platform) => (
          <div key={platform.name} className={`flex items-center  space-x-4 my-4`}>
            <span className="text-lg"><Image src={"/assets/icons/facebook.svg"} width={24} height={24} alt={platform.name} /> </span>
            <div className="w-full">
              <div className="flex justify-between w-full">

              <p className='text-xs'>Remaining: {platform.amount} </p>
              <p className='text-xs'>{platform.percentage}%</p>
              </div>
              <progress value={platform.percentage} max={100} className={`w-full h-2 rounded-full [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-[${platform.color}]`}/>
            </div>
            {/* <span className="text-lg">{platform.amount}</span>
            <span className="text-lg">{platform.percentage}%</span> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BudgetByPlatform;
