"use client";
import React, { useEffect, useState } from "react";
import { getCurrentUser, User } from "@/actions/auth";
import UserDropdown from "@/components/auth/UserDropdown";

const Navbar: React.FC =  () => {
  
  const [user, setUser] =useState<User | null>(null);   
useEffect(()=>{
  getCurrentUser().then(user => setUser(user)).catch(() => null);

},[])
if(!user) return null;
  return (
    <header className="w-full border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm">
      {/* Left: Search - Hidden on mobile, shown on desktop */}
      <div className="hidden md:flex items-center w-full max-w-sm">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Mobile: Just user info */}
      <div className="block md:hidden">
        <UserDropdown user={user} />
      </div>

      {/* Right: Icons - Responsive */}
      <div className="flex items-center space-x-2 md:space-x-4 ml-4">
        {/* Settings - Hidden on mobile */}
        <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full hover:bg-gray-100">
          <span className="text-gray-600">⚙️</span>
        </button>

        {/* Mail with badge */}
        <button className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="text-gray-600 text-sm md:text-base">✉️</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
            <span className="text-[10px] md:text-xs">4</span>
          </span>
        </button>

        {/* Notifications with badge */}
        <button className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="text-gray-600 text-sm md:text-base">🔔</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
            <span className="text-[10px] md:text-xs">1</span>
          </span>
        </button>

        {/* User Dropdown - Hidden on mobile (shown in separate mobile section) */}
        <div className="hidden md:block">
          <UserDropdown user={user} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;