'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Check, 
  Crown, 
  Building, 
  BarChart3, 
  Send, 
  Users, 
  Shield,
  Zap,
  Star,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function UpgradePage() {
  const plans = [
    {
      name: 'FREE',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '1 business profile',
        '50 review invitations/month',
        'Basic analytics',
        'Email support',
        'Public reviews'
      ],
      limitations: [
        'Limited customization',
        'Basic reporting only',
        'No priority support'
      ],
      current: true,
      buttonText: 'Current Plan',
      popular: false
    },
    {
      name: 'GROWTH',
      price: '$19',
      period: '/month',
      description: 'Scale your review collection',
      features: [
        '3 business profiles',
        '500 review invitations/month',
        'Advanced analytics & insights',
        'Custom review widgets',
        'Priority email support',
        'Review response templates',
        'Export data (CSV)',
        'Custom branding'
      ],
      limitations: [],
      current: false,
      buttonText: 'Upgrade to Growth',
      popular: true
    },
    {
      name: 'PRO',
      price: '$49',
      period: '/month',
      description: 'For serious businesses',
      features: [
        'Unlimited business profiles',
        'Unlimited review invitations',
        'Advanced analytics & reporting',
        'Custom review widgets',
        'Phone & email support',
        'Review management tools',
        'API access',
        'White-label solutions',
        'Custom integrations',
        'Dedicated account manager'
      ],
      limitations: [],
      current: false,
      buttonText: 'Upgrade to Pro',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: Building,
      title: 'Multiple Business Profiles',
      description: 'Manage reviews for all your businesses in one place'
    },
    {
      icon: Send,
      title: 'Unlimited Invitations',
      description: 'Send review requests to all your customers without limits'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into review performance and customer sentiment'
    },
    {
      icon: Shield,
      title: 'Priority Support',
      description: 'Get help when you need it with priority customer support'
    },
    {
      icon: Zap,
      title: 'Custom Integrations',
      description: 'Connect with your existing tools and workflows'
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Advanced tools to manage and respond to reviews efficiently'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upgrade Your Plan</h1>
          <p className="text-muted-foreground mt-2">
            Unlock powerful features to grow your business with more reviews
          </p>
        </div>
      </div>

      {/* Why Upgrade */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            Why Upgrade?
          </CardTitle>
          <CardDescription>
            Take your review management to the next level with these powerful features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Plans */}
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''} ${plan.current ? 'bg-muted/30' : ''}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm text-muted-foreground font-normal">
                  {plan.period}
                </span>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full"
                variant={plan.current ? 'secondary' : plan.popular ? 'default' : 'outline'}
                disabled={plan.current}
              >
                {plan.current && <Crown className="h-4 w-4 mr-2" />}
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can cancel your subscription at any time. You&apos;ll continue to have access to premium features until the end of your current billing period.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
            <p className="text-sm text-muted-foreground">
              We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for your convenience.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Do you offer refunds?</h3>
            <p className="text-sm text-muted-foreground">
              We offer a 30-day money-back guarantee. If you&apos;re not satisfied with our service within the first 30 days, we&apos;ll provide a full refund.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Can I change plans later?</h3>
            <p className="text-sm text-muted-foreground">
              Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate your billing accordingly.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card className="text-center">
        <CardContent className="pt-6">
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-4">
            Our team is here to help you find the perfect plan for your business needs.
          </p>
          <Button variant="outline">
            Contact Sales Team
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}