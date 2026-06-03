'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="section-padding bg-white overflow-hidden isolate">
      <div className="container-max rounded-[3.5rem] bg-gray-50 p-10 md:p-24 text-center relative overflow-hidden group min-h-[450px] flex items-center justify-center border border-gray-100">
        <Image 
          src="/ab/2.png"
          alt="Contact Solar Installer"
          fill
          className="object-cover opacity-10 transition-transform duration-1000 group-hover:scale-105"
        />
        
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 space-y-12">
          <h2 className="text-primary leading-tight">
            Predictable Power for a <br className="hidden sm:block"/> <span className="text-accent">Sustainable Future</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Join homeowners and businesses in Meerut, Noida, and Ghaziabad who have already transitioned to affordable solar energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button size="lg" className="h-16 px-12 rounded-full text-lg bg-primary text-white hover:bg-accent shadow-xl border-2 border-primary/20" asChild>
              <Link href="/contact">Request Energy Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 rounded-full text-lg border-primary/25 text-primary hover:bg-primary hover:text-white backdrop-blur-sm" asChild>
              <Link href="/contact">Consult Solar Experts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}