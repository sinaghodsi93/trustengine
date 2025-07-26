"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className='py-32 px-0 relative overflow-hidden'>
      {/* Background gradients */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5' />
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl' />

      <MaxWidthWrapper>
        <div className='text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-8 leading-tight'>
              Build Amazing
              <br />
              <span className='bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent'>
                Digital Experiences
              </span>
            </h1>
          </motion.div>

          <motion.p
            className='text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We create modern, scalable solutions that help your business thrive
            and succeed in the ever-evolving digital landscape.
          </motion.p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Button
              size='lg'
              className='text-lg px-10 py-4 font-semibold shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 transition-colors duration-200'
            >
              Get Started Today
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-10 py-4 font-semibold border-2 hover:bg-muted/50 transition-all duration-300'
            >
              View Our Work
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
