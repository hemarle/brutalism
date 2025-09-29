"use client"
import Image from 'next/image';
import React from 'react'
import { useTimeline } from '@/contexts/TimelineContext'
import { generatePlatformData } from '@/lib/data/marketing-data'

function BudgetByPlatform() {
  const { period } = useTimeline();
  const platforms = generatePlatformData(period);
  
  const getProgressColor = (percentage: number) => {
    if (percentage > 50) return "#abe77a"; // green
    if (percentage >= 30) return "#f97316";  // orange
    return "#ef4444";                           // red
  };

  return (
    <div className='border-padded w-full min-h-100'>
      <h4 className=''>Budget by Platform</h4>
      <div className="">
        {platforms.map((platform) => (
          <div key={platform.name} className={`flex items-center space-x-4 my-6`}>
            <span className="text-lg">
              <Image 
                src={platform.src} 
                width={24} 
                height={24} 
                alt={`${platform.name} icon`} 
              /> 
            </span>
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className='text-xs'>Remaining: {platform.amount}</p>
                <p className='text-xs'>{platform.percentage}%</p>
              </div>
              
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{
                  backgroundColor: getProgressColor(platform.percentage) + "20", // faded track
                }}
                role="progressbar"
                aria-valuenow={platform.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${platform.name} budget utilization: ${platform.percentage}%`}
              >
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${platform.percentage}%`,
                    backgroundColor: getProgressColor(platform.percentage), // solid fill
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BudgetByPlatform;
