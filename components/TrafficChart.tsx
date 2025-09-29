import React from 'react'

function TrafficChart() {
  const data = [
    { month: 'Month 1', value: 120 },
    { month: 'Month 2', value: 180 },
    { month: 'Month 3', value: 140 },
    { month: 'Month 4', value: 200 },
    { month: 'Month 5', value: 160 },
    { month: 'Month 6', value: 220 },
    { month: 'Month 7', value: 190 }
  ];

  const maxValue = 250;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Source</h3>
      
      <div className="h-48 flex items-end space-x-1">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-green-500 rounded-sm"
              style={{ 
                height: `${(item.value / maxValue) * 180}px`,
                minHeight: '20px'
              }}
            ></div>
            <span className="text-xs text-gray-500 mt-2 text-center">
              {item.month.replace('Month ', 'M')}
            </span>
          </div>
        ))}
      </div>
      
      {/* Y-axis labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>0</span>
        <span>50</span>
        <span>100</span>
        <span>150</span>
        <span>200</span>
        <span>250</span>
      </div>
    </div>
  )
}

export default TrafficChart