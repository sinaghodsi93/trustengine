'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Building, User, Crown } from 'lucide-react'

export type DashboardMode = 'user' | 'business'

// Create context for dashboard mode
interface DashboardModeContextType {
  mode: DashboardMode
  changeMode: (mode: DashboardMode) => void
}

const DashboardModeContext = createContext<DashboardModeContextType | undefined>(undefined)

// Provider component
export function DashboardModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<DashboardMode>('user')

  useEffect(() => {
    // Load saved mode from localStorage
    const savedMode = localStorage.getItem('dashboard-mode') as DashboardMode
    if (savedMode && (savedMode === 'user' || savedMode === 'business')) {
      setMode(savedMode)
    }
  }, [])

  const changeMode = (newMode: DashboardMode) => {
    setMode(newMode)
    localStorage.setItem('dashboard-mode', newMode)
    // Navigate to main dashboard page when mode changes
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard'
    }
  }

  return (
    <DashboardModeContext.Provider value={{ mode, changeMode }}>
      {children}
    </DashboardModeContext.Provider>
  )
}

// Desktop version (default)
export function DashboardModeSwitcher() {
  const { mode, changeMode } = useDashboardMode()
  const { user } = useUser()
  const [isBusinessOwner, setIsBusinessOwner] = useState(false)
  
  useEffect(() => {
    // Check if user is a business owner from metadata or database
    // For development, allow toggle. In production, check actual metadata/database
    // const businessOwner = user?.publicMetadata?.isBusinessOwner as boolean
    // Allow toggle for development - remove this line for production
    setIsBusinessOwner(true) // TODO: Replace with actual business owner check
  }, [user])

  const toggleMode = () => {
    const newMode = mode === 'user' ? 'business' : 'user'
    changeMode(newMode)
  }

  return (
    <div className="p-2 bg-muted/30 rounded-lg border">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1">
          {mode === 'business' ? (
            <Building className="h-3 w-3 text-primary" />
          ) : (
            <User className="h-3 w-3 text-muted-foreground" />
          )}
          <span className="text-xs font-medium truncate">
            {mode === 'business' ? 'Business' : 'User'}
          </span>
        </div>
        
        <Switch
          checked={mode === 'business'}
          onCheckedChange={toggleMode}
          disabled={!isBusinessOwner}
          className="scale-75"
        />
      </div>
      
      {!isBusinessOwner && (
        <Button
          size="sm"
          variant="outline"
          className="w-full h-6 text-xs py-0"
          onClick={() => {
            window.location.href = '/dashboard/upgrade'
          }}
        >
          Upgrade
        </Button>
      )}
      
      {isBusinessOwner && mode === 'business' && (
        <div className="flex items-center gap-1 justify-center">
          <Crown className="h-3 w-3 text-yellow-500" />
          <Badge variant="outline" className="text-xs px-1 py-0">
            {(user?.publicMetadata?.subscriptionTier as string) || 'FREE'}
          </Badge>
        </div>
      )}
    </div>
  )
}

// Minimal mobile version
export function DashboardModeSwitcherMobile() {
  const { mode, changeMode } = useDashboardMode()
  const [isBusinessOwner, setIsBusinessOwner] = useState(false)
  
  useEffect(() => {
    // Allow toggle for development - replace with actual business owner check
    setIsBusinessOwner(true) // TODO: Replace with actual business owner check
  }, [])

  const toggleMode = () => {
    const newMode = mode === 'user' ? 'business' : 'user'
    changeMode(newMode)
  }

  return (
    <button
      onClick={toggleMode}
      disabled={!isBusinessOwner}
      className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted/30 border transition-colors hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed"
      title={`Switch to ${mode === 'user' ? 'business' : 'user'} mode`}
    >
      {mode === 'business' ? (
        <Building className="h-4 w-4 text-primary" />
      ) : (
        <User className="h-4 w-4 text-muted-foreground" />
      )}
      <span className="text-xs font-medium">
        {mode === 'business' ? 'Business' : 'User'}
      </span>
    </button>
  )
}

// Hook to use dashboard mode context
export function useDashboardMode() {
  const context = useContext(DashboardModeContext)
  if (context === undefined) {
    throw new Error('useDashboardMode must be used within a DashboardModeProvider')
  }
  return context
}