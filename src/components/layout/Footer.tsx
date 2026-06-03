"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  PhoneCall,
  Instagram,
  Facebook,
  FileText
} from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'On-Grid Solar', href: '/services' },
    { name: 'Hybrid Systems', href: '/services' },
    { name: 'Industrial EPC', href: '/services' },
    { name: 'Maintenance', href: '/services' },
    { name: 'Feasibility', href: '/services' },
  ];

  return (
    <footer className="relative mt-12 mb-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-primary text-white rounded-[2.5rem] md:rounded-[3rem] border border-white/5 shadow-2xl isolate">
          
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-20 pointer-events-none" />
          
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              
              <div className="lg:col-span-5 space-y-8">
                <Link href="/" className="inline-block relative h-20 w-20 group transition-transform duration-500 hover:scale-105">
                  <Image 
                    src="/Shivmahaluxmisolar.png" 
                    alt="SHIV MAHALUXMI SOLAR ENERGY"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 group cursor-pointer w-fit">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-accent">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">Email Address</p>
                      <p className="text-sm font-bold text-white">shivmahaluxmi@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 group cursor-pointer w-fit">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-accent">
                      <PhoneCall size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">Technical Desk</p>
                      <p className="text-sm font-bold text-white">+91 9756915227</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group cursor-pointer w-fit">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all group-hover:bg-accent">
                      <FileText size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">GST Number</p>
                      <p className="text-xs font-bold text-white tracking-tight">09EPHPK0207R1ZH</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-white/80 max-w-sm font-bold leading-relaxed">
                  The most trusted architectural solar integrator in North India. Providing technically advanced energy solutions for homes and businesses.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                
                <div className="space-y-4">
                  <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white">Company</h5>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="relative text-white/80 hover:text-accent transition-all text-xs font-bold inline-block group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white">Resources</h5>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="relative text-white/80 hover:text-accent transition-all text-xs font-bold inline-block group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white">Legal</h5>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-xs font-bold text-white/80 hover:text-accent">Terms</Link></li>
                    <li><Link href="/about" className="text-xs font-bold text-white/80 hover:text-accent">Privacy</Link></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="text-center md:text-left space-y-1">
                  <p className="text-[9px] font-black text-white/60 uppercase tracking-[0.1em]">
                    © {year || 2026} SHIV MAHALUXMI SOLAR ENERGY.
                  </p>
                  <p className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em]">
                    Developed by <a href="https://avedatechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">AVEDA TECHNOLOGIES</a>
                  </p>
                </div>

                <div className="flex gap-3">
                  <motion.a 
                    href="https://www.instagram.com/shivmahaluxmisolar/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-accent shadow-lg"
                  >
                    <Instagram size={16} />
                  </motion.a>
                  <motion.a 
                    href="https://www.facebook.com/profile.php?id=61590002537779" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-accent shadow-lg"
                  >
                    <Facebook size={16} />
                  </motion.a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}