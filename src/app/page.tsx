import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Sparkles,
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
                Why Choose Us
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
                Exceptional Results Through
                <br />
                <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                  Innovation & Expertise
                </span>
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                We deliver cutting-edge solutions that transform your business
                and drive sustainable growth in the digital landscape.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
              <FeatureCard
                icon={<Zap className='h-8 w-8' />}
                title='Lightning Fast'
                description='Optimized performance that delivers exceptional speed without compromising on quality or functionality.'
                gradient='from-blue-500/10 to-cyan-500/10'
              />

              <FeatureCard
                icon={<Users className='h-8 w-8' />}
                title='Expert Team'
                description='Seasoned professionals with deep expertise across modern technologies and industry best practices.'
                gradient='from-purple-500/10 to-pink-500/10'
              />

              <FeatureCard
                icon={<Star className='h-8 w-8' />}
                title='Premium Quality'
                description='Uncompromising standards in every aspect of development, ensuring excellence in every deliverable.'
                gradient='from-amber-500/10 to-orange-500/10'
              />
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Services Section */}
        <section className='py-32 px-0 relative'>
          <MaxWidthWrapper>
            <div className='text-center mb-20'>
              <div className='inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6'>
                Our Services
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Comprehensive Solutions
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                Tailored services designed to meet your unique business
                requirements and accelerate your digital transformation.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-muted/20 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold mb-4'>Web Development</h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    Modern, responsive websites built with cutting-edge
                    technologies and optimized for performance.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>React & Next.js Applications</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>Responsive & Mobile-First Design</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>SEO Optimized & Performance Focused</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-muted/20 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Mobile Applications
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    Native and cross-platform mobile applications that deliver
                    exceptional user experiences.
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>React Native Development</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>Cross-Platform Compatibility</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>App Store Deployment Ready</span>
                    </li>
                  </ul>
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
                Ready to Transform
                <br />
                Your Digital Presence?
              </h2>
              <p className='text-xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed'>
                Let's collaborate to bring your vision to life with innovative
                solutions that drive real business results.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  Start Your Project
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
