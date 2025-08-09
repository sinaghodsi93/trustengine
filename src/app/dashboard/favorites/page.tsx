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
import { Heart, Star, ExternalLink, MessageSquare, Trash2 } from "lucide-react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    {
      id: "1",
      businessName: "DevTools Pro",
      description: "Advanced developer productivity suite",
      website: "https://devtools.pro",
      category: "Developer Tools",
      trustScore: 4.8,
      totalReviews: 234,
      myReview: {
        rating: 5,
        title: "Excellent tool for team collaboration",
        createdAt: "2024-01-15",
      },
    },
    {
      id: "2",
      businessName: "DesignFlow",
      description: "Creative design and prototyping platform",
      website: "https://designflow.com",
      category: "Design & Creative",
      trustScore: 4.6,
      totalReviews: 156,
      myReview: null,
    },
    {
      id: "3",
      businessName: "TaskMaster",
      description: "Simple and powerful task management",
      website: "https://taskmaster.com",
      category: "Productivity",
      trustScore: 4.4,
      totalReviews: 89,
      myReview: {
        rating: 4,
        title: "Great for personal productivity",
        createdAt: "2024-02-20",
      },
    },
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Favorite Businesses
          </h1>
          <p className='text-muted-foreground mt-2'>
            Businesses you&apos;ve marked as favorites for easy access
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Badge variant='secondary' className='flex items-center gap-1'>
            <Heart className='h-3 w-3' />
            {favorites.length} Favorites
          </Badge>
        </div>
      </div>

      {favorites.length === 0 ? (
        <Card className='mt-4 text-center py-12'>
          <CardContent>
            <Heart className='h-16 w-16 mx-auto text-muted-foreground mb-4' />
            <h3 className='text-xl font-semibold mb-2'>No favorites yet</h3>
            <p className='text-muted-foreground mb-6'>
              Start exploring businesses and mark your favorites to see them
              here
            </p>
            <Button>Discover Businesses</Button>
          </CardContent>
        </Card>
      ) : (
        <div className='mt-4 space-y-4'>
          {favorites.map((favorite) => (
            <Card
              key={favorite.id}
              className='hover:shadow-md transition-shadow'
            >
              <CardContent className='p-4 sm:p-6'>
                <div className='flex flex-col sm:flex-row items-start justify-between gap-4'>
                  <div className='flex flex-col sm:flex-row items-start gap-4 flex-1 min-w-0'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground font-semibold text-lg sm:text-xl flex-shrink-0'>
                      {favorite.businessName.charAt(0)}
                    </div>

                    <div className='flex-1 min-w-0'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2'>
                        <h3 className='text-lg sm:text-xl font-semibold truncate'>
                          {favorite.businessName}
                        </h3>
                        <Badge variant='outline' className='text-xs w-fit'>
                          {favorite.category}
                        </Badge>
                      </div>

                      <p className='text-muted-foreground mb-3'>
                        {favorite.description}
                      </p>

                      <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4'>
                        <div className='flex items-center gap-1'>
                          <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                          <span className='font-medium'>
                            {favorite.trustScore}
                          </span>
                          <span className='text-sm text-muted-foreground'>
                            ({favorite.totalReviews} reviews)
                          </span>
                        </div>

                        {favorite.myReview && (
                          <div className='flex items-center gap-1'>
                            <MessageSquare className='h-4 w-4 text-muted-foreground' />
                            <span className='text-sm text-muted-foreground'>
                              You reviewed: {favorite.myReview.rating}/5 stars
                            </span>
                          </div>
                        )}
                      </div>

                      {favorite.myReview && (
                        <div className='bg-muted/50 rounded-lg p-3 mb-4'>
                          <div className='flex items-center gap-1 mb-1'>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-3 w-3 ${
                                  star <= favorite.myReview!.rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                            <span className='text-xs text-muted-foreground ml-2'>
                              {new Date(
                                favorite.myReview.createdAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <p className='text-sm font-medium'>
                            {favorite.myReview.title}
                          </p>
                        </div>
                      )}

                      <div className='flex flex-wrap gap-2'>
                        <Button variant='outline' size='sm' asChild className='min-w-0'>
                          <a
                            href={favorite.website}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-3 w-3 mr-1' />
                            <span className='hidden xs:inline'>Visit Website</span>
                            <span className='xs:hidden'>Visit</span>
                          </a>
                        </Button>

                        {!favorite.myReview && (
                          <Button size='sm' className='min-w-0'>
                            <MessageSquare className='h-3 w-3 mr-1' />
                            <span className='hidden xs:inline'>Write Review</span>
                            <span className='xs:hidden'>Review</span>
                          </Button>
                        )}

                        {favorite.myReview && (
                          <Button variant='outline' size='sm' className='min-w-0'>
                            <MessageSquare className='h-3 w-3 mr-1' />
                            <span className='hidden xs:inline'>Edit Review</span>
                            <span className='xs:hidden'>Edit</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => removeFavorite(favorite.id)}
                    className='text-muted-foreground hover:text-destructive flex-shrink-0 self-start sm:self-center'
                  >
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <Card className='mt-4'>
        <CardHeader>
          <CardTitle className='text-lg'>Quick Actions</CardTitle>
          <CardDescription>
            Manage your favorite businesses and reviews
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-3'>
            <Button variant='outline' className='min-w-0'>
              <span className='hidden sm:inline'>Discover New Businesses</span>
              <span className='sm:hidden'>Discover</span>
            </Button>
            <Button variant='outline' className='min-w-0'>
              <span className='hidden sm:inline'>Export Favorites</span>
              <span className='sm:hidden'>Export</span>
            </Button>
            <Button variant='outline' className='min-w-0'>
              <span className='hidden sm:inline'>My Review History</span>
              <span className='sm:hidden'>Reviews</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
