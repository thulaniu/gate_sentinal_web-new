"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, FileBarChart, Users, Info, MessageSquare, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  // { name: "Logs", href: "/logs", icon: FileBarChart },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: MessageSquare },
  // { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-zinc-300 dark:bg-zinc-900 border-r border-border/40">
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-6 py-5 text-lg font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800",
              pathname === item.href ? "bg-zinc-200 dark:bg-zinc-800" : "text-zinc-800 dark:text-zinc-400",
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
