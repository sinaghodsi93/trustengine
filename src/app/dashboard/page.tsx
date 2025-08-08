"use client";

import { useUser } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDashboardMode } from "@/components/dashboard-mode-switcher";
import {
  User,
  BarChart3,
  Building,
  Star,
  MessageSquare,
  Send,
  Heart,
  TrendingUp,
  Eye,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useUser();
  const { mode } = useDashboardMode();

  if (mode === "business") {
    return <BusinessDashboard user={user} />;
  }

  return <UserDashboard user={user} />;
}

function UserDashboard({ user }: { user: any }) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <div className='space-y-6'>
      {/* Welcome Section */}
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Welcome back, {user?.firstName || "User"}!
        </h1>
        <p className='text-muted-foreground'>
          Discover and review amazing indie businesses
        </p>
      </div>

      {/* User Stats Cards */}
      <div className='mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>My Reviews</CardTitle>
            <Star className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12</div>
            <p className='text-xs text-muted-foreground'>+2 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Favorites</CardTitle>
            <Heart className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>8</div>
            <p className='text-xs text-muted-foreground'>Saved businesses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Helpful Votes</CardTitle>
            <TrendingUp className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>45</div>
            <p className='text-xs text-muted-foreground'>
              Reviews found helpful
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Profile Views</CardTitle>
            <Eye className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>156</div>
            <p className='text-xs text-muted-foreground'>This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className='mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
            <CardDescription>Your latest review activity</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Reviewed &quot;DevTools Pro&quot; - 5 stars
                </p>
                <p className='text-xs text-muted-foreground'>2 hours ago</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Added &quot;DesignFlow&quot; to favorites
                </p>
                <p className='text-xs text-muted-foreground'>1 day ago</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Voted helpful on TaskMaster review
                </p>
                <p className='text-xs text-muted-foreground'>3 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Things you can do</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <Button className='w-full justify-start' variant='outline'>
              <Plus className='mr-2 h-4 w-4' />
              Write a Review
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <Heart className='mr-2 h-4 w-4' />
              Browse Businesses
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <Star className='mr-2 h-4 w-4' />
              My Reviews
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <User className='mr-2 h-4 w-4' />
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BusinessDashboard({ user }: { user: any }) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <div className='space-y-6'>
      {/* Welcome Section */}
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>
          Business Dashboard - {user?.firstName || "Business Owner"}
        </h1>
        <p className='text-muted-foreground'>
          Manage your businesses and track their performance
        </p>
      </div>

      {/* Business Stats Cards */}
      <div className='mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>My Businesses</CardTitle>
            <Building className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3</div>
            <p className='text-xs text-muted-foreground'>Active businesses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Reviews</CardTitle>
            <MessageSquare className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>127</div>
            <p className='text-xs text-muted-foreground'>+15 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Avg Trust Score
            </CardTitle>
            <Star className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>4.6</div>
            <p className='text-xs text-muted-foreground'>+0.2 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Invitations Sent
            </CardTitle>
            <Send className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>89</div>
            <p className='text-xs text-muted-foreground'>68% response rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className='mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest business updates and reviews
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  New 5-star review for &quot;TechFlow SaaS&quot;
                </p>
                <p className='text-xs text-muted-foreground'>1 hour ago</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Review invitation opened by customer
                </p>
                <p className='text-xs text-muted-foreground'>3 hours ago</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Business profile updated for &quot;EcoMarket&quot;
                </p>
                <p className='text-xs text-muted-foreground'>1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Business management tools</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <Button className='w-full justify-start' variant='outline'>
              <Plus className='mr-2 h-4 w-4' />
              Add New Business
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <Send className='mr-2 h-4 w-4' />
              Send Invitations
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <BarChart3 className='mr-2 h-4 w-4' />
              View Analytics
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <Building className='mr-2 h-4 w-4' />
              Manage Businesses
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
