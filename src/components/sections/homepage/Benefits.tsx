'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, ShieldCheck, ArrowUpRight, Leaf } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const benefits = [
  {
    title: "Financial Freedom",
    desc: "Drastically reduce or even eliminate your monthly electricity expenses, saving lakhs over the system's lifespan.",
    icon: IndianRupee,
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Energy Independence",
    desc: "Break free from fluctuating grid rates and power outages with reliable, self-generated renewable energy.",
    icon: ShieldCheck,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Asset Appreciation",
    desc: "Professional rooftop solar installations are a premium upgrade that significantly increases your property's market value.",
    icon: ArrowUpRight,
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Environmental Impact",
    desc: "Join the global movement toward net-zero. Every panel installed helps mitigate climate change for future generations.",
    icon: Leaf,
    color: "bg-primary/10 text-primary"
  }
];

export function Benefits() {
  return (
    <section className="section-padding bg-white relative overflow-hidden isolate">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container-max">
        <SectionHeading 
          tag="Future-Proof Savings"
          title={<>Unlock the True Potential of <br className="hidden sm:block"/> <span className="text-accent">Sustainable Energy</span></>}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="relative group">
              {/* Premium Glowing Border Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-xl sm:rounded-[2.6rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative h-full p-4 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center md:items-start md:text-left overflow-hidden isolate"
              >
                {/* Animated Light Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                
                <div className={cn(
                  "relative z-10 h-10 w-10 sm:h-16 sm:w-16 rounded-lg sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg", 
                  benefit.color
                )}>
                  <benefit.icon className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                
                <h3 className="relative z-10 text-[10px] sm:text-2xl font-bold mb-1 sm:mb-5 group-hover:text-primary transition-colors leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="relative z-10 text-[8px] sm:text-sm font-medium text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80">
                  {benefit.desc}
                </p>

                {/* Subtle Interior Glow */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
