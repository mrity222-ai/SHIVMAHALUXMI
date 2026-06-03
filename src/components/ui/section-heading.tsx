'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  tagColor?: string;
}

export function SectionHeading({ 
  tag, 
  title, description, 
  align = 'center',
  className,
  tagColor = 'primary'
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16 space-y-3",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-body",
            tagColor === 'primary' ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
          )}
        >
          {tag}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={cn(
            "max-w-xl text-muted-foreground",
            align === 'center' ? "mx-auto" : ""
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}