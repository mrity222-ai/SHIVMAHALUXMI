'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "बहुत शानदार service by SHIV MAHALUXMI SOLAR. Installation process smooth tha aur bijli bill kaafi kam ho gaya. Highly recommended!",
    name: "Rajesh Sharma",
    role: "Residential Client",
    image: "https://i.pravatar.cc/100?u=1",
    dark: false
  },
  {
    quote: "Best rooftop solar company in Meerut. Team bahut professional hai aur genuine products use karti hai.",
    name: "Amit Gupta",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?u=2",
    dark: true
  },
  {
    quote: "Solar system installation bahut neatly aur timely complete hua. Customer support bhi excellent hai.",
    name: "S. K. Singh",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?u=3",
    dark: false
  },
  {
    quote: "Government subsidy process me full support mila. Bahut trusted aur reliable solar installer hai.",
    name: "Mrs. Anjali Devi",
    role: "Residential Client",
    image: "https://i.pravatar.cc/100?u=4",
    dark: true
  },
  {
    quote: "Commercial solar project ke liye best company. Work quality aur technical knowledge dono top-class hai.",
    name: "Pankaj Tyagi",
    role: "Factory Manager",
    image: "https://i.pravatar.cc/100?u=5",
    dark: false
  },
  {
    quote: "Hybrid solar system lagwaya aur backup performance bahut acchi hai. Fully satisfied with their service.",
    name: "Dr. Verma",
    role: "Clinic Owner",
    image: "https://i.pravatar.cc/100?u=6",
    dark: true
  },
  {
    quote: "Affordable pricing ke saath premium quality panels aur inverter provide kiya. Great experience overall.",
    name: "Suresh Kumar",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?u=7",
    dark: false
  },
  {
    quote: "Maintenance service fast aur professional hai. Team har query ka quick solution deti hai.",
    name: "Mohit Bansal",
    role: "Retailer",
    image: "https://i.pravatar.cc/100?u=8",
    dark: true
  },
  {
    quote: "Electricity bill almost 80% tak reduce ho gaya. Rooftop solar installation bahut efficiently kiya gaya.",
    name: "Ramesh Chandra",
    role: "Residential Client",
    image: "https://i.pravatar.cc/100?u=9",
    dark: false
  },
  {
    quote: "Very professional solar EPC company. Consultation se lekar final setup tak sab kuch perfectly manage kiya.",
    name: "Arun Goel",
    role: "Industrialist",
    image: "https://i.pravatar.cc/100?u=10",
    dark: true
  },
  {
    quote: "Noida aur Ghaziabad area me best solar energy solution provider. Highly recommended for homes and businesses.",
    name: "Neeraj Pandey",
    role: "IT Professional",
    image: "https://i.pravatar.cc/100?u=11",
    dark: false
  },
  {
    quote: "Team bahut supportive aur experienced hai. Installation ke baad monitoring setup bhi properly explain kiya.",
    name: "Vikram Singh",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?u=12",
    dark: true
  },
  {
    quote: "Industrial solar plant setup ke liye excellent service. Zero downtime aur proper planning ke saath work complete hua.",
    name: "Manish Agarwal",
    role: "Plant Head",
    image: "https://i.pravatar.cc/100?u=13",
    dark: false
  },
  {
    quote: "Quality work, genuine products aur transparent pricing. SHIV MAHALUXMI SOLAR par trust kiya ja sakta hai.",
    name: "Sunil Yadav",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?u=14",
    dark: true
  },
  {
    quote: "Sustainable energy ke liye perfect choice. Professional rooftop solar installation aur amazing after-sales support.",
    name: "Mrs. Reena Sharma",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?u=15",
    dark: false
  }
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="section-padding bg-[#F3EFE8]">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="max-w-lg tracking-tight text-black">
            Voices of Energy Independence
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={() => api?.scrollPrev()}
              className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => api?.scrollNext()}
              className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/90 shadow-lg"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-6">
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "p-10 rounded-[3rem] flex flex-col justify-between h-[420px] shadow-sm overflow-hidden",
                    t.dark ? "bg-[#1A1A1A] text-white shadow-xl" : "bg-white text-black"
                  )}
                >
                  <div>
                    <Quote className={cn("mb-8 h-10 w-10", t.dark ? "text-white/10" : "text-black/20")} fill="currentColor" />
                    <p className={cn("font-medium text-lg leading-relaxed italic", t.dark ? "text-gray-200" : "text-black")}>
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                       <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t.name}</h4>
                      <p className={cn("text-[10px] font-bold uppercase tracking-wider", t.dark ? "text-white/40" : "text-black/60")}>{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
