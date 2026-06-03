"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navbarContent = (
    <nav className={cn(
      "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 transition-all duration-500",
      scrolled ? "h-20 md:h-24" : "h-32 md:h-52"
    )}>
      <Link href="/" className="flex items-center group py-0 shrink-0 z-50">
        <div className={cn(
          "group-hover:rotate-3 transition-all duration-500 shrink-0 relative",
          scrolled ? "h-20 w-20 md:h-32 md:w-32" : "h-36 w-36 md:h-60 md:w-60"
        )}>
          <Image 
            src="/Shivmahaluxmisolar.png" 
            alt="SHIV MAHALUXMI SOLAR ENERGY Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-1.5 text-[11px] font-bold transition-all rounded-full hover:text-accent uppercase tracking-widest",
              pathname === link.href ? "text-accent bg-accent/5" : "text-primary"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:block">
        <Button asChild size="sm" className="px-5 font-black uppercase tracking-widest text-[10px] h-9">
          <Link href="/contact">Free Consultation</Link>
        </Button>
      </div>

      <button
        className="lg:hidden text-primary p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center shrink-0 z-50 pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 transform',
          isVisible ? 'translate-y-0' : '-translate-y-full',
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border-b border-gray-100/50' 
            : 'bg-transparent'
        )}
      >
        {navbarContent}
      </header>

      <AnimatePresence>
        {mounted && isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col p-6 sm:p-8 overflow-y-auto pointer-events-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <div className="relative h-24 w-24">
                  <Image 
                    src="/Shivmahaluxmisolar.png" 
                    alt="SHIV MAHALUXMI SOLAR ENERGY Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X className="h-8 w-8 text-primary" />
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl sm:text-2xl font-headline font-black flex items-center justify-between group py-3.5 border-b border-gray-50 uppercase tracking-tighter transition-colors",
                    pathname === link.href ? "text-accent" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {link.name}
                  <ChevronRight className={cn(
                    "h-5 w-5 transition-opacity",
                    pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )} />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 pb-4">
              <Button asChild size="lg" className="w-full font-black uppercase tracking-widest h-14" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
