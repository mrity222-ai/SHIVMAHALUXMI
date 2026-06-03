'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const performanceItems = [
  { title: 'Residential Systems', desc: 'Cut monthly costs by up to 90% with professional rooftop solar installation for homes in Uttar Pradesh.', color: '#F97316' },
  { title: 'Commercial EPC', desc: 'Industrial and commercial solar plant company serving Ghaziabad and Noida with high-yield arrays.', color: '#FACC15' },
  { title: 'Energy Storage', desc: 'Premium battery systems for energy independence. Authorized solar system dealer in Hapur and Baghpat.', color: '#3B82F6' },
  { title: 'Maintenance Services', desc: 'Expert solar maintenance services near you. Professional panel cleaning and health checks for peak efficiency.', color: '#EA580C' },
];

export function Performance() {
  return (
    <section className="relative section-padding overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/ab/4.png"
          alt="Commercial Solar Plant"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gray-50/90" />
      </div>
      
      <div className="relative z-10 container-max text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary mb-6"
        >
          Predictable <span className="text-accent">Energy Performance</span>
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
          Affordable energy architecture for properties in Meerut, Noida, and Hapur. Claim your government subsidy with the best solar dealer near you.
        </p>
      </div>

      <div className="relative z-10 container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {performanceItems.map((sol, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -12, scale: 1.05 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col justify-between group overflow-hidden border border-gray-100 isolate"
          >
            <div>
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-md" style={{ backgroundColor: sol.color + '15', color: sol.color }}>
                 <Sun className="h-7 w-7" />
              </div>
              <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{sol.title}</h3>
              <p className="text-sm mb-8 transition-colors group-hover:text-foreground/80">
                {sol.desc}
              </p>
            </div>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold text-sm h-12 transition-all duration-300">
              Talk to Our Experts
            </Button>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}