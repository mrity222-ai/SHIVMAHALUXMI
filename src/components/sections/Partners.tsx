'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Luminous', weight: 'font-black' },
  { name: 'Adani', weight: 'font-bold' },
  { name: 'UTL', weight: 'font-extrabold' },
  { name: 'Microtek', weight: 'font-semibold' },
  { name: 'Havells', weight: 'font-black' },
  { name: 'Su-Kam', weight: 'font-bold' },
  { name: 'Waaree', weight: 'font-extrabold' },
  { name: 'Tata', weight: 'font-black' },
  { name: 'Exide', weight: 'font-bold' },
];

export function Partners() {
  // Duplicate the list multiple times to ensure the marquee is continuous and seamless
  const list = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden isolate border-y border-gray-50 flex items-center">
      <div className="w-full relative overflow-hidden">
        {/* Side fades for a premium architectural look */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{
            x: ["-50%", "0%"], // This creates a Left to Right scrolling effect
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {list.map((partner, idx) => (
            <div
              key={idx}
              className="group cursor-default select-none opacity-20 hover:opacity-70 transition-opacity duration-500"
            >
              <span className={`text-2xl md:text-5xl tracking-tighter text-slate-900 ${partner.weight}`}>
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
