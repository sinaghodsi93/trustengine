import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Search,
  Shield,
  Users,
  TrendingUp,
  Star,
  Eye,
  DollarSign,
  Clock,
  MessageSquare,
  Heart,
  Award,
  Gift,
} from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20'>
      <NavBar />

      <main className='flex-1'>
        {/* Hero Section */}
        <HeroSection />

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
                Reviews You Can
                <br />
                <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                  Actually Trust
                </span>
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                Find authentic reviews from real customers. No fake reviews, no paid promotions - 
                just honest feedback to help you make smarter purchasing decisions.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
              <FeatureCard
                icon={<Search className='h-8 w-8' />}
                title='Easy Discovery'
                description='Find products and services with confidence. Search through thousands of verified reviews from real customers.'
                gradient='from-green-500/10 to-emerald-500/10'
              />

              <FeatureCard
                icon={<Eye className='h-8 w-8' />}
                title='Transparent Reviews'
                description='See the full picture with detailed reviews, ratings, and photos from verified purchasers only.'
                gradient='from-blue-500/10 to-cyan-500/10'
              />

              <FeatureCard
                icon={<Shield className='h-8 w-8' />}
                title='Verified & Trusted'
                description='Every review is verified through our fraud detection system. No fake reviews, no paid promotions.'
                gradient='from-purple-500/10 to-pink-500/10'
              />
            </div>
          </MaxWidthWrapper>
        </section>

        {/* For Reviewers Section */}
        <section className='py-32 px-0 relative overflow-hidden bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10'>
          <MaxWidthWrapper>
            <div className='text-center mb-20'>
              <div className='inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <MessageSquare className='h-4 w-4' />
                Always Free for Reviewers
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Share Your Voice,
                <br />
                <span className='bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
                  Help Others Decide
                </span>
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                Writing reviews is completely free and helps build a trustworthy community. 
                Your honest feedback makes a real difference in helping others make informed decisions.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <FeatureCard
                icon={<Gift className='h-8 w-8' />}
                title='100% Free Forever'
                description='No hidden fees, no subscription required. Write unlimited reviews and share your experiences at no cost.'
                gradient='from-green-500/10 to-emerald-500/10'
              />

              <FeatureCard
                icon={<Users className='h-8 w-8' />}
                title='Build Your Reputation'
                description='Earn reviewer badges and recognition as your helpful reviews gain trust from the community.'
                gradient='from-blue-500/10 to-cyan-500/10'
              />

              <FeatureCard
                icon={<Heart className='h-8 w-8' />}
                title='Make an Impact'
                description='Your reviews help other customers make confident purchasing decisions and support better businesses.'
                gradient='from-purple-500/10 to-pink-500/10'
              />
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Community Impact Section */}
        <section className='py-32 px-0 relative'>
          <MaxWidthWrapper>
            <div className='text-center mb-20'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Award className='h-4 w-4' />
                Community Benefits
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Your Reviews Create
                <br />
                <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                  Real Change
                </span>
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                Every review you write contributes to a more transparent marketplace. 
                See how your voice helps create positive change for everyone.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-8'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center'>
                    <TrendingUp className='h-6 w-6 text-green-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>Drive Business Improvement</h3>
                    <p className='text-muted-foreground'>Your feedback motivates businesses to improve their products and services, creating better experiences for everyone.</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center'>
                    <Shield className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>Protect Other Shoppers</h3>
                    <p className='text-muted-foreground'>Warn others about poor experiences and highlight exceptional service, helping the community make safer choices.</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center'>
                    <Star className='h-6 w-6 text-purple-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>Earn Recognition</h3>
                    <p className='text-muted-foreground'>Get recognized as a trusted reviewer with badges, featured reviews, and special community status.</p>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-8 border'>
                <div className='text-center mb-6'>
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full mb-4'>
                    <Users className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold mb-2'>Join Our Community</h3>
                  <p className='text-muted-foreground'>Become part of a growing network of trusted reviewers</p>
                </div>
                
                <div className='space-y-4 mb-6'>
                  <div className='flex items-center justify-between py-2 border-b border-border/50'>
                    <span className='text-sm text-muted-foreground'>Active Reviewers</span>
                    <span className='font-semibold'>50,000+</span>
                  </div>
                  <div className='flex items-center justify-between py-2 border-b border-border/50'>
                    <span className='text-sm text-muted-foreground'>Reviews Written</span>
                    <span className='font-semibold'>2.5M+</span>
                  </div>
                  <div className='flex items-center justify-between py-2'>
                    <span className='text-sm text-muted-foreground'>Businesses Improved</span>
                    <span className='font-semibold'>15,000+</span>
                  </div>
                </div>

                <Button className='w-full bg-gradient-to-r from-primary to-primary/80 shadow-none'>
                  Start Writing Reviews
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Free Access Section */}
        <section className='py-24 px-0 relative bg-muted/5'>
          <MaxWidthWrapper>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <CheckCircle className='h-4 w-4' />
                Completely Free Platform
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Everything You Need, Always Free
              </h2>
              <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Access all platform features without subscriptions, hidden fees, or premium tiers.
              </p>
            </div>

            <div className='max-w-6xl mx-auto'>
              <div className='bg-card border rounded-lg p-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                  {/* Pricing Info */}
                  <div className='text-center lg:text-left'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4'>
                      <CheckCircle className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>TrustEngine</h3>
                    <div className='text-3xl font-bold mb-2'>Free</div>
                    <p className='text-muted-foreground mb-6'>
                      Forever and always
                    </p>
                    <Button size='lg' className='w-full lg:w-auto'>
                      Get Started
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </div>

                  {/* Features */}
                  <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-4'>
                      <h4 className='font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3'>
                        Core Features
                      </h4>
                      <div className='space-y-3'>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Browse all reviews</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Write unlimited reviews</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Advanced search & filters</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Upload photos with reviews</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className='space-y-4'>
                      <h4 className='font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3'>
                        Community Benefits
                      </h4>
                      <div className='space-y-3'>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Join reviewer community</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Earn reviewer badges</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>Save favorite businesses</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                          <span>No ads, no spam</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                Ready to Make Smarter
                <br />
                Purchase Decisions?
              </h2>
              <p className='text-xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed'>
                Join thousands of smart shoppers who rely on verified reviews 
                to make confident purchases. Start exploring authentic feedback 
                from real customers today.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='cursor-pointer text-lg px-8 py-4 font-semibold'
                >
                  Start Exploring
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
