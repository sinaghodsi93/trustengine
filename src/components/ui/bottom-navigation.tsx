"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface BottomNavigationItem {
  label: string
  href: string
  icon: LucideIcon
}

interface BottomNavigationProps {
  items: BottomNavigationItem[]
  className?: string
}

export function BottomNavigation({ items, className }: BottomNavigationProps) {
  const pathname = usePathname()

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border",
      "md:hidden", // Only show on mobile
      className
    )}>
      <nav className="flex items-center justify-around py-1 px-2">
        {items.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link key={item.href} href={item.href} className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full flex flex-col items-center justify-center gap-0.5 h-12 text-xs px-1 py-2",
                  "hover:bg-accent/50 hover:text-accent-foreground transition-colors",
                  isActive && "text-primary"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="truncate text-[10px] leading-tight">{item.label}</span>
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}