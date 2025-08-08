"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div
      className='group relative overflow-hidden rounded-2xl border bg-card p-8 hover:border-primary/20 transition-colors duration-200'
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
      <div className='relative z-10'>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6'>
          {icon}
        </div>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='text-muted-foreground leading-relaxed'>{description}</p>
      </div>
    </div>
  );
}