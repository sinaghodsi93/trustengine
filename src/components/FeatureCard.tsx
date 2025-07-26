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
    <motion.div
      className='group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10'
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className='relative z-10'>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300'>
          {icon}
        </div>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p className='text-muted-foreground leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
}