"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Settings, 
  BadgeCheck, 
  ArrowRight,
  Zap,
  Leaf,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'residential-solar',
    title: 'Residential Energy Solutions',
    desc: 'Reduce monthly costs with professional rooftop solar installation for homes.',
    longDesc: 'Our residential systems are designed for peak efficiency. We provide solar energy solutions for homeowners in Meerut, Noida, and Ghaziabad, handling everything from survey to grid integration.',
    icon: Home,
    benefits: ['Long-term durability', 'Full subsidy support', 'Smart monitoring mobile app']
  },
  {
    id: 'commercial-solar',
    title: 'Commercial EPC Services',
    desc: 'High-yield energy architecture for industrial and commercial properties.',
    longDesc: 'Optimize operational expenses with our industrial solar solutions. We serve as a leading solar plant company for businesses in Noida, Hapur, and regional industrial zones.',
    icon: Building2,
    benefits: ['Accelerated depreciation support', 'Tax efficiency', 'Predictable energy backup']
  },
  {
    id: 'maintenance-solar',
    title: 'Professional Maintenance',
    desc: 'Maintain peak performance with dedicated solar maintenance services near you.',
    longDesc: 'Our team provides specialized maintenance for systems in Meerut and nearby areas, including panel cleaning, health audits, and technical reporting to ensure maximum generation.',
    icon: Settings,
    benefits: ['Technical consultancy', 'Bi-annual health audits', 'Real-time performance checks']
  },
  {
    id: 'subsidy-help',
    title: 'Subsidy Assistance',
    desc: 'Get government subsidy support with our expert documentation team.',
    longDesc: 'We provide full support for government solar subsidy assistance in Uttar Pradesh. Our team handles the liaison with local authorities in Meerut, Ghaziabad, and Hapur for faster processing.',
    icon: BadgeCheck,
    benefits: ['Expert documentation', 'Local authority liaison', 'Fast-track bank credit']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-primary font-black mb-6 tracking-tight"
          >
            Energy <span className="text-accent italic">Ecosystem</span>
          </motion.h1>
          <p className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            From professional consultancy to long-term energy management, we provide rooftop solar installation across Meerut, Noida, and the wider Uttar Pradesh region.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {services.map((service, idx) => {
            const img = PlaceHolderImages.find(p => p.id === service.id);
            return (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className={cn(
                  "flex flex-col gap-12 lg:gap-20 items-center p-8 md:p-12 rounded-[3rem] transition-all duration-700 hover:bg-gray-50/50 group",
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                )}
              >
                <div className="lg:w-1/2 w-full space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="h-14 w-14 glass rounded-2xl flex items-center justify-center text-primary bg-primary/5 shadow-sm transition-all"
                    >
                      <service.icon size={28} />
                    </motion.div>
                    <h2 className="font-headline text-primary font-bold tracking-tight group-hover:text-accent transition-colors">{service.title}</h2>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                    {service.longDesc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, bIdx) => (
                      <motion.li 
                        key={bIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: bIdx * 0.1 }}
                        className="flex items-center gap-3 text-sm font-semibold text-foreground/80"
                      >
                        <Zap size={14} className="text-accent shrink-0" /> {benefit}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild className="h-12 px-8 text-sm font-bold rounded-full group/btn shadow-lg hover:shadow-accent/20 transition-all bg-primary text-white hover:bg-accent">
                      <Link href="/contact">
                        Inquire for My Property 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-700 border border-transparent hover:border-primary/30 isolate"
                  >
                    <Image 
                      src={img?.imageUrl || ''} 
                      alt={`Professional ${service.title} in Uttar Pradesh`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="glass p-6 rounded-3xl w-full bg-white/40 backdrop-blur-md border-white/40 border shadow-2xl"
                      >
                        <p className="font-headline font-bold text-lg mb-2 text-primary">Sustainable Energy Solutions</p>
                        <div className="flex gap-6 text-[11px] text-accent font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><Sun size={14}/> Clean Energy</span>
                          <span className="flex items-center gap-2"><Leaf size={14}/> Carbon Neutral</span>
                        </div>
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
