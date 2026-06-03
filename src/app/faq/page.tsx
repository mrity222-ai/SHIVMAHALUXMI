"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { History } from 'lucide-react';

const faqs = [
  {
    q: "How much does a 3kW solar system cost?",
    a: "The cost depends on component selection like inverter and panel brand. For residents in Meerut and Noida, it typically ranges between ₹1,80,000 to ₹2,20,000 before government subsidies."
  },
  {
    q: "How long does professional installation take?",
    a: "A standard rooftop solar installation for homes in Ghaziabad or Hapur usually takes 2-4 days. Government approvals for net metering in Uttar Pradesh can take 15-30 days."
  },
  {
    q: "What is the lifespan of modern energy systems?",
    a: "High-performance solar panels installed by professional contractors come with a 25-year warranty and often exceed 30 years of operational life."
  },
  {
    q: "Does clean energy generation work on cloudy days?",
    a: "Yes, our systems generate electricity in regions like Noida and Baghpat even on cloudy days, though at a lower capacity, as they rely on light rather than direct heat."
  },
  {
    q: "Are there benefits for commercial grid solutions?",
    a: "Commercial solar plant projects in Ghaziabad and Meerut benefit from accelerated depreciation and significantly reduced operational expenses for industries."
  },
  {
    q: "Is regular maintenance required for peak efficiency?",
    a: "Cleaning every 2-3 weeks ensures peak performance. We provide solar maintenance services near you across Hapur and Noida to keep your system generating maximum power."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-primary font-black mb-4 tracking-tight"
          >
            Solar <span className="text-accent italic">Q&A</span>
          </motion.h1>
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            Everything you need to know about professional rooftop solar installation and energy solutions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-[2rem] p-6 md:p-10 bg-gray-50 border border-gray-100"
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none px-4 rounded-xl hover:bg-white transition-colors">
                <AccordionTrigger className="text-left font-headline font-bold text-base md:text-lg py-5 hover:no-underline text-primary hover:text-accent">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-16 text-center glass p-10 md:p-16 rounded-[2.5rem] bg-primary/[0.02] border border-primary/10">
          <h3 className="font-headline text-primary font-bold mb-3 tracking-tight">Need <span className="text-accent">Expert Advice?</span></h3>
          <p className="text-base text-muted-foreground mb-8 font-medium">Our consultants provide specialized support for clients in Meerut, Noida, and Ghaziabad.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:919756915227" className="bg-primary text-white hover:bg-accent px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-center">Call Technical Support</a>
            <a href="https://wa.me/919756915227" className="glass bg-white border border-gray-200 px-8 py-3.5 rounded-full font-bold text-sm text-center hover:bg-gray-50 transition-colors text-primary">WhatsApp Consultancy</a>
          </div>
        </div>
      </div>
    </div>
  );
}