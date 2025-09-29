"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const menuItems = [
  { icon:User,label: "Inbox", href: "?view=inbox" },
  {icon:User, label: "Sent", href: "?view=sent" },
  {icon:User, label: "Drafts", href: "?view=drafts" },
  {icon:User, label: "Spam", href: "?view=spam" },
];
const labelItems = [
  { icon:User,label: "Work", href: "?label=work&view=inbox" },
  {icon:User, label: "Personal", href: "?label=personal&view=inbox" },
  {icon:User, label: "Friends", href: "?label=friends&view=inbox" },
  {icon:User, label: "Office", href: "?label=office&view=inbox" },
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
                    "w-full justify-start gap-3 h-10 px-3",
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
                  "w-full justify-start gap-3 h-10 px-3",
                  item.label===activeOption
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={() => handleOptionClick(item.label, "label")}
              >
                <item.icon className="h-4 w-4" />
                <span className="flex-1 text-left">{item.label}</span>

              </Button>
            </div>
          ))}
        </div>)
}

export default Options
