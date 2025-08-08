"use client";

import { ReactNode } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { DashboardModeSwitcher, DashboardModeSwitcherMobile, DashboardModeProvider, useDashboardMode } from "@/components/dashboard-mode-switcher";
import { Home, User, Settings, BarChart3, Building, MessageSquare, Star, Send } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/svg/logo";

interface DashboardLayoutProps {
  children: ReactNode;
}

// User mode navigation items
const userSidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "My Reviews",
    href: "/dashboard/reviews",
    icon: Star,
  },
  {
    label: "Favorite Businesses",
    href: "/dashboard/favorites",
    icon: MessageSquare,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

// Business mode navigation items
const businessSidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "My Businesses",
    href: "/dashboard/businesses",
    icon: Building,
  },
  {
    label: "Reviews",
    href: "/dashboard/reviews",
    icon: MessageSquare,
  },
  {
    label: "Invitations",
    href: "/dashboard/invitations",
    icon: Send,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const userBottomNavItems = [
  {
    label: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Reviews",
    href: "/dashboard/reviews",
    icon: Star,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const businessBottomNavItems = [
  {
    label: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Business",
    href: "/dashboard/businesses",
    icon: Building,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardModeProvider>
      <DashboardLayoutInner>{children}</DashboardLayoutInner>
    </DashboardModeProvider>
  )
}

function DashboardLayoutInner({ children }: DashboardLayoutProps) {
  const { mode } = useDashboardMode();
  
  const sidebarItems = mode === 'business' ? businessSidebarItems : userSidebarItems;
  const bottomNavItems = mode === 'business' ? businessBottomNavItems : userBottomNavItems;

  return (
    <div className='min-h-screen bg-background'>
      {/* Desktop Layout with Sidebar */}
      <div className='hidden md:flex w-full'>
        <SidebarProvider>
          <Sidebar variant='floating' data-variant='inset' className='bg-background'>
            <SidebarHeader className='border-b border-border p-6'>
              <div className='flex items-center gap-3'>
                <Link href='/' className='flex items-center gap-3'>
                  <div className='flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm'>
                    <Logo className='size-6' />
                  </div>
                  <div className='grid flex-1 text-left leading-tight'>
                    <span className='truncate text-base font-bold'>logo</span>
                    <span className='truncate text-xs text-muted-foreground font-medium'>
                      Professional
                    </span>
                  </div>
                </Link>
              </div>
            </SidebarHeader>
            <SidebarContent className='p-3'>
              <div className='space-y-3'>
                <DashboardModeSwitcher />
                <div className='space-y-1'>
                  <div className='px-2 py-1'>
                    <h3 className='text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1'>
                      {mode === 'business' ? 'Business' : 'User'}
                    </h3>
                  </div>
                  <SidebarMenu className='space-y-1'>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        className='h-10 px-3 rounded-lg transition-all duration-200 hover:bg-accent/50'
                      >
                        <Link
                          href={item.href}
                          className='flex items-center gap-3'
                        >
                          <item.icon className='size-4 shrink-0' />
                          <span className='font-medium'>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  </SidebarMenu>
                </div>
              </div>
            </SidebarContent>
            <SidebarFooter className='p-4 border-t border-border'>
              <div className='flex items-center justify-between'>
                <div className='text-xs text-muted-foreground'>Theme</div>
                <ThemeSwitcher />
              </div>
            </SidebarFooter>
          </Sidebar>

          <SidebarInset className='flex flex-col bg-background'>
            <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
              <SidebarTrigger className='-ml-1' />
              <div className='ml-auto'>
                {/* Add user menu or other header content here */}
              </div>
            </header>

            <main className='flex-1 p-4'>{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </div>

      {/* Mobile Layout without Sidebar */}
      <div className='md:hidden flex flex-col min-h-screen'>
        <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background'>
          <Link href='/' className='flex items-center gap-3'>
            <div className='flex items-center gap-3'>
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'>
                <Logo className='size-5' />
              </div>
              <span className='font-bold'>logo</span>
            </div>
          </Link>
          <div className='ml-auto flex items-center gap-2'>
            <DashboardModeSwitcherMobile />
            <ThemeSwitcher />
          </div>
        </header>

        <main className='flex-1 p-4 pb-16'>{children}</main>
      </div>

      <BottomNavigation items={bottomNavItems} />
    </div>
  );
}
