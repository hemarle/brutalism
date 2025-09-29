import React from 'react'

function AcquisitionChart() {
  // Simulating the acquisition vs cost chart data
  const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7'];
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Acquisition vs Cost</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">800</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">600</span>
          </div>
        </div>
      </div>
      
      <div className="h-48 relative">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Blue line (acquisition) */}
          <polyline
            points="30,160 80,140 130,120 180,100 230,130 280,90 350,110"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            className="drop-shadow-sm"
          />
          
          {/* Green line (cost) */}
          <polyline
            points="30,140 80,130 130,110 180,120 230,105 280,115 350,125"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            className="drop-shadow-sm"
          />
        </svg>
        
        {/* Month labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
          {months.map((month, index) => (
            <span key={index}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AcquisitionChart