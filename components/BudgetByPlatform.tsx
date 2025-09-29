import React from 'react'

interface PlatformData {
  name: string;
  icon: string;
  amount: string;
  percentage: number;
  color: string;
}

function BudgetByPlatform() {
  const platforms: PlatformData[] = [
    { name: 'Instagram', icon: '📷', amount: '$12,345', percentage: 60, color: 'bg-green-500' },
    { name: 'X (Twitter)', icon: '✕', amount: '$1,543', percentage: 56, color: 'bg-green-500' },
    { name: 'Google', icon: '🔍', amount: '$5,678', percentage: 57, color: 'bg-green-500' },
    { name: 'TikTok', icon: '🎵', amount: '$3,456', percentage: 21, color: 'bg-orange-500' },
    { name: 'Bing', icon: '🅱️', amount: '$2,098', percentage: 35, color: 'bg-orange-500' },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget by Platform</h3>
      
      <div className="space-y-6">
        {platforms.map((platform, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                <span>{platform.icon}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{platform.name}</p>
                <p className="text-sm text-green-600">Remaining: {platform.amount}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${platform.color}`}
                  style={{ width: `${platform.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-900 w-8">
                {platform.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BudgetByPlatform