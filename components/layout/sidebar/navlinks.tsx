"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {
  BarChart3,
  TrendingUp,
  Building2,
  FolderOpen,
  Users,
  Smartphone,
  Globe,
  FileText,
  MessageSquare,
  User,
  ChevronDown,
  ChevronUp,
  Clapperboard,
} from "lucide-react"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const menuItems = [
  { icon: BarChart3, label: "Marketing", active: true, href: "/marketing" },
  { icon: TrendingUp, label: "Analytics", href: "/analytics" },
  { icon: Building2, label: "Business", href: "/business" },
  { icon: FolderOpen, label: "Project", href: "/project" },
  { icon: Users, label: "HRM", href: "/hrm" },
  { icon: Smartphone, label: "Mobile App", href: "/mobile-app" },
  { icon: Globe, label: "Landing page", href: "/landing-page" },

  {
    icon: MessageSquare,
    label: "Content",
    href: "/content",
    hasSubmenu: true,
    submenuItems: [
      { id: "content-blog", label: "Blog Posts", href: "/content/blog" },
      { id: "content-landing", label: "Landing Pages", href: "/content/landing-pages" },
      { id: "content-email", label: "Email Templates", href: "/content/email-templates" },
      { id: "content-social", label: "Social Posts", href: "/content/social-posts" },
      { id: "content-media", label: "Media Library", href: "/content/media" },
      { id: "content-seo", label: "SEO Tools", href: "/content/seo" },
    ],
  },
  {
    icon: User,
    label: "Users",
    hasSubmenu: true,
    href: "/users",
    submenuItems: [
      { id: "users-all", label: "All Users", href: "/users/all" },
      { id: "users-admin", label: "Administrators", href: "/users/administrators" },
      { id: "users-moderators", label: "Moderators", href: "/users/moderators" },
      { id: "users-subscribers", label: "Subscribers", href: "/users/subscribers" },
      { id: "users-groups", label: "User Groups", href: "/users/groups" },
      { id: "users-permissions", label: "Permissions", href: "/users/permissions" },
    ],
  },
  {
    icon: Clapperboard,
    label: "Apps",
    hasSubmenu: true,
    href: "/apps",
    submenuItems: [
      { id: "apps-all", label: "Email", href: "/apps/email" },
      { id: "apps-permissions", label: "Permissions", href: "/apps/permissions" },
    ],
  },
  { icon: FileText, label: "Documentation", href: "/documentation" },
]

function Navlinks() {

    const pathname= usePathname()

     const [expandedItems, setExpandedItems] = useState<string[]>([])
  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }
  return (
     <nav className="flex-1 text-xs font-semibold space-y-1 ">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.hasSubmenu ? (
              <Button
                variant={ ( pathname.includes(item.href ) ) ?"outline" :"ghost" }
                className={cn(
                  "w-full justify-start gap-3 h-10 cursor-pointer px-3 ",
                  
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={() => toggleExpanded(item.label)}
              >
                <item.icon className="h-4 w-4" />
                <span className="flex-1 text-left text-xs font-semibold">{item.label}</span>
                {expandedItems.includes(item.label) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            ) : (
              <Link href={item.href || "#"}
               className={cn(
                    "w-full flex items-center justify-start gap-3 h-10 px-3 ",
                    pathname.includes(item.href || "")
                      ? "bg-sidebar-accent text-sidebar-accent-foreground border-padded"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
              >
              
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1 text-left text-xs font-semibold">{item.label}</span>
               </Link>
            )}

            {item.hasSubmenu && expandedItems.includes(item.label) && (
              <div className=" mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {item.submenuItems?.map((subItem) => (
                  <Link key={subItem.id} href={subItem.href}>
                    <Button
                      variant={ ( pathname.includes(subItem.href ) ) ?"outline" :"ghost" }
                     size="sm"
                      className=" cursor-pointer w-full justify-start h-8 px-3 pl-10 text-xs  text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    >
                      {subItem.label}
                    </Button>
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
