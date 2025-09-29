"use client"
import Image from 'next/image';
import React from 'react'
function BudgetByPlatform() {


  const platforms = [
    { name: 'Instagram', src:"/assets/icons/facebook.svg",  amount: '$12,345', percentage: 60, color: '#abe77a' },
    { name: 'X (Twitter)', src:"/assets/icons/x.svg",  amount: '$1,543', percentage: 86, color: '#f87171' },
    { name: 'Google', src:"/assets/icons/google.svg",  amount: '$1,543', percentage: 67, color: '#f87171' },
    { name: 'TikTok', src:"/assets/icons/tiktok.svg",  amount: '$1,543', percentage: 21, color: '#f87171' },
    { name: 'Xing', src:"/assets/icons/xing.svg",  amount: '$1,543', percentage: 35, color: '#ffffff' },
  ]
  
  const getProgressColor = (percentage: number) => {
  if (percentage > 50) return "#abe77a"; // green
  if (percentage >= 30) return "#f97316";  // orange
  return "#ef4444";                           // red
};

  return (
    <div className=' border-padded  w-full min-h-100'>
      <h4 className=''>Budget by Platform</h4>
      <div className="">
        {platforms.map((platform) => (
          <div key={platform.name} className={`flex items-center  space-x-4 my-6`}>
            <span className="text-lg"><Image src={platform.src} width={24} height={24} alt={platform.name} /> </span>
            <div className="w-full">
              <div className="flex justify-between w-full">

              <p className='text-xs'>Remaining: {platform.amount} </p>
              <p className='text-xs'>{platform.percentage}%</p>
              </div>
              
<div
  className="w-full h-2 rounded-full overflow-hidden"
  style={{
    backgroundColor: getProgressColor(platform.percentage) + "20", // faded track
  }}
>
  <div
    className="h-full rounded-full"
    style={{
      width: `${platform.percentage}%`,
      backgroundColor: getProgressColor(platform.percentage), // solid fill
    }}
  />
</div>

              {/* <progress value={platform.percentage} max={100} className={`w-full h-2 rounded-full [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-[${platform.color}]`}/> */}
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
