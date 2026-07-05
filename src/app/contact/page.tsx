"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const rawData = Object.fromEntries(new FormData(form));

    // Mapping raw form fields to standardized names expected by Google Apps Script
    const formData = {
      name: rawData.name,
      contactNumber: rawData.phone, // Maps 'phone' input to 'contactNumber' payload key
      serviceArea: rawData.serviceArea,
      systemType: rawData.systemType,
      propertyDetails: rawData.details // Maps 'details' textarea to 'propertyDetails' payload key
    };

    // Logging the data for verification as requested
    console.log("Form Data:", formData);

    try {
      // Integration with Google Apps Script endpoint provided by the user
      await fetch("https://script.google.com/macros/s/AKfycbzX_HYlo0-ozhxVl-0PJUlkg3SJ4IzpSV17vqZF_b4Fw04olGzrQV_u-TQmUffR1_yS/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData)
      });

      toast({
        title: "Audit Request Submitted Successfully!",
        description: "Our professional rooftop solar team will contact you shortly for a specialized energy audit.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Could not send request. Please try again or contact us via phone.",
      });
      console.error(error);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Consult Our <span className="text-primary">Experts</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl font-medium leading-relaxed font-body">
                Ready to find the best rooftop solar installer near you? We provide expert energy solutions for properties in Meerut, Noida, and Ghaziabad.
              </p>
            </div>

            <div className="p-8 glass rounded-[2.5rem] bg-primary/5 border-primary/10">
              <h4 className="font-headline font-bold mb-6 flex items-center gap-3 text-xl">
                <MessageSquare className="text-primary" /> Professional Support
              </h4>
              <ul className="space-y-4 text-sm sm:text-base text-muted-foreground font-medium font-body">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Rooftop solar installation site visits in Baghpat
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  High-performance solar dealer support in Hapur
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Government solar subsidy assistance in Noida
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-primary/5 bg-white border-muted"
          >
            <form id="auditForm" onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">Name</Label>
                  <Input 
                    name="name"
                    placeholder="Full Name" 
                    className="h-14 rounded-2xl border-muted bg-muted/5 focus:bg-white transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">Contact Number</Label>
                  <Input 
                    name="phone"
                    placeholder="Mobile Number" 
                    className="h-14 rounded-2xl border-muted bg-muted/5 focus:bg-white transition-all" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">Service Area (Noida, Ghaziabad, Hapur, etc.)</Label>
                <Input 
                  name="serviceArea"
                  placeholder="City or Region" 
                  className="h-14 rounded-2xl border-muted bg-muted/5 focus:bg-white transition-all" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">System Type</Label>
                <select 
                  name="systemType"
                  className="w-full h-14 rounded-2xl border border-muted bg-muted/5 px-4 font-body focus:ring-2 focus:ring-primary outline-none transition-all"
                >
                  <option value="Residential Rooftop System" className="bg-white">Residential Rooftop System</option>
                  <option value="Commercial Grid Solution" className="bg-white">Commercial Grid Solution</option>
                  <option value="Professional Maintenance" className="bg-white">Professional Maintenance</option>
                  <option value="Energy Consultancy" className="bg-white">Energy Consultancy</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold text-xs uppercase tracking-widest text-muted-foreground">Property Details</Label>
                <Textarea 
                  name="details"
                  placeholder="Describe your energy requirements (kW needed, etc.)" 
                  className="min-h-[150px] rounded-3xl border-muted bg-muted/5 focus:bg-white transition-all" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full h-16 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                Request Audit <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t border-muted/50"
        >
          <div className="flex gap-6 items-start group">
            <div className="h-16 w-16 shrink-0 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <MapPin size={28} />
            </div>
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-2xl tracking-tight">Technical Office</h4>
              <p className="text-muted-foreground leading-relaxed font-body font-medium">
                HOUSE NO.39, GALI NO.4,<br />
                New Meenakshi Puram, Meerut,<br />
                Meerut, Uttar Pradesh, 250001
              </p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">
                Service Hub: Noida, Ghaziabad, Hapur
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start group">
            <div className="h-16 w-16 shrink-0 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Phone size={28} />
            </div>
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-2xl tracking-tight">Expert Hotline</h4>
              <p className="text-muted-foreground font-body font-medium leading-relaxed">
                +91 9756915227<br />
                +91 9997320159
              </p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">
                Available Mon-Sat: 9AM - 7PM
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start group">
            <div className="h-16 w-16 shrink-0 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Mail size={28} />
            </div>
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-2xl tracking-tight">Service Inquiries</h4>
              <p className="text-muted-foreground font-body font-medium text-lg">shivmahaluxmi@gmail.com</p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">
                Response within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
