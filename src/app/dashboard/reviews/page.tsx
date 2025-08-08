'use client'

import { useDashboardMode } from '@/components/dashboard-mode-switcher'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, MessageSquare, Building, User, Plus, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function ReviewsPage() {
  const { mode } = useDashboardMode()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {mode === 'business' ? 'Business Reviews' : 'My Reviews'}
          </h1>
          <p className="text-muted-foreground">
            {mode === 'business' 
              ? 'Manage and respond to customer reviews for your businesses'
              : 'Reviews you\'ve written and feedback you\'ve received'
            }
          </p>
        </div>
        
        <div className="flex-shrink-0">
          {mode === 'business' ? (
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Respond to Reviews
            </Button>
          ) : (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Write Review
            </Button>
          )}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <Input
            placeholder={mode === 'business' ? 'Search business reviews...' : 'Search your reviews...'}
            className="max-w-md"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {mode === 'business' ? <BusinessReviews /> : <UserReviews />}
    </div>
  )
}

function BusinessReviews() {
  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">
              +0.2 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Responses</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
          <CardDescription>Latest customer feedback for your businesses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Sample Review Items */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="font-medium truncate">Tech Solutions Inc</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline">New</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2 break-words">
                  "Excellent service and professional team. They delivered our project on time and exceeded expectations."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">John Doe</span>
                  <span>•</span>
                  <span className="whitespace-nowrap">2 hours ago</span>
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 sm:w-auto w-full">
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  Respond
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="font-medium truncate">Digital Marketing Co</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <Badge variant="secondary">Responded</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2 break-words">
                  "Good results overall, but communication could be improved. The campaign metrics were solid."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">Sarah Wilson</span>
                  <span>•</span>
                  <span className="whitespace-nowrap">1 day ago</span>
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 sm:w-auto w-full">
                <Button size="sm" variant="outline" disabled className="w-full sm:w-auto">
                  Responded
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UserReviews() {
  return (
    <div className="space-y-6">
      {/* User Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reviews Written</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              +3 this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating Given</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <p className="text-xs text-muted-foreground">
              Your rating tendency
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Helpful Votes</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Others found helpful
            </p>
          </CardContent>
        </Card>
      </div>

      {/* User Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Your Reviews</CardTitle>
          <CardDescription>Reviews you've written for businesses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Sample User Review Items */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="font-medium truncate">Restaurant ABC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline">Recent</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2 break-words">
                  "Amazing food and great atmosphere! The service was exceptional and the prices were reasonable. Definitely coming back."
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="whitespace-nowrap">3 days ago</span>
                  <span>•</span>
                  <span className="whitespace-nowrap">12 found this helpful</span>
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 sm:w-auto w-full">
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  Edit
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="font-medium truncate">Tech Repair Shop</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2 break-words">
                  "Service was okay but took longer than expected. The repair was done correctly but communication was lacking."
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="whitespace-nowrap">1 week ago</span>
                  <span>•</span>
                  <span className="whitespace-nowrap">5 found this helpful</span>
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 sm:w-auto w-full">
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}