
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, title: 'Meenakshipuram Residential', location: 'Meerut', cap: '5kW', type: 'Residential', img: '/pro/a.jpeg' },
  { id: 2, title: 'Noida Tech Hub', location: 'Noida', cap: '150kW', type: 'Commercial', img: '/pro/b.jpeg' },
  { id: 3, title: 'Ghaziabad Sky Residency', location: 'Meerut', cap: '25kW', type: 'Residential', img: '/pro/c.jpeg' },
  { id: 4, title: 'Hapur Industrial Park', location: 'Hapur', cap: '80kW', type: 'Commercial', img: '/pro/d.jpeg' },
  { id: 5, title: 'Baghpat Utility Project', location: 'Baghpat', cap: '500kW', type: 'Commercial', img: '/pro/e.jpeg' },
  { id: 6, title: 'Modinagar Luxury Villa', location: 'Meerut', cap: '10kW', type: 'Residential', img: '/pro/f.jpeg' },
  { id: 7, title: 'Meerut Cantt Facility', location: 'Meerut', cap: '40kW', type: 'Commercial', img: '/pro/g.jpeg' },
  { id: 8, title: 'Sector 62 Corporate', location: 'Noida', cap: '200kW', type: 'Commercial', img: '/pro/h.jpeg' },
  { id: 9, title: 'Hapur Road Estate', location: 'Meerut', cap: '15kW', type: 'Residential', img: '/pro/i.jpeg' },
  { id: 10, title: 'Partapur Logistics Hub', location: 'Partapur', cap: '300kW', type: 'Commercial', img: '/pro/j.jpeg' },
  { id: 11, title: 'Civil Lines Solar Home', location: 'Meerut', cap: '8kW', type: 'Residential', img: '/pro/k.jpeg' },
  { id: 12, title: 'Indirapuram Complex', location: 'Ghaziabad', cap: '120kW', type: 'Commercial', img: '/pro/l.jpeg' },
  { id: 13, title: 'Sardhana Institutional', location: 'Sardhana', cap: '60kW', type: 'Commercial', img: '/pro/m.jpeg' },
  { id: 14, title: 'Mawana Industrial Grid', location: 'Mawana', cap: '450kW', type: 'Commercial', img: '/pro/n.jpeg' },
  { id: 15, title: 'Pallavpuram Rooftop', location: 'Meerut', cap: '12kW', type: 'Residential', img: '/pro/o.jpeg' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-primary font-black mb-6 tracking-tight"
          >
            Impact <span className="text-accent italic">Gallery</span>
          </motion.h1>
          <p className="text-base md:text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            A visual showcase of how we're powering North India, one rooftop at a time. Click any image to view it in full screen.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass p-1.5 rounded-2xl flex gap-1 bg-primary/5 border border-primary/10">
            {['All', 'Residential', 'Commercial'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${filter === f ? 'bg-primary text-white shadow-md' : 'hover:bg-primary/10 text-primary'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => setSelectedImage(project.img)}
                className="group relative h-[220px] sm:h-[280px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-transparent shadow-md transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 isolate cursor-pointer"
              >
                <Image 
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Click Hint Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={20} />
                   </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none">
            <DialogHeader className="sr-only">
              <DialogTitle>Project Image Detail</DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-[70vh] md:h-[85vh]">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Solar Project Detail"
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-24 text-center p-12 md:p-20 glass rounded-[3.5rem] relative overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group">
          <div className="relative z-10">
            <h2 className="font-headline text-primary font-bold mb-6 tracking-tight">
              Want Your <span className="text-accent">Property</span> Featured Here?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto font-medium">
              Join the 1200+ clients who have chosen technical excellence and energy independence.
            </p>
            <Button size="lg" className="h-16 px-12 rounded-full font-bold bg-primary text-white hover:bg-accent transition-all shadow-xl shadow-primary/20 group-hover:scale-105" asChild>
              <Link href="/contact">Architect My System</Link>
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
