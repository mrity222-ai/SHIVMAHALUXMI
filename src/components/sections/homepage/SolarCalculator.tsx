'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Sun, Coins, Lightbulb } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const STATE_FACTORS: Record<string, number> = {
  'Uttar Pradesh': 120,
  'Delhi': 125,
  'Haryana': 125,
  'Rajasthan': 145,
  'Punjab': 125,
  'Uttarakhand': 115,
};

const CATEGORIES = {
  residential: { name: 'Residential', rate: 45000, subsidyMax: 78000 },
  commercial: { name: 'Commercial', rate: 52000, subsidyMax: 0 },
  industrial: { name: 'Industrial', rate: 55000, subsidyMax: 0 },
};

export function SolarCalculator() {
  const [calcMode, setCalcMode] = useState<'units' | 'area'>('units');
  const [monthlyUnits, setMonthlyUnits] = useState(300);
  const [roofArea, setRoofArea] = useState(500);
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [category, setCategory] = useState<keyof typeof CATEGORIES>('residential');
  const [unitCost, setUnitCost] = useState(7.5);

  const results = useMemo(() => {
    const factor = STATE_FACTORS[selectedState] || 120;
    const cat = CATEGORIES[category];
    
    let systemSize = 1;
    if (calcMode === 'units') {
      systemSize = Math.max(1, Math.min(monthlyUnits / factor, 500));
    } else {
      systemSize = Math.max(1, roofArea / 100);
    }
    
    systemSize = Math.round(systemSize * 10) / 10;
    const totalCost = systemSize * cat.rate;
    
    let subsidy = 0;
    if (category === 'residential') {
      if (systemSize >= 3) subsidy = 78000;
      else if (systemSize >= 2) subsidy = 60000;
      else if (systemSize >= 1) subsidy = 30000;
    }

    const netCost = totalCost - subsidy;
    const monthlyGenerated = systemSize * factor;
    const monthlySavings = Math.round(monthlyGenerated * unitCost);
    const annualSavings = monthlySavings * 12;
    const payback = annualSavings > 0 ? (netCost / annualSavings) : 0;
    
    return {
      systemSize,
      totalCost,
      subsidy,
      netCost,
      monthlySavings,
      annualSavings,
      payback: Number(payback).toFixed(1),
      recommendation: payback < 5 ? "Excellent ROI" : "Predictable Payback"
    };
  }, [calcMode, monthlyUnits, roofArea, selectedState, category, unitCost]);

  return (
    <section id="calculator" className="section-padding bg-[#F8FAFC]">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
          <div className="w-full lg:w-1/2 space-y-10 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Calculator className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Affordable Energy Planning</span>
            </div>
            <h2>Calculate Monthly <br className="hidden sm:block"/> <span className="text-primary">ROI Instantly</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-wider">Select Region</Label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="rounded-2xl h-12 bg-white text-sm transition-all focus:border-primary">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(STATE_FACTORS).map(s => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-wider">Installation Type</Label>
                <Select value={category} onValueChange={(val: any) => setCategory(val)}>
                  <SelectTrigger className="rounded-2xl h-12 bg-white text-sm transition-all focus:border-primary">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-wider">Grid Rate (₹/kWh)</Label>
                <Input 
                  type="number" 
                  value={unitCost} 
                  onChange={(e) => setUnitCost(Number(e.target.value))}
                  className="rounded-2xl h-12 bg-white text-sm transition-all focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-wider">Estimate Basis</Label>
                <div className="flex p-1 bg-muted rounded-2xl gap-1">
                  <button 
                    onClick={() => setCalcMode('units')}
                    className={cn("flex-1 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", calcMode === 'units' ? "bg-white shadow-sm text-black" : "text-muted-foreground")}
                  >Units</button>
                  <button 
                    onClick={() => setCalcMode('area')}
                    className={cn("flex-1 py-2 text-[10px] font-bold uppercase rounded-xl transition-all", calcMode === 'area' ? "bg-white shadow-sm text-black" : "text-muted-foreground")}
                  >Area</button>
                </div>
              </div>
            </div>

            <div className="space-y-10 pt-8">
              {calcMode === 'units' ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-bold text-black uppercase">Monthly Units</Label>
                    <span className="text-2xl font-bold text-primary">{monthlyUnits} Units</span>
                  </div>
                  <Slider 
                    value={[monthlyUnits]} 
                    min={50} 
                    max={2000} 
                    step={10} 
                    onValueChange={(val) => setMonthlyUnits(val[0])}
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-bold text-black uppercase">Area (Sq. Ft.)</Label>
                    <span className="text-2xl font-bold text-primary">{roofArea} ft²</span>
                  </div>
                  <Slider 
                    value={[roofArea]} 
                    min={100} 
                    max={10000} 
                    step={50} 
                    onValueChange={(val) => setRoofArea(val[0])}
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl group"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <IndianRupee size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Monthly Savings</div>
                  <div className="text-3xl font-bold text-black group-hover:text-primary transition-colors">₹{results.monthlySavings.toLocaleString()}</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 group overflow-hidden isolate"
              >
                <div className="h-12 w-12 bg-white/15 rounded-2xl flex items-center justify-center text-yellow-400 mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Sun size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">System Capacity</div>
                  <div className="text-3xl font-bold text-white">{results.systemSize} kWp</div>
                  <div className="text-[10px] font-bold text-yellow-400 uppercase mt-3 group-hover:translate-x-1 transition-transform">Payback: {results.payback} Years</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className="sm:col-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-8 transition-all duration-500 hover:shadow-2xl group"
              >
                <div className="h-12 w-12 shrink-0 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Coins size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Projected Annual Gains</div>
                  <div className="text-2xl font-bold text-black group-hover:text-primary transition-colors">₹{results.annualSavings.toLocaleString()}</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10 sm:col-span-2 flex items-center gap-8 transition-all duration-500 hover:shadow-xl hover:bg-primary/10 group"
              >
                <div className="h-12 w-12 shrink-0 bg-primary/15 rounded-2xl flex items-center justify-center text-primary transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Expert Advice</div>
                  <p className="text-lg font-bold text-black leading-tight group-hover:translate-x-1 transition-transform">
                    {results.recommendation} for residents in Meerut and Noida.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}