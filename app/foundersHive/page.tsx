'use client';
import React from 'react';
import HeroSection from '@/components/ui/foundersHive/heroSection';
import OverviewSection from '@/components/ui/foundersHive/overview'
import ImageSection from '@/components/ui/foundersHive/imageSection';
export default function FounderHivePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      
    <section>
        <HeroSection/>
        <OverviewSection/>
        <ImageSection/>
    </section>

 

          
    </main>
  );
} 