'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sun, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PMSuryaGhar() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 relative overflow-hidden isolate">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container-max">
        <div className="glass-morphism bg-white/40 backdrop-blur-2xl border border-white/40 p-8 md:p-16 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(30,58,138,0.08)] relative overflow-hidden group transition-all duration-700 hover:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-200"
                >
                  <Sun size={14} className="animate-spin-slow" />
                  Government Incentive
                </motion.div>
                
                <h2 className="text-primary tracking-tighter leading-[1.1]">
                  PM Surya Ghar <br />
                  <span className="text-accent italic font-headline">Muft Bijli Yojana</span>
                </h2>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground/80">
                  300 Unit Tak <span className="text-green-600">Muft Bijli</span> Ka Labh
                </h3>
                
                <p className="text-lg font-medium text-muted-foreground max-w-xl leading-relaxed">
                  Apne ghar ki chhat par solar panel lagwaye aur paaye <span className="text-primary font-bold">₹1,08,000 tak subsidy</span> ke saath bijli bill mein bachat. Join the sustainable energy revolution today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="h-16 px-12 rounded-full font-bold bg-primary text-white hover:bg-accent shadow-xl shadow-primary/20 transition-all group/btn" asChild>
                  <Link href="/contact">
                    Apply Now 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-12 rounded-full font-bold border-primary/20 text-primary hover:bg-white transition-all" asChild>
                  <Link href="/faq">Learn More</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/40">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                  <CheckCircle2 size={16} className="text-green-500" /> Full Documentation Support
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                  <CheckCircle2 size={16} className="text-green-500" /> Fast Approval Process
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 group-hover:scale-[1.02] transition-transform duration-700 isolate">
                <Image 
                  src="/ab/7.png" 
                  alt="Modern House with Rooftop Solar Panels" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Floating Subsidy Badge */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:top-10 md:-right-10 bg-white p-6 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-green-100 flex flex-col items-center text-center gap-1 z-20 group-hover:bg-green-50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white mb-1 shadow-lg shadow-green-200">
                  <Zap size={24} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-green-600">Get Upto</div>
                <div className="text-2xl font-black text-primary leading-none">₹1,08,000</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subsidy</div>
              </motion.div>

              {/* Decorative sparkle icons */}
              <div className="absolute -bottom-4 -left-4 h-12 w-12 glass rounded-2xl flex items-center justify-center text-accent animate-pulse shadow-lg">
                <Sun size={24} />
              </div>
            </motion.div>
          </div>

          {/* Background animated sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-in-out" />
        </div>
      </div>
    </section>
  );
}
