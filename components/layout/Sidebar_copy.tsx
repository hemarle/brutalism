import React from 'react'

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

function Sidebar({ activeItem, setActiveItem }: SidebarProps) {
  const menuItems = [
    { name: 'Marketing', icon: '📊', active: true },
    { name: 'Analytics', icon: '📈', active: false },
    { name: 'Business', icon: '💼', active: false },
    { name: 'Project', icon: '📁', active: false },
    { name: 'HRM', icon: '👥', active: false },
    { name: 'Mobile App', icon: '📱', active: false },
    { name: 'Landing page', icon: '🌐', active: false, hasSubmenu: true },
    { name: 'Components', icon: '🔧', active: false, hasSubmenu: true },
    { name: 'Pages', icon: '📄', active: false, hasSubmenu: true },
    { name: 'Apps', icon: '📋', active: false, hasSubmenu: true },
    { name: 'Content', icon: '📝', active: false, hasSubmenu: true },
    { name: 'Users', icon: '👤', active: false, hasSubmenu: true },
    { name: 'Documentation', icon: '📚', active: false },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 text-sm ${
                  item.name === activeItem || item.active
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
                {item.hasSubmenu && (
                  <span className="ml-auto text-gray-400">›</span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-4 right-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Upgrade to Pro</h3>
          <p className="text-sm text-gray-600 mb-4">
            Are you looking for more features? Check out our Pro version.
          </p>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar