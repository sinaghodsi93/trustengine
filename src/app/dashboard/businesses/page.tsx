"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Plus,
  Star,
  Users,
  TrendingUp,
  Settings,
  ExternalLink,
} from "lucide-react";

export default function BusinessesPage() {
  const [businesses] = useState([
    {
      id: "1",
      name: "TechFlow SaaS",
      description: "Project management tool for remote teams",
      website: "https://techflow.com",
      logo: null,
      trustScore: 4.5,
      totalReviews: 127,
      isVerified: true,
      categories: ["SaaS & Software", "Productivity"],
      monthlyViews: 2450,
    },
    {
      id: "2",
      name: "EcoMarket",
      description: "Sustainable products marketplace",
      website: "https://ecomarket.com",
      logo: null,
      trustScore: 4.2,
      totalReviews: 89,
      isVerified: false,
      categories: ["E-commerce"],
      monthlyViews: 1200,
    },
  ]);

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>My Businesses</h1>
          <p className='text-muted-foreground mt-2'>
            Manage your business profiles and track their performance
          </p>
        </div>
        <Button className='flex items-center gap-2'>
          <Plus className='h-4 w-4' />
          Add Business
        </Button>
      </div>

      {businesses.length === 0 ? (
        <Card className='mt-4 text-center py-12'>
          <CardContent>
            <Building className='h-16 w-16 mx-auto text-muted-foreground mb-4' />
            <h3 className='text-xl font-semibold mb-2'>No businesses yet</h3>
            <p className='text-muted-foreground mb-6'>
              Create your first business profile to start collecting reviews
            </p>
            <Button className='flex items-center gap-2'>
              <Plus className='h-4 w-4' />
              Create Your First Business
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className='mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {businesses.map((business) => (
            <Card
              key={business.id}
              className='hover:shadow-md transition-shadow'
            >
              <CardHeader className='pb-3'>
                <div className='flex items-start justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground font-semibold text-lg'>
                      {business.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className='text-lg leading-tight'>
                        {business.name}
                      </CardTitle>
                      <div className='flex items-center gap-2 mt-1'>
                        {business.isVerified && (
                          <Badge variant='secondary' className='text-xs'>
                            Verified
                          </Badge>
                        )}
                        <div className='flex items-center gap-1'>
                          <Star className='h-3 w-3 text-yellow-500 fill-yellow-500' />
                          <span className='text-sm font-medium'>
                            {business.trustScore}
                          </span>
                          <span className='text-xs text-muted-foreground'>
                            ({business.totalReviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button size='icon' variant='ghost'>
                    <Settings className='h-4 w-4' />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className='space-y-4'>
                <CardDescription>{business.description}</CardDescription>

                <div className='flex flex-wrap gap-1'>
                  {business.categories.map((category) => (
                    <Badge key={category} variant='outline' className='text-xs'>
                      {category}
                    </Badge>
                  ))}
                </div>

                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div className='flex items-center gap-2'>
                    <Users className='h-4 w-4 text-muted-foreground' />
                    <span className='text-muted-foreground'>Monthly Views</span>
                  </div>
                  <div className='font-medium'>
                    {business.monthlyViews.toLocaleString()}
                  </div>

                  <div className='flex items-center gap-2'>
                    <TrendingUp className='h-4 w-4 text-muted-foreground' />
                    <span className='text-muted-foreground'>Trust Score</span>
                  </div>
                  <div className='font-medium'>{business.trustScore}/5.0</div>
                </div>

                <div className='flex gap-2 pt-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex-1'
                    asChild
                  >
                    <a
                      href={business.website}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink className='h-3 w-3 mr-1' />
                      Visit
                    </a>
                  </Button>
                  <Button size='sm' className='flex-1'>
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      <div className='grid gap-4 md:grid-cols-4'>
        <Card>
          <CardContent className='p-4'>
            <div className='flex items-center gap-2'>
              <Building className='h-4 w-4 text-muted-foreground' />
              <span className='text-sm text-muted-foreground'>
                Total Businesses
              </span>
            </div>
            <p className='text-2xl font-bold'>{businesses.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4'>
            <div className='flex items-center gap-2'>
              <Star className='h-4 w-4 text-muted-foreground' />
              <span className='text-sm text-muted-foreground'>
                Total Reviews
              </span>
            </div>
            <p className='text-2xl font-bold'>
              {businesses.reduce((sum, b) => sum + b.totalReviews, 0)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='h-4 w-4 text-muted-foreground' />
              <span className='text-sm text-muted-foreground'>
                Avg. Trust Score
              </span>
            </div>
            <p className='text-2xl font-bold'>
              {(
                businesses.reduce((sum, b) => sum + b.trustScore, 0) /
                businesses.length
              ).toFixed(1)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4'>
            <div className='flex items-center gap-2'>
              <Users className='h-4 w-4 text-muted-foreground' />
              <span className='text-sm text-muted-foreground'>
                Monthly Views
              </span>
            </div>
            <p className='text-2xl font-bold'>
              {businesses
                .reduce((sum, b) => sum + b.monthlyViews, 0)
                .toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
