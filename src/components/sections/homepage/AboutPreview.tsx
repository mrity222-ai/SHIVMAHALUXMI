'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60 font-body">Trusted Solar Solutions</span>
            </div>
            <h2 className="text-primary">
              SHIV MAHALUXMI <span className="text-accent">SOLAR ENERGY</span>: Providing high-quality <span className="text-accent">on-grid, hybrid, and off-grid</span> services.
            </h2>
            <p className="font-medium text-muted-foreground">
              With 3+ years of technical focus on quality work and genuine products, we empower properties across Meerut, Noida, and Ghaziabad with absolute customer satisfaction.
            </p>
            <Button variant="outline" className="group rounded-full border-primary/10 px-8 py-5 h-auto text-sm font-semibold flex items-center gap-4 hover:bg-primary hover:text-white transition-all w-fit font-body text-primary" asChild>
              <Link href="/about">
                Learn About Our Experience
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col sm:flex-row items-end gap-8 lg:justify-end"
          >
            <div className="relative w-full sm:w-[320px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-primary/20 hover:border-primary/30 border border-transparent isolate">
              <Image 
                src="/ab/3.png" 
                alt="Professional Solar Installation" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            </div>
            <div className="space-y-8 flex flex-col items-start sm:items-end w-full sm:w-auto">
              <div className="relative w-full sm:w-[240px] aspect-square rounded-[2.5rem] overflow-hidden shadow-xl group transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-accent/20 hover:border-accent/30 border border-transparent isolate">
                <Image 
                  src="/ab/4.png" 
                  alt="High-Yield Solar Dealer" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              </div>
              <p className="text-sm font-medium sm:text-right max-w-[240px] text-muted-foreground">
                Delivering clean power and sustainable growth since 2023 with a mission centered on technical excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
