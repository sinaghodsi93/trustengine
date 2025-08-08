'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Send, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Plus,
  MoreHorizontal,
  Eye
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function InvitationsPage() {
  const [invitations] = useState([
    {
      id: '1',
      businessName: 'TechFlow SaaS',
      email: 'customer@example.com',
      customerName: 'John Smith',
      orderReference: 'ORDER-2024-001',
      status: 'sent',
      sentAt: '2024-08-07T10:30:00Z',
      expiresAt: '2024-08-14T10:30:00Z',
      opened: false,
      token: 'inv_abc123'
    },
    {
      id: '2',
      businessName: 'TechFlow SaaS',
      email: 'customer2@example.com',
      customerName: 'Sarah Johnson',
      orderReference: 'ORDER-2024-002',
      status: 'opened',
      sentAt: '2024-08-06T14:15:00Z',
      expiresAt: '2024-08-13T14:15:00Z',
      opened: true,
      token: 'inv_def456'
    },
    {
      id: '3',
      businessName: 'EcoMarket',
      email: 'buyer@test.com',
      customerName: 'Mike Davis',
      orderReference: 'ORD-2024-15',
      status: 'responded',
      sentAt: '2024-08-05T09:00:00Z',
      expiresAt: '2024-08-12T09:00:00Z',
      opened: true,
      respondedAt: '2024-08-06T11:30:00Z',
      token: 'inv_ghi789'
    },
    {
      id: '4',
      businessName: 'TechFlow SaaS',
      email: 'old@customer.com',
      customerName: 'Lisa Wilson',
      orderReference: 'ORDER-2024-000',
      status: 'expired',
      sentAt: '2024-07-25T16:00:00Z',
      expiresAt: '2024-08-01T16:00:00Z',
      opened: false,
      token: 'inv_jkl012'
    }
  ])

  const [newInvitation, setNewInvitation] = useState({
    email: '',
    customerName: '',
    orderReference: '',
    businessId: 'techflow', // This would come from business selection
    message: ''
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'opened': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'responded': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <Send className="h-3 w-3" />
      case 'opened': return <Eye className="h-3 w-3" />
      case 'responded': return <CheckCircle className="h-3 w-3" />
      case 'expired': return <AlertCircle className="h-3 w-3" />
      default: return <Clock className="h-3 w-3" />
    }
  }

  const stats = {
    total: invitations.length,
    sent: invitations.filter(inv => inv.status === 'sent').length,
    opened: invitations.filter(inv => inv.opened).length,
    responded: invitations.filter(inv => inv.status === 'responded').length,
    responseRate: Math.round((invitations.filter(inv => inv.status === 'responded').length / invitations.length) * 100)
  }

  const copyInvitationLink = (token: string) => {
    const link = `${window.location.origin}/review/${token}`
    navigator.clipboard.writeText(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Review Invitations</h1>
          <p className="text-muted-foreground mt-2">
            Send personalized review requests to your customers
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Total Sent</span>
            </div>
            <p className="text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Opened</span>
            </div>
            <p className="text-2xl font-bold">{stats.opened}</p>
            <p className="text-xs text-muted-foreground">
              {Math.round((stats.opened / stats.total) * 100)}% open rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Responded</span>
            </div>
            <p className="text-2xl font-bold">{stats.responded}</p>
            <p className="text-xs text-muted-foreground">
              {stats.responseRate}% response rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Pending</span>
            </div>
            <p className="text-2xl font-bold">{stats.sent}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Send New Invitation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Send New Invitation
            </CardTitle>
            <CardDescription>
              Request reviews from your customers with personalized invitations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName">Customer Name</Label>
                <Input
                  id="customerName"
                  placeholder="John Smith"
                  value={newInvitation.customerName}
                  onChange={(e) => setNewInvitation({...newInvitation, customerName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="customer@example.com"
                  value={newInvitation.email}
                  onChange={(e) => setNewInvitation({...newInvitation, email: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="orderReference">Order/Reference ID (Optional)</Label>
              <Input
                id="orderReference"
                placeholder="ORDER-2024-001"
                value={newInvitation.orderReference}
                onChange={(e) => setNewInvitation({...newInvitation, orderReference: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="message">Personal Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Thank you for your purchase! We'd love to hear about your experience..."
                value={newInvitation.message}
                onChange={(e) => setNewInvitation({...newInvitation, message: e.target.value})}
                rows={3}
              />
            </div>
            
            <Button className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Invitation
            </Button>
          </CardContent>
        </Card>

        {/* Recent Invitations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Invitations</CardTitle>
            <CardDescription>
              Track the status of your review invitations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {invitations.slice(0, 5).map((invitation) => (
                <div key={invitation.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm truncate">
                        {invitation.customerName}
                      </span>
                      <Badge className={`text-xs ${getStatusColor(invitation.status)}`}>
                        {getStatusIcon(invitation.status)}
                        <span className="ml-1 capitalize">{invitation.status}</span>
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {invitation.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {invitation.orderReference && `Order: ${invitation.orderReference} • `}
                      Sent {new Date(invitation.sentAt).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => copyInvitationLink(invitation.token)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Link
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="h-4 w-4 mr-2" />
                        Resend
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Invitations Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Invitations</CardTitle>
          <CardDescription>
            Complete history of your review invitations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Business</th>
                    <th className="text-left p-3">Order</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Sent</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invitations.map((invitation) => (
                    <tr key={invitation.id} className="border-b hover:bg-muted/50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{invitation.customerName}</div>
                          <div className="text-muted-foreground text-xs">{invitation.email}</div>
                        </div>
                      </td>
                      <td className="p-3">{invitation.businessName}</td>
                      <td className="p-3">
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {invitation.orderReference || '—'}
                        </code>
                      </td>
                      <td className="p-3">
                        <Badge className={`text-xs ${getStatusColor(invitation.status)}`}>
                          {getStatusIcon(invitation.status)}
                          <span className="ml-1 capitalize">{invitation.status}</span>
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="text-xs">
                          {new Date(invitation.sentAt).toLocaleDateString()}
                        </div>
                        {invitation.status === 'responded' && invitation.respondedAt && (
                          <div className="text-xs text-muted-foreground">
                            Responded {new Date(invitation.respondedAt).toLocaleDateString()}
                          </div>
                        )}
                      </td>
                      <td className="p-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => copyInvitationLink(invitation.token)}>
                              <Copy className="h-4 w-4 mr-2" />
                              Copy Link
                            </DropdownMenuItem>
                            {invitation.status !== 'responded' && (
                              <DropdownMenuItem>
                                <Send className="h-4 w-4 mr-2" />
                                Resend
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}