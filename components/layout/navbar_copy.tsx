import Image from "next/image";
import React from "react";
import { FiSearch, FiSettings, FiMail, FiBell } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm">
      {/* Left: Search */}
      <div className="flex items-center w-full max-w-sm">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4 ml-4">
        {/* Settings */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <FiSettings size={18} className="text-gray-600" />
        </button>

        {/* Mail with badge */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <FiMail size={18} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
            4
          </span>
        </button>

        {/* Notifications with badge */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <FiBell size={18} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
            1
          </span>
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-300">
          <Image
        height={40}
        width={40}
            src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;