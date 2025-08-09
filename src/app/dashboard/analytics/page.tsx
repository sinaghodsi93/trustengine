"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users, 
  Star, 
  MessageSquare, 
  Download
} from "lucide-react";

interface ActivityItem {
  type: "review" | "view";
  business: string;
  rating?: number;
  count?: number;
  time: string;
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d");

  const analytics = {
    overview: {
      totalViews: 12450,
      uniqueVisitors: 8920,
      totalReviews: 127,
      averageRating: 4.5,
      trustScore: 87,
      conversionRate: 3.2,
    },
    trends: {
      views: { value: 12450, change: 15.3, isPositive: true },
      visitors: { value: 8920, change: 8.7, isPositive: true },
      reviews: { value: 127, change: -2.1, isPositive: false },
      rating: { value: 4.5, change: 0.2, isPositive: true },
    },
    topBusinesses: [
      { name: "TechFlow SaaS", views: 5420, reviews: 67, rating: 4.6, growth: 23.5 },
      { name: "EcoMarket", views: 3240, reviews: 34, rating: 4.3, growth: 12.8 },
      { name: "Digital Solutions", views: 2890, reviews: 26, rating: 4.7, growth: -5.2 },
    ],
    recentActivity: [
      { type: "review" as const, business: "TechFlow SaaS", rating: 5, time: "2 hours ago" },
      { type: "view" as const, business: "EcoMarket", count: 45, time: "4 hours ago" },
      { type: "review" as const, business: "Digital Solutions", rating: 4, time: "6 hours ago" },
      { type: "view" as const, business: "TechFlow SaaS", count: 78, time: "8 hours ago" },
    ] as ActivityItem[]
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track performance and insights across all your businesses
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {["7d", "30d", "90d"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="px-3"
              >
                {range}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.overview.totalViews.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analytics.trends.views.change}%</span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.overview.uniqueVisitors.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analytics.trends.visitors.change}%</span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.overview.totalReviews}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingDown className="h-3 w-3 text-red-500" />
              <span className="text-red-500">{analytics.trends.reviews.change}%</span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.overview.averageRating}</div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analytics.trends.rating.change}</span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Performance Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Views and visitor trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Integration with charting library needed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Businesses */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Businesses</CardTitle>
            <CardDescription>Your best performing business profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topBusinesses.map((business, index) => (
                <div key={business.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{business.name}</div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{business.views.toLocaleString()} views</span>
                        <span>{business.reviews} reviews</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <span>{business.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {business.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={business.growth > 0 ? "text-green-500" : "text-red-500"}>
                      {business.growth > 0 ? "+" : ""}{business.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Trust Score</CardTitle>
            <CardDescription>Overall trust rating across all businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{analytics.overview.trustScore}/100</div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" 
                style={{ width: `${analytics.overview.trustScore}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on review quality, response rate, and customer satisfaction
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversion Rate</CardTitle>
            <CardDescription>Views that result in customer actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{analytics.overview.conversionRate}%</div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" 
                style={{ width: `${analytics.overview.conversionRate * 10}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Percentage of visitors who leave reviews or contact info
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Response Time</CardTitle>
            <CardDescription>Average time to respond to reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">2.4h</div>
            <Badge variant="secondary" className="mb-2">Excellent</Badge>
            <p className="text-xs text-muted-foreground">
              Industry average: 12-24 hours
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest interactions across your business profiles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analytics.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                  {activity.type === "review" ? (
                    <MessageSquare className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{activity.business}</span>
                    {activity.type === "review" ? (
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-muted-foreground">received a</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < activity.rating! 
                                  ? "text-yellow-500 fill-yellow-500" 
                                  : "text-gray-300"
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">review</span>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        had {activity.count} new views
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}