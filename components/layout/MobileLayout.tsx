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
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        {/* Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isSidebarOpen}
          aria-controls="mobile-sidebar"
        >
          <Menu size={24} className="text-gray-600" />
        </button>

        {/* Search Icon (simplified for mobile) */}
        <button 
          className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Search"
        >
          <span className="text-gray-400" aria-hidden="true">🔍</span>
        </button>
      </header>

      {/* Mobile Navbar (User info and notifications) */}
      <div className="border-b border-gray-200">
        <Navbar />
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <nav
        id="mobile-sidebar"
        className={`fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Main navigation"
        aria-hidden={!isSidebarOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Close navigation menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="h-full overflow-y-auto pb-20">
          <Sidebar />
        </div>
      </nav>

      {/* Main Content */}
      <main id="mobile-main-content" className="flex-1 overflow-auto p-4" role="main">
        {children}
      </main>
    </div>
  );
}