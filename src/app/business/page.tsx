import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  DollarSign,
  Shield,
  Clock,
  BarChart3,
  MessageSquare,
  Zap,
} from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FeatureCard } from "@/components/FeatureCard";

export default function BusinessPage() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20'>
      <NavBar />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='py-32 px-0 relative overflow-hidden'>
          {/* Background gradients */}
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5' />
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl' />

          <MaxWidthWrapper>
            <div className='text-center relative z-10'>
              <h1 className='text-5xl md:text-7xl font-bold mb-8 leading-tight'>
                Grow Your Business with
                <br />
                <span className='bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent'>
                  Authentic Reviews
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed'>
                The affordable Trustpilot alternative built for indie hackers
                and growing businesses. Collect, manage, and showcase customer
                reviews at 1/3 the cost.
              </p>

              <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                <Button
                  size='lg'
                  className='cursor-pointer text-lg px-10 py-4 font-semibold shadow-lg bg-primary'
                >
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='cursor-pointer text-lg px-10 py-4 font-semibold border-2'
                >
                  See Demo
                </Button>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Features Section */}
        <section className='py-32 px-0 relative overflow-hidden'>
          {/* Background gradient */}
          <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5' />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent' />

          <MaxWidthWrapper>
            <div className='text-center mb-20 relative z-10'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Sparkles className='h-4 w-4' />
                Why Choose TrustEngine
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
                Built for Indie Hackers,
                <br />
                <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                  Not Enterprise Giants
                </span>
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                Everything you need to collect and showcase reviews without the
                enterprise pricing. Simple, affordable, and designed for
                bootstrapped businesses.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
              <FeatureCard
                icon={<DollarSign className='h-8 w-8' />}
                title='Affordable Pricing'
                description='Get all the features you need at 1/3 the cost of Trustpilot. Free plan available with no hidden fees.'
                gradient='from-green-500/10 to-emerald-500/10'
              />

              <FeatureCard
                icon={<Clock className='h-8 w-8' />}
                title='Quick Setup'
                description='Launch your review system in minutes, not hours. Simple integration with your existing website or app.'
                gradient='from-blue-500/10 to-cyan-500/10'
              />

              <FeatureCard
                icon={<Shield className='h-8 w-8' />}
                title='Trust & Security'
                description='Built-in fraud detection, verified reviews, and compliance with all major review platform standards.'
                gradient='from-purple-500/10 to-pink-500/10'
              />
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Pricing Section */}
        <section className='py-32 px-0 relative'>
          <MaxWidthWrapper>
            <div className='text-center mb-20'>
              <div className='inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6'>
                Simple Pricing
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Fair Pricing for Everyone
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                No enterprise bloat, no hidden fees. Pay for what you need,
                scale when you're ready. Start free and upgrade as you grow.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Free Plan */}
              <div className='relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-green-500/5 p-8'>
                <div className='text-center mb-8'>
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full mb-4'>
                    <span className='text-2xl'>🚀</span>
                  </div>
                  <h3 className='text-2xl font-bold mb-2 text-green-600 dark:text-green-400'>
                    Free
                  </h3>
                  <div className='text-4xl font-bold mb-2'>$0</div>
                  <p className='text-muted-foreground'>
                    Perfect to get started
                  </p>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span>Up to 50 reviews/month</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span>Basic review widget</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span>Email notifications</span>
                  </li>
                </ul>
                <Button
                  className='w-full bg-gradient-to-r from-green-500 to-green-600 text-white border-0'
                  size='lg'
                >
                  Start Free
                </Button>
              </div>

              {/* Growth Plan */}
              <div className='relative overflow-visible rounded-2xl border-2 border-primary bg-gradient-to-br from-card via-card to-primary/5 p-8 pt-12'>
                <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary text-primary-foreground px-8 py-2 rounded-full text-sm font-bold shadow-lg'>
                  ⭐ Most Popular
                </div>
                <div className='text-center mb-8'>
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/40 rounded-full mb-4'>
                    <span className='text-2xl'>⚡</span>
                  </div>
                  <h3 className='text-2xl font-bold mb-2 text-primary'>
                    Growth
                  </h3>
                  <div className='text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                    $29
                  </div>
                  <p className='text-muted-foreground'>
                    For growing businesses
                  </p>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                    <span>Up to 2,000 reviews/month</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                    <span>Custom review widgets</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                    <span>Analytics dashboard</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                    <span>Auto review requests</span>
                  </li>
                </ul>
                <Button
                  className='w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-lg'
                  size='lg'
                >
                  Start Growth Plan
                </Button>
              </div>

              {/* Pro Plan */}
              <div className='relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-purple-500/5 p-8'>
                <div className='text-center mb-8'>
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full mb-4'>
                    <span className='text-2xl'>👑</span>
                  </div>
                  <h3 className='text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400'>
                    Pro
                  </h3>
                  <div className='text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent'>
                    $59
                  </div>
                  <p className='text-muted-foreground'>
                    For established businesses
                  </p>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-purple-500 flex-shrink-0' />
                    <span>Unlimited reviews</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-purple-500 flex-shrink-0' />
                    <span>Advanced analytics</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-purple-500 flex-shrink-0' />
                    <span>API access</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-purple-500 flex-shrink-0' />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button
                  className='w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0'
                  size='lg'
                >
                  Start Pro Plan
                </Button>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* CTA Section */}
        <section className='py-32 px-0 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80' />
          <div className='absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent' />

          <MaxWidthWrapper>
            <div className='text-center relative z-10'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 text-primary-foreground'>
                Ready to Collect
                <br />
                Your First Reviews?
              </h2>
              <p className='text-xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed'>
                Join thousands of indie hackers who've ditched expensive review
                platforms. Start building trust with your customers today,
                without breaking the bank.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='cursor-pointer text-lg px-8 py-4 font-semibold shadow-lg'
                >
                  Start Free Today
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>

      <Footer />
    </div>
  );
}
