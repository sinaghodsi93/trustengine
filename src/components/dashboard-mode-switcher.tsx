'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Building, User, Crown } from 'lucide-react'

export type DashboardMode = 'user' | 'business'

interface DashboardModeSwitcherProps {
  mode: DashboardMode
  onModeChangeAction: (mode: DashboardMode) => void
}

export function DashboardModeSwitcher({ mode, onModeChangeAction }: DashboardModeSwitcherProps) {
  const { user } = useUser()
  const [isBusinessOwner, setIsBusinessOwner] = useState(false)
  
  useEffect(() => {
    // Check if user is a business owner from metadata or database
    // For now, we'll check if they have business owner metadata
    const businessOwner = user?.publicMetadata?.isBusinessOwner as boolean
    setIsBusinessOwner(businessOwner || false)
  }, [user])

  const toggleMode = () => {
    const newMode = mode === 'user' ? 'business' : 'user'
    onModeChangeAction(newMode)
    
    // Store preference in localStorage
    localStorage.setItem('dashboard-mode', newMode)
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

// Hook to manage dashboard mode state
export function useDashboardMode() {
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
  }

  return { mode, changeMode }
}