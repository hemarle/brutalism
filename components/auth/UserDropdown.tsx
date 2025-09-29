'use client';

import { useState } from 'react';
import Image from 'next/image';
import { logoutAction } from '@/actions/auth';
import type { User } from '@/actions/auth';
import { Button } from '../ui/button';

interface UserDropdownProps {
  user: User | null;
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logoutAction();
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`User menu for ${user.name}`}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt=""
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm"
              aria-hidden="true"
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
          role="menu"
          aria-label="User menu"
        >
          <div className="py-1">
            <div className="px-4 py-2 border-b border-gray-100" role="presentation">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors focus:outline-none focus:bg-red-50"
              role="menuitem"
            >
              Sign out
            </Button>
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}