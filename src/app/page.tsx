'use client';

import React from 'react';
import { Hero } from '@/components/sections/homepage/Hero';
import { Benefits } from '@/components/sections/homepage/Benefits';
import { AboutPreview } from '@/components/sections/homepage/AboutPreview';
import { SubsidyFinance } from '@/components/sections/homepage/SubsidyFinance';
import { Performance } from '@/components/sections/homepage/Performance';
import { ServicesBento } from '@/components/sections/homepage/ServicesBento';
import { PMSuryaGhar } from '@/components/sections/homepage/PMSuryaGhar';
import { SolarCalculator } from '@/components/sections/homepage/SolarCalculator';
import { Infrastructure } from '@/components/sections/homepage/Infrastructure';
import { Testimonials } from '@/components/sections/homepage/Testimonials';
import { CTA } from '@/components/sections/homepage/CTA';
import { FAQ } from '@/components/sections/homepage/FAQ';
import { Partners } from '@/components/sections/Partners';

export default function HomePage() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Hero />
      <Partners />
      <AboutPreview />
      <SubsidyFinance />
      <Benefits />
      <Performance />
      <ServicesBento />
      <PMSuryaGhar />
      <SolarCalculator />
      <Infrastructure />
      <Testimonials />
      <CTA />
      <FAQ />
    </div>
  );
}
