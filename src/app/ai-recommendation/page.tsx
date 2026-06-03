"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { recommendSolarConfiguration, type SolarConfigOutput } from '@/ai/flows/ai-solar-configuration-recommendation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap, Loader2, DollarSign, Battery, PanelTop, CheckCircle2, Sun } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AIRecommendationPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolarConfigOutput | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    roofAreaSqMeters: 50,
    locationCity: 'Meerut',
    averageMonthlyElectricityBillUSD: 2000,
    propertyType: 'residential' as 'residential' | 'commercial',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recommendation = await recommendSolarConfiguration(formData);
      setResult(recommendation);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate recommendation. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto bg-white min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-headline text-primary font-bold mb-6">
          AI <span className="text-accent italic">Feasibility</span> Concierge
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Our advanced AI analyzes your property details to architect the perfect solar configuration for your energy needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-5">
          <Card className="glass border border-gray-100 rounded-3xl overflow-hidden sticky top-32">
            <CardHeader className="bg-primary/5 pb-8">
              <CardTitle className="font-headline text-2xl flex items-center gap-2 text-primary">
                <Zap className="text-accent" /> Property Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-primary font-bold">Property Type</Label>
                  <Select 
                    value={formData.propertyType} 
                    onValueChange={(val) => setFormData({...formData, propertyType: val as any})}
                  >
                    <SelectTrigger className="glass bg-white border-gray-200">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-primary font-bold">Roof Area (sq. meters)</Label>
                  <Input 
                    type="number" 
                    className="glass h-12 bg-white border-gray-200"
                    value={formData.roofAreaSqMeters}
                    onChange={(e) => setFormData({...formData, roofAreaSqMeters: Number(e.target.value)})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-primary font-bold">Avg. Monthly Bill (INR approx)</Label>
                  <Input 
                    type="number" 
                    className="glass h-12 bg-white border-gray-200"
                    value={formData.averageMonthlyElectricityBillUSD}
                    onChange={(e) => setFormData({...formData, averageMonthlyElectricityBillUSD: Number(e.target.value)})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-primary font-bold">City / Location</Label>
                  <Input 
                    className="glass h-12 bg-white border-gray-200"
                    value={formData.locationCity}
                    onChange={(e) => setFormData({...formData, locationCity: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-bold bg-primary text-white hover:bg-accent shadow-xl shadow-primary/20" 
                  disabled={loading}
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...</>
                  ) : (
                    "Generate AI Report"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!result && !loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 glass rounded-[2.5rem] border-dashed border-2 border-gray-200"
              >
                <div className="h-20 w-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                  <Battery className="text-muted-foreground h-10 w-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Waiting for <span className="text-accent">Insights</span></h3>
                <p className="text-muted-foreground">Complete the form to see your personalized solar recommendation.</p>
              </motion.div>
            )}

            {loading && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center space-y-8 p-12"
              >
                <div className="relative">
                  <div className="h-24 w-24 rounded-full border-4 border-primary/20 border-t-accent animate-spin" />
                  <Sun className="absolute inset-0 m-auto h-10 w-10 text-accent animate-pulse" />
                </div>
                <p className="text-xl font-headline animate-pulse text-primary">Calculating <span className="text-accent">Solar Potential...</span></p>
              </motion.div>
            )}

            {result && !loading && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="glass p-8 rounded-[2rem] border-primary/20 bg-gray-50 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-headline text-primary font-bold">Expert <span className="text-accent">Report</span></h2>
                    <div className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold">
                      {result.overallEstimatedPaybackPeriodYears} Year Payback
                    </div>
                  </div>

                  <div className="space-y-6">
                    {result.recommendations.map((rec, idx) => (
                      <Card key={idx} className="bg-white border-gray-100 shadow-sm rounded-2xl overflow-hidden group">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                              <h4 className="font-bold text-xl mb-2 text-primary">{rec.configurationName}</h4>
                              <p className="text-sm text-muted-foreground mb-4">{rec.notes}</p>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Panels</div>
                                  <div className="font-headline font-bold flex items-center gap-1 text-primary">
                                    <PanelTop size={14} className="text-accent" /> {rec.panelCount}
                                  </div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Capacity</div>
                                  <div className="font-headline font-bold text-primary">{rec.totalCapacityKw} kW</div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Output</div>
                                  <div className="font-headline font-bold text-primary">{rec.estimatedEnergyOutputKWhMonth} kWh/mo</div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Savings</div>
                                  <div className="font-headline font-bold text-accent">₹{rec.estimatedSavingsPerMonthUSD}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-primary/5 rounded-xl text-xs text-muted-foreground leading-relaxed italic border border-primary/10">
                    <p className="font-bold mb-1 uppercase tracking-tighter text-primary">Disclaimer</p>
                    {result.disclaimer}
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-primary text-white hover:bg-accent py-6 text-lg rounded-full font-bold shadow-xl" asChild>
                      <Link href="/contact">Apply for {result.overallEstimatedPaybackPeriodYears} Year Plan</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
