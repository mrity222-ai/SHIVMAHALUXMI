'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      clearTimeout(timer);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = loading ? 'hidden' : 'unset';
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-48 w-48 overflow-hidden"
            >
              <Image 
                src="/Shivmahaluxmisolar.png" 
                alt="SHIV MAHALUXMI SOLAR ENERGY Logo" 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="space-y-4 text-center">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="font-headline text-2xl font-black text-primary tracking-tighter leading-none"
                >
                  SHIV MAHALUXMI <span className="text-accent italic">SOLAR ENERGY</span>
                </motion.h2>
              </div>
              
              <div className="relative h-1 w-48 overflow-hidden rounded-full bg-primary/5 mx-auto">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-accent"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col gap-1"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
                  Architecting Energy Independence
                </p>
                <p className="text-[8px] font-black text-accent uppercase tracking-[0.2em] animate-pulse">
                  Initializing Ecosystem
                </p>
              </motion.div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
