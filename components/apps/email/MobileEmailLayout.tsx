'use client';

import { useState } from 'react';
import { X, Filter } from 'lucide-react';
import Sidebar from './sidebar';

interface MobileEmailLayoutProps {
  children: React.ReactNode;
}

export default function MobileEmailLayout({ children }: MobileEmailLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Header for Email */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          {/* Filter/Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle email filters"
          >
            <Filter size={20} className="text-gray-600" />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-900">Email</h1>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Email Sidebar Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Email Options</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close email options"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="h-full overflow-y-auto pb-20 p-4">
          <Sidebar />
        </div>
      </div>

      {/* Main Email Content */}
      <div className="flex-1 bg-white">
        {children}
      </div>
    </div>
  );
}