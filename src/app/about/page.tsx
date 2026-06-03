"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Trophy, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sun, 
  HardHat, 
  Lightbulb,
  Building2,
  PhoneCall,
  Mail,
  Linkedin,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Partners } from '@/components/sections/Partners';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src="/ser/4.png" 
            alt="Infrastructure Architecture" 
            fill 
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-white/10 to-white" />
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-headline text-primary mb-8 leading-[1.1] tracking-tight text-3xl md:text-5xl lg:text-5xl"
          >
            Engineering <span className="text-accent italic">Tomorrow's</span> <br/> Solar Infrastructure
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            SHIV MAHALUXMI SOLAR ENERGY is a trusted solutions provider offering high-quality on-grid, hybrid, off-grid and solar installation services for residential and commercial customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button size="lg" className="h-16 px-12 rounded-full font-bold bg-primary text-white hover:bg-accent transition-all shadow-xl shadow-primary/20" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 rounded-full font-bold border-primary/20 text-primary hover:bg-primary/5 transition-all" asChild>
              <Link href="/services">Our Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-24 px-6 sm:px-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Who We Are</h4>
                <h2 className="text-primary font-bold">Designing a <span className="text-accent">Greener</span> Legacy</h2>
              </div>
              <div className="space-y-6 text-muted-foreground font-medium text-lg leading-relaxed">
                <p>
                  SHIV MAHALUXMI SOLAR ENERGY has established itself as a trusted force in the renewable energy sector, focusing on quality work, genuine products, and absolute customer satisfaction.
                </p>
                <p>
                  With 3 years of proven technical expertise, we provide specialized on-grid, off-grid, and hybrid solar ecosystems for homes and businesses across Meerut, Noida, and the wider Uttar Pradesh region.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary transition-colors group-hover:text-accent">Certified Quality</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">ISO & Govt Approved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-12">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary transition-colors group-hover:text-accent">Expert Team</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">3+ Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-primary/20 hover:border-primary/50 border border-transparent isolate"
            >
              <Image 
                src="/ab/6.png" 
                alt="Corporate Solar Installation" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER / LEADERSHIP JOURNEY SECTION */}
      <section className="py-24 px-6 sm:px-12 bg-white relative overflow-hidden isolate">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Founder Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-center text-center space-y-8"
          >
            <div className="relative group flex justify-center">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-[280px] w-[280px] lg:h-[420px] lg:w-[420px] rounded-full border-[12px] border-white overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,58,138,0.2)]">
                <Image
                  src="/ab/5.png"
                  alt="RAHUL CHAND"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
                  RAHUL CHAND
                </h2>
                <p className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">
                  Managing Director & Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Mission & Journey Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-16"
          >
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary to-accent rounded-full" />
              <div className="pl-10 space-y-6">
                <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Director's Message</h4>
                <p className="text-2xl md:text-3xl text-primary font-medium leading-relaxed italic font-headline">
                  "At SHIV MAHALUXMI SOLAR ENERGY, we don't just install solar panels; we architect energy independence. Every rooftop represents a unique opportunity to build a more resilient future for Meerut and its surrounding communities."
                </p>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                  Founded on principles of technical excellence and sustainable growth, we've dedicated ourselves to providing North India with premier energy ecosystems that empower properties and protect our environmental legacy.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-primary/40 font-bold text-[10px] uppercase tracking-[0.3em]">Leadership Journey</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              <div className="relative space-y-10 pl-10">
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-primary to-accent"
                  />
                </div>

                {[
                  { 
                    year: '2023', 
                    title: 'The Foundation', 
                    desc: 'Established SHIV MAHALUXMI SOLAR ENERGY in Meerut with a mission for technical focus and quality.',
                    icon: Building2 
                  },
                  { 
                    year: '2024', 
                    title: 'Service Expansion', 
                    desc: 'Successfully delivered premier commercial rooftop projects in regional industrial business zones.',
                    icon: Zap 
                  },
                  { 
                    year: '2025', 
                    title: 'Innovation Era', 
                    desc: 'Launched advanced feasibility concierge and smart maintenance suites for modern North Indian properties.',
                    icon: Lightbulb 
                  }
                ].map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[31px] top-0 h-10 w-10 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center z-10 shadow-sm transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-primary/20">
                      <milestone.icon size={16} className="text-primary" />
                    </div>

                    <div className="bg-gray-50/50 p-6 rounded-[2.5rem] border border-transparent transition-all duration-500 group-hover:bg-white group-hover:border-primary/10 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-black text-lg font-headline">{milestone.year}</span>
                        <div className="h-1 w-1 rounded-full bg-gray-300" />
                        <h4 className="text-primary font-bold">{milestone.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. MISSION & VISION SECTION */}
      <section className="py-24 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4 sm:space-y-6 transition-all duration-500 hover:shadow-2xl hover:border-primary/20"
            >
              <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-xl sm:rounded-[2rem] bg-primary/5 flex items-center justify-center text-primary mb-2 sm:mb-4 transition-transform group-hover:rotate-6">
                <Target className="size-6 sm:size-10" />
              </div>
              <h3 className="text-primary font-bold text-lg sm:text-3xl font-headline">Our <span className="text-accent">Mission</span></h3>
              <p className="text-muted-foreground font-medium leading-relaxed italic text-[10px] sm:text-lg">
                "To democratize clean energy by providing technically advanced, affordable, and high-performance solar solutions that empower properties and protect the planet."
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4 sm:space-y-6 transition-all duration-500 hover:shadow-2xl hover:border-accent/20"
            >
              <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-xl sm:rounded-[2rem] bg-accent/5 flex items-center justify-center text-accent mb-2 sm:mb-4 transition-transform group-hover:-rotate-6">
                <Eye className="size-6 sm:size-10" />
              </div>
              <h3 className="text-primary font-bold text-lg sm:text-3xl font-headline">Our <span className="text-accent">Vision</span></h3>
              <p className="text-muted-foreground font-medium leading-relaxed italic text-[10px] sm:text-lg">
                "To become the most trusted architectural solar integrator in North India, setting benchmarks for quality work and sustainable innovation."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERS SECTION */}
      <Partners />

      {/* 6. ABOUT COMPANY IMAGE SECTION */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-lg border border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 hover:border-primary/30 isolate"
            >
              <Image 
                src="/pro/3.png" 
                alt="Utility Project" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary rounded-full px-8 scale-90 group-hover:scale-100 transition-transform duration-500">View Case Study</Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 hover:border-accent/30 isolate"
            >
              <Image 
                src="/pro/2.png" 
                alt="Solar Maintenance" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 hover:border-primary/30 isolate"
            >
              <Image 
                src="/pro/a.jpeg" 
                alt="Residential System" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-8 group relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-lg border border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 hover:border-accent/30 isolate"
            >
              <Image 
                src="/pro/1.png" 
                alt="Team On Site" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US SECTION */}
      <section className="py-24 px-6 sm:px-12 bg-primary overflow-hidden isolate relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Our Advantage</h4>
            <h2 className="text-white font-bold">Excellence by <span className="text-accent">Design</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-3 gap-4 sm:gap-8">
            {[
              { icon: HardHat, title: "Quality Work", desc: "Tier-1 components and rigorous installation standards." },
              { icon: Users, title: "Expert Team", desc: "Certified engineers with proven industrial experience." },
              { icon: Clock, title: "On-Time Delivery", desc: "Project management protocols that ensure your energy switch happens as planned." },
              { icon: ShieldCheck, title: "Safety Standards", desc: "Zero-compromise safety protocols protecting your property." },
              { icon: Lightbulb, title: "Genuine Products", desc: "We use only high-quality, authentic solar components." },
              { icon: Trophy, title: "Client First", desc: "Building relationships through reliable service and satisfaction." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-white/10 group hover:bg-white hover:border-white transition-all duration-500 shadow-xl hover:shadow-2xl"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl bg-white/10 flex items-center justify-center text-accent mb-4 sm:mb-8 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                  <feature.icon className="size-5 sm:size-7" />
                </div>
                <h3 className="text-white group-hover:text-primary font-bold text-sm sm:text-xl mb-2 sm:mb-4 transition-colors">{feature.title}</h3>
                <p className="text-white/60 group-hover:text-muted-foreground transition-colors font-medium leading-relaxed text-[10px] sm:text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 sm:px-12 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-primary font-bold">Ready to Architect Your <br/> <span className="text-accent">Energy Independence?</span></h2>
          <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            Consult with our senior engineers today for a specialized ROI analysis and property feasibility report.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <Button size="lg" className="h-16 px-12 rounded-full font-bold bg-primary text-white hover:bg-accent transition-all shadow-xl shadow-primary/20" asChild>
              <Link href="/contact">Book Energy Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 rounded-full font-bold border-primary/20 text-primary hover:bg-white transition-all" asChild>
              <Link href="tel:+919997320159">Call Technical Desk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
