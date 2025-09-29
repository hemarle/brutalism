"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { Inbox, Star, AlertCircle, MailCheck, Send, FileText, Trash2, Briefcase, User, Users, Building2, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const menuItems = [
  { icon: Inbox, label: "Inbox", href: "?view=inbox" },
  { icon: Star, label: "Starred", href: "?view=starred" },
  { icon: AlertCircle, label: "Important", href: "?view=important" },
  { icon: MailCheck, label: "Unread", href: "?view=unread" },
  { icon: Send, label: "Sent", href: "?view=sent" },
  { icon: FileText, label: "Drafts", href: "?view=drafts" },
  { icon: Trash2, label: "Trash", href: "?view=trash" },
];
const labelItems = [
  { icon: Briefcase, label: "Work", href: "?label=Work" },
  { icon: User, label: "Personal", href: "?label=Personal" },
  { icon: Users, label: "Finance", href: "?label=Finance" },
  { icon: Building2, label: "Travel", href: "?label=Travel" },
];



function Options() {
const router = useRouter();
  const [activeOption, setActiveOption] = React.useState("Inbox");

  const handleOptionClick = (label: string, type: "menu" | "label") => {
    setActiveOption(label);
    router.push(type === "menu" ? menuItems.find(item => item.label === label)?.href || "/" : labelItems.find(item => item.label === label)?.href || "/");
  };


return (
    <div className="">
      {menuItems.map((item) => (
        <div key={item.label}>
          <Button
            variant={item.label===activeOption ? "outline" : "ghost"}
                className={cn(
                    "w-full justify-start gap-3 h-10 px-3 cursor-pointer",
                    item.label===activeOption
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={() => handleOptionClick(item.label, "menu")}
                >
                <item.icon className="h-4 w-4" />
                <span className="flex-1 text-left">{item.label}</span>

              </Button>
            </div>
          ))}

          <h4 className="mt-4 mb-2 px-3 text-sm font-semibold">Labels</h4>
          {labelItems.map((item) => (
            <div key={item.label}>
              <Button
                variant={item.label===activeOption ? "outline" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-10 px-3 cursor-pointer",
                  item.label===activeOption
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={() => handleOptionClick(item.label, "label")}
              >
                
                <Tag className="h-4 w-4" />
                <span className="flex-1 text-left">{item.label}</span>

              </Button>
            </div>
          ))}
        </div>)
}

export default Options
