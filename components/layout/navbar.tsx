import React from "react";
import { getCurrentUser } from "@/actions/auth";
import UserDropdown from "@/components/auth/UserDropdown";

const Navbar: React.FC = async () => {
  const user = await getCurrentUser();

  return (
    <header className="w-full border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm">
      {/* Left: Search */}
      <div className="flex items-center w-full max-w-sm">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4 ml-4">
        {/* Settings */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="text-gray-600">⚙️</span>
        </button>

        {/* Mail with badge */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="text-gray-600">✉️</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
            4
          </span>
        </button>

        {/* Notifications with badge */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="text-gray-600">🔔</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
            1
          </span>
        </button>

        {/* User Dropdown */}
        <UserDropdown user={user} />
      </div>
    </header>
  );
};

export default Navbar;