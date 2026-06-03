'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[85dvh] flex items-center overflow-hidden bg-white isolate">
      {/* Background Image - 100% Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/ab/1.png"
          alt="Modern Solar Architecture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Subtle Darkening Overlay for text readability - only if absolutely necessary, 
            but user asked for 100% visibility, so we keep it minimal or transparent */}
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Floating Glow - kept subtle */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 h-[250px] w-[250px] md:h-[500px] md:w-[500px] bg-accent/20 rounded-full blur-[80px] md:blur-[130px]" 
        />
      </div>

      <div className="relative z-10 w-full container-max px-4 sm:px-6 pt-20 pb-10 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 md:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Engineering Tomorrow's Energy
          </motion.div>

          {/* Heading with shadow for readability on full image */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black text-white tracking-tighter leading-[0.9] text-[clamp(2.5rem,8vw,4.5rem)] md:text-[clamp(3.5rem,6vw,6rem)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
          >
            SHIV MAHALUXMI <br />
            <span className="text-accent">SOLAR ENERGY</span>
          </motion.h1>

          {/* Description with shadow for readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white max-w-xl text-base md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Architecting high-performance rooftop solar ecosystems. We deliver elite on-grid, hybrid, and off-grid energy solutions across Meerut, Noida, and Ghaziabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="h-12 md:h-13 px-8 md:px-10 rounded-full bg-primary text-white hover:bg-accent font-bold text-sm md:text-base shadow-2xl w-full sm:w-auto" asChild>
              <Link href="/contact">Claim My Energy Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 md:h-13 px-8 md:px-10 rounded-full border-white/40 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary font-bold text-sm md:text-base group w-full sm:w-auto transition-all" asChild>
              <Link href="/ai-recommendation">
                Calculate Savings <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
