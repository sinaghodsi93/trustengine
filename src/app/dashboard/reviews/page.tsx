'use client'

import { useDashboardMode } from '@/components/dashboard-mode-switcher'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, MessageSquare, Building, User, Plus, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function ReviewsPage() {
  const { mode } = useDashboardMode()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
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
            <div className="flex gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Tech Solutions Inc</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline">New</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Excellent service and professional team. They delivered our project on time and exceeded expectations."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>John Doe</span>
                  <span>•</span>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline">
                  Respond
                </Button>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Digital Marketing Co</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <Badge variant="secondary">Responded</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Good results overall, but communication could be improved. The campaign metrics were solid."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>Sarah Wilson</span>
                  <span>•</span>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline" disabled>
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
            <div className="flex gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Restaurant ABC</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline">Recent</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Amazing food and great atmosphere! The service was exceptional and the prices were reasonable. Definitely coming back."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>3 days ago</span>
                  <span>•</span>
                  <span>12 found this helpful</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Tech Repair Shop</span>
                  <div className="flex items-center">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Service was okay but took longer than expected. The repair was done correctly but communication was lacking."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>1 week ago</span>
                  <span>•</span>
                  <span>5 found this helpful</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline">
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