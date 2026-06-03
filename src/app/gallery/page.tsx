"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sun, Maximize2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryItems = [
  { id: 1, title: 'Residential Complex', size: '25kW', category: 'Residential', img: 'https://picsum.photos/seed/gal1/800/800' },
  { id: 2, title: 'Factory Rooftop', size: '150kW', category: 'Commercial', img: 'https://picsum.photos/seed/gal2/800/800' },
  { id: 3, title: 'Villa Installation', size: '10kW', category: 'Residential', img: 'https://picsum.photos/seed/gal3/800/800' },
  { id: 4, title: 'Solar Farm Phase 1', size: '500kW', category: 'Utility', img: 'https://picsum.photos/seed/gal4/800/800' },
  { id: 5, title: 'School Building', size: '50kW', category: 'Institutional', img: 'https://picsum.photos/seed/gal5/800/800' },
  { id: 6, title: 'Warehouse Array', size: '80kW', category: 'Commercial', img: 'https://picsum.photos/seed/gal6/800/800' },
  { id: 7, title: 'Eco Township', size: '300kW', category: 'Utility', img: 'https://picsum.photos/seed/gal7/800/800' },
  { id: 8, title: 'Modern Home', size: '5kW', category: 'Residential', img: 'https://picsum.photos/seed/gal8/800/800' },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-accent text-[10px] font-bold uppercase tracking-widest border border-primary/10"
          >
            Visual Impact
          </motion.div>
          <h1 className="font-headline text-primary font-black tracking-tight">
            Solar <span className="text-accent italic">Showcase</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">A curated selection of our most impactful installations across Uttar Pradesh.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative group aspect-square rounded-[2rem] overflow-hidden bg-muted cursor-pointer border border-transparent shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 hover:border-primary/30 isolate"
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-[2px] group-hover:backdrop-blur-none">
                <div className="flex justify-between items-end">
                  <div className="space-y-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-accent font-bold text-[10px] uppercase tracking-widest">{item.category}</div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <div className="flex items-center gap-1 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                      <Zap size={12} className="text-accent" /> {item.size}
                    </div>
                  </div>
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 md:p-20 rounded-[3.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-8 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:border-primary/10 group">
          <h2 className="text-primary font-black tracking-tight transition-transform group-hover:scale-105">
            Inspired by <span className="text-accent">Our Work?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-medium max-w-xl">Let's design a custom solar system that looks as good as it performs for your property.</p>
          <Button size="lg" className="h-16 px-12 rounded-full font-bold bg-primary text-white hover:bg-accent transition-all shadow-xl shadow-primary/20">Get Free Consultation</Button>
        </div>
      </div>
    </div>
  );
}
