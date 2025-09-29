'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navbar from './navbar';
import Sidebar from './sidebar';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        {/* Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-gray-600" />
        </button>

        {/* Logo */}
        {/* <div className="flex items-center gap-1 font-bold text-lg">
          <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-gray-900">rutalism</span>
        </div> */}

        {/* Search Icon (simplified for mobile) */}
        <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <span className="text-gray-400">🔍</span>
        </button>
      </div>

      {/* Mobile Navbar (User info and notifications) */}
      <div className="border-b border-gray-200">
        <Navbar />
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {/* <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-semibold text-gray-900 text-xl">rutalism</span>
          </div> */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="h-full overflow-y-auto pb-20">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {children}
      </div>
    </div>
  );
}