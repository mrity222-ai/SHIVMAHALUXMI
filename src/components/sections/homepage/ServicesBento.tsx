'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, Globe, Battery, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

export function ServicesBento() {
  return (
    <section className="relative section-padding bg-muted/20 overflow-hidden isolate">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6 md:gap-8 px-4">
          <SectionHeading 
            tag="Reliable Solar Integrator"
            title={<>Advanced <span className="text-primary">Service Ecosystem</span></>}
            description="Delivering comprehensive energy solutions across Meerut, Noida, and Ghaziabad with elite technical standards."
            align="left"
            className="mb-0 max-w-xl"
          />
          <Button variant="ghost" className="text-foreground font-bold hover:bg-foreground/5 rounded-full h-10 md:h-12 px-6 md:px-8 text-xs md:text-sm group hidden md:flex" asChild>
            <Link href="/services">
              Explore All Services 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-2 md:col-span-8 bento-card p-5 md:p-10 flex flex-col justify-between group"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="h-10 w-10 md:h-14 md:w-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                  <Sun size={20} className="md:size-[28px]" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold text-foreground mb-1 md:mb-2 font-headline group-hover:text-primary transition-colors">Rooftop Solar Integrator</h3>
                  <p className="text-[11px] md:text-[0.9rem] max-w-sm text-muted-foreground">Premium rooftop solar company standards. We provide high-performance panels with smart monitoring in Meerut and Noida.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100 mt-4 md:mt-6">
              {['25Y Warranty', 'Subsidy Help', 'Tier-1 Quality'].map(item => (
                <div key={item} className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                  <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 bento-card p-5 md:p-10 bg-blue-600 text-white flex flex-col justify-between group overflow-hidden"
          >
            <div className="space-y-3 md:space-y-6">
              <div className="h-8 w-8 md:h-12 md:w-12 bg-white/15 rounded-xl md:rounded-2xl flex items-center justify-center">
                <Globe className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <h3 className="text-sm md:text-xl text-white font-bold">Industrial EPC</h3>
              <p className="text-blue-100 text-[10px] md:text-[13px]">Scaling energy infrastructure for businesses.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center text-white text-[10px] md:text-xs font-bold hover:underline gap-1.5 md:gap-2 group-hover:translate-x-1 transition-transform mt-3 md:mt-4">
              Audit <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-4 bento-card p-5 md:p-10 bg-[#FEF9C3] border-yellow-100 flex flex-col justify-between group"
          >
            <div className="space-y-3 md:space-y-6">
              <div className="h-8 w-8 md:h-12 md:w-12 bg-white shadow-sm rounded-xl md:rounded-2xl flex items-center justify-center text-yellow-600">
                <Battery className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <h3 className="text-sm md:text-xl text-foreground font-bold">Premium Dealer</h3>
              <p className="text-muted-foreground text-[10px] md:text-[13px]">Authorized solar component dealer.</p>
            </div>
            <div className="text-foreground font-bold uppercase tracking-widest text-[9px] md:text-[10px] opacity-40 mt-3 md:mt-4">Smart Architecture</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-2 md:col-span-8 bento-card relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center p-5 md:p-10 group"
          >
            <div className="relative z-10 w-full sm:max-w-md space-y-3 md:space-y-6">
              <h3 className="text-base md:text-2xl font-bold text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors">Feasibility Expert</h3>
              <p className="text-[11px] md:text-[0.9rem] text-muted-foreground">Professional consultancy for residential and commercial solar plant installation.</p>
              <Button className="rounded-full font-bold px-5 md:px-6 h-9 md:h-12 text-[10px] md:text-xs bg-foreground text-white hover:bg-foreground/90 group-hover:scale-105 transition-all">Analyze My ROI</Button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/4 sm:w-1/2 bg-gradient-to-l from-blue-500/5 to-transparent flex items-center justify-center pointer-events-none">
              <BarChart3 className="text-blue-500/10 h-[60px] w-[60px] md:h-[140px] md:w-[140px]" />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 px-4 md:hidden">
          <Button variant="outline" className="w-full h-11 rounded-full text-xs font-bold border-primary/20" asChild>
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}