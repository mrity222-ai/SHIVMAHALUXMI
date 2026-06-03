'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  IndianRupee, 
  Landmark, 
  TrendingUp, 
  CreditCard, 
  Phone, 
  ArrowRight,
  CheckCircle2,
  Percent
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const financeFeatures = [
  {
    title: "Central Gov Subsidy",
    value: "₹78,000",
    desc: "Direct benefit under the PM Surya Ghar scheme.",
    icon: Landmark,
    accent: false
  },
  {
    title: "UP Gov Subsidy",
    value: "₹30,000",
    desc: "Additional state incentive for UP residents.",
    icon: CheckCircle2,
    accent: false
  },
  {
    title: "Loan Interest Rate",
    value: "6%",
    desc: "Special green energy financing available.",
    icon: Percent,
    accent: true
  },
  {
    title: "Monthly EMI",
    value: "₹1,500",
    desc: "Starts at a fraction of your current bill.",
    icon: CreditCard,
    accent: true
  }
];

export function SubsidyFinance() {
  return (
    <section className="py-10 md:py-16 bg-[#F8FAFC] relative overflow-hidden isolate">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container-max px-4">
        <SectionHeading 
          tag="Financial Advantage"
          title={<>Maximize Your ROI with <br className="hidden sm:block"/> <span className="text-accent">Subsidy & Finance</span></>}
          description="We handle the complex documentation while you enjoy the most affordable transition to clean energy in North India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* Main Total Subsidy Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bento-card p-6 sm:p-10 bg-primary text-white flex flex-col justify-between relative group overflow-hidden"
          >
            <div className="relative z-10 space-y-5 sm:space-y-8">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-4 group-hover:rotate-12 transition-transform duration-500">
                <IndianRupee size={24} className="sm:size-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white/80 text-base sm:text-xl font-headline">Total Combined Subsidy</h3>
                <div className="text-4xl sm:text-6xl md:text-7xl font-black text-accent tracking-tighter">
                  ₹1,08,000
                </div>
              </div>
              <p className="text-white/70 text-sm sm:text-lg font-medium leading-relaxed">
                Unlock the maximum possible incentive by combining Central and UP state subsidies. Our team provides full-concierge support.
              </p>
            </div>

            <div className="relative z-10 pt-6 sm:pt-10 border-t border-white/10 flex items-center justify-between">
              <Link href="tel:+919997320159" className="flex items-center gap-3 group/link">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent flex items-center justify-center text-white group-hover/link:scale-110 transition-transform">
                  <Phone size={14} className="sm:size-[18px]" />
                </div>
                <span className="text-sm sm:text-lg font-bold">9997320159</span>
              </Link>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

          {/* Grid of Finance Cards - 2 cols on mobile */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
            {financeFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-primary/20 hover:shadow-xl transition-all duration-500"
              >
                <div className="space-y-3 sm:space-y-6">
                  <div className={cn(
                    "h-8 w-8 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                    feature.accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                  )}>
                    <feature.icon size={16} className="sm:size-6" />
                  </div>
                  <div>
                    <h4 className="text-muted-foreground text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-0.5 sm:mb-1">{feature.title}</h4>
                    <div className="text-lg sm:text-3xl font-black text-primary">{feature.value}</div>
                  </div>
                  <p className="text-[10px] sm:text-[13px] text-muted-foreground font-medium leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 bg-accent/5 border border-dashed border-accent/30 p-4 sm:p-8 rounded-2xl sm:rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 group hover:bg-accent/10 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-8 w-8 sm:h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white shrink-0">
                  <TrendingUp size={16} className="sm:size-6" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-primary text-xs sm:text-base">Ready to architect your savings?</h4>
                  <p className="text-[9px] sm:text-xs text-muted-foreground">Consult with our senior financial advisors today.</p>
                </div>
              </div>
              <Button size="sm" className="rounded-full bg-primary text-white hover:bg-accent px-5 sm:px-8 h-10 sm:h-12 font-bold shadow-lg text-[10px] sm:text-xs w-full sm:w-auto" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
