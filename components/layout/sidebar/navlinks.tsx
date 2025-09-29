"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { MENU_ITEMS } from '@/lib/constants/navigation'

function Navlinks() {

    const pathname= usePathname()

     const [expandedItems, setExpandedItems] = useState<string[]>([])
  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }
  return (
     <nav className="flex-1 text-xs font-semibold space-y-1" role="navigation" aria-label="Main navigation">
        {MENU_ITEMS.map((item) => (
          <div key={item.label}>
            {item.hasSubmenu ? (
              <Button
                variant={ ( pathname.includes(item.href ) ) ?"outline" :"ghost" }
        className={cn(
          "hover:bg-gray-200 w-full justify-start gap-3 h-10 cursor-pointer px-3",
          pathname.includes(item.href) && "outline"
        )}
                onClick={() => toggleExpanded(item.label)}
               
                aria-haspopup="true"
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                <span className="flex-1 text-left text-xs font-semibold">{item.label}</span>
                {expandedItems.includes(item.label) ? (
                  <ChevronUp className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
            ) : (
              <Link 
                href={item.href || "#"}
                className={cn(
                    "hover:bg-gray-200 w-full flex items-center justify-start gap-3 h-10 px-3 rounded-md  focus:outline-none ",
                    pathname.includes(item.href || "")
                      ? "border-padded"
                      : "",
                  )}
                aria-current={pathname.includes(item.href || "") ? "page" : undefined}
              >
              
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  <span className="flex-1 text-left text-xs font-semibold">{item.label}</span>
               </Link>
            )}

            {item.hasSubmenu && expandedItems.includes(item.label) && (
              <div 
                className="mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200"
                
                role="menu"
                aria-label={`${item.label} submenu`}
              >
                {item.submenuItems?.map((subItem) => (
                  <Link 
                  key={subItem.id} 
                  href={subItem.href}
                  className={cn(
                    "block hover:bg-gray-200 rounded w-full justify-start px-3 py-2 pl-10 text-xs",
                    pathname.includes(subItem.href) && "border"
                  )}
                  role="menuitem"
                  >
                      {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
  )
}

export default Navlinks
