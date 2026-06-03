'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

export function Infrastructure() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <SectionHeading 
            tag="Expert Solar EPC Company"
            title={<>Pioneering Sustainable <br className="hidden sm:block"/> <span className="text-primary">Energy Infrastructure</span></>}
            align="left"
            className="mb-0 w-full lg:w-2/3"
          />
          <p className="w-full lg:w-1/3 text-base font-medium border-l-4 border-foreground/10 pl-8 pt-4">
            We provide professional rooftop solar installation and maintenance services for residential and commercial properties across Meerut, Noida, and Ghaziabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col justify-end p-6 group transition-all duration-500"
          >
            <p className="text-sm mb-8 font-medium transition-colors group-hover:text-primary">
              Empowering industrial growth with high-performance solar energy solutions in Hapur and Baghpat.
            </p>
            <Button className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold group shadow-xl hover:shadow-primary/30 transition-all duration-500" asChild>
              <Link href="/contact">Book Free Consultancy <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" /></Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between relative group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/20"
          >
            <div className="space-y-8">
              <div className="h-14 w-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Globe size={28} />
              </div>
              <h3 className="text-xl text-foreground transition-colors group-hover:text-primary">Professional Service Provider</h3>
              <p className="text-sm transition-colors group-hover:text-foreground/80">
                Trusted by homeowners and businesses looking for affordable solar energy solutions in Uttar Pradesh.
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:border-primary">
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-5xl font-black text-gray-50 select-none group-hover:text-primary/5 transition-colors">001</div>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 rounded-[2.5rem] overflow-hidden relative group aspect-[4/5] shadow-xl isolate transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 border border-transparent"
          >
            <Image 
              src="/ab/4.png" 
              alt="Expert Rooftop Solar" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/15 transition-colors duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-none" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-4 rounded-[1.5rem] text-center backdrop-blur-md bg-white/30 border-white/40 shadow-2xl transition-all duration-500 group-hover:bg-white/50 group-hover:scale-105">
                <span className="text-white font-bold text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">Sustainable Grid Integration</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-[#FEF9C3] rounded-[2.5rem] p-10 flex flex-col justify-between border border-yellow-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-yellow-100 isolate group"
          >
            <div className="space-y-8">
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-md">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl mb-4 text-foreground transition-colors group-hover:text-primary">Certified Contractor Standards</h3>
                <p className="text-sm transition-colors group-hover:text-foreground/80">
                  Providing top-tier rooftop solar services with verified track records in Meerut, Hapur, and Baghpat.
                </p>
              </div>
              <div className="h-px bg-yellow-200 w-full group-hover:bg-yellow-300 transition-colors" />
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-foreground text-white flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest transition-colors group-hover:text-primary">Quality Verified</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
