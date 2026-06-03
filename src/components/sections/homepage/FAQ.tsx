'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Plus, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const FAQ_DATA = {
  general: [
    { q: "Which is the best solar energy company for rooftop installation?", a: "SHIV MAHALUXMI SOLAR ENERGY is a premier rooftop solar installer providing professional services in Meerut, Noida, and Ghaziabad. We specialize in high-efficiency panels and expert maintenance." },
    { q: "How can I find a reliable solar installer near me?", a: "As a top-rated solar integrator, we provide professional installation and maintenance across Uttar Pradesh, including Baghpat and Hapur, ensuring local support and technical excellence." },
    { q: "What is the approximate cost of solar system installation?", a: "Solar installation costs vary based on capacity. For residential systems in regions like Meerut and Noida, a 3kW system typically ranges from ₹1.8L to ₹2.2L before government subsidies." }
  ],
  clients: [
    { q: "Can I receive a government subsidy on my rooftop solar system?", a: "Yes, under the PM Surya Ghar and state schemes, residential clients in Meerut and nearby cities can claim total subsidies up to ₹1,08,000. Our team provides full assistance for documentation." },
    { q: "Do you provide commercial solar plant services in my region?", a: "We are a leading solar EPC company providing commercial and industrial solar solutions across Noida, Ghaziabad, and the wider Uttar Pradesh area." },
    { q: "Where can I find professional solar maintenance services near me?", a: "SHIV MAHALUXMI SOLAR ENERGY offers comprehensive maintenance services, including panel cleaning and health checks, for systems installed in Meerut and adjacent areas." }
  ]
};

export function FAQ() {
  const [tab, setTab] = useState<'general' | 'clients'>('general');

  return (
    <section className="section-padding bg-white">
      <div className="container-max flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-6 text-left">
            <div className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-3">
              Expert Q&A <ArrowRight size={16} className="rotate-45" />
            </div>
            <h2 className="text-foreground">
              Comprehensive Energy <br className="hidden sm:block"/> Solutions Unfolded
            </h2>
            <p className="max-w-md">
              Providing rooftop solar installation and maintenance services for residential and commercial properties across Meerut, Noida, and adjacent regions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setTab('general')}
              className={cn(
                "px-8 py-3.5 rounded-2xl font-bold text-sm transition-all",
                tab === 'general' ? "bg-primary text-white shadow-lg" : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
              )}
            >
              System Basics
            </button>
            <button 
              onClick={() => setTab('clients')}
              className={cn(
                "px-8 py-3.5 rounded-2xl font-bold text-sm transition-all",
                tab === 'clients' ? "bg-primary text-white shadow-lg" : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
              )}
            >
              Client Support
            </button>
          </div>

          <div className="pt-12 border-t border-gray-100 space-y-10">
            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest mb-1">Direct Assistance</p>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-foreground font-headline">+91 9756915227</p>
                  <p className="text-2xl font-bold text-foreground font-headline">+91 9997320159</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest mb-1">Technical Office</p>
                <p className="text-lg md:text-xl font-bold text-foreground font-headline">HOUSE NO.39, GALI NO.4, New Meenakshi Puram, Meerut, Meerut, Uttar Pradesh, 250001</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {FAQ_DATA[tab].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-100 px-0 py-2 hover:bg-gray-50/50 transition-colors rounded-2xl overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-xl py-6 hover:no-underline px-6 group">
                  <div className="flex justify-between items-center w-full gap-6">
                    <span className="max-w-[90%]">{faq.q}</span>
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all shrink-0">
                      <Plus size={24} className="transition-transform group-data-[state=open]:rotate-45" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base px-6 pb-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
