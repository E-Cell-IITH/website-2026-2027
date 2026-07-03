'use client';
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const formUrl = "https://forms.gle/hLuCfDP2hgbX7tsh6";

  return (
<section className="relative text-center overflow-hidden bg-black text-white pt-32 pb-20 md:pt-48 md:pb-12 min-h-[90vh] flex flex-col justify-start">      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Italic Catchphrase Accent */}
        <p className="text-4xl md:text-7xl text-gray-200 font-bold tracking-wide mb-3">
          Founders’ Hive —
        </p>
        
        {/* Bold Title */}
        <h1 className="text-xl sm:text-6xl md:text-4xl font-serif italic font-light tracking-tight text-zinc-500 mb-8">
          Hyderabad
        </h1>

        {/* Primary Action Button */}
        <div className="mb-16">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-gray-200 transition-all duration-200 tracking-medium text-sm md:text-base shadow-md"
          >
            Register Now
          </a>
        </div>

     {/* Meta Layout - Perfectly Balanced Equal Sections with Clean Dividers */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center max-w-6xl mx-auto border border-gray-400/60 rounded-[2.5rem] bg-black py-6 px-10">
          
          {/* Item 1: Date */}
          <div className="flex items-center justify-center gap-4">
            <div className="shrink-0">
              <Image
                src="/founderHive/dateEmoji.png"
                alt="Date Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">Date</h4>
              <p className="text-lg font-medium text-gray-200 mt-1 whitespace-nowrap">18th July 2025</p>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="h-12 w-px bg-gray-400/30" />

          {/* Item 2: Venue */}
          <div className="flex items-center justify-center gap-4">
            <div className="shrink-0">
              <Image
                src="/founderHive/venue.png"
                alt="Venue Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">Venue</h4>
              <p className="text-lg font-medium text-gray-200 mt-1 whitespace-nowrap">will be announced soon</p>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="h-12 w-px bg-gray-400/30" />

          {/* Item 3: Category */}
          <div className="flex items-center justify-center gap-4">
            <div className="shrink-0">
              <Image
                src="/founderHive/networking.png"
                alt="Category Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">Category</h4>
              <p className="text-lg font-medium text-gray-200 mt-1 leading-tight whitespace-nowrap">
                Networking & Mentorship
              </p>
            </div>
          </div>

        </div>

        {/* Responsive Mobile Layout (Stacks neatly when screens shrink) */}
        <div className="flex flex-col md:hidden gap-6 border border-gray-400/60 rounded-4xl p-6 max-w-sm mx-auto bg-black">
          <div className="flex items-center gap-4">
            <Image src="/founderHive/dateEmoji.png" alt="Date" width={32} height={32} />
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-500 uppercase">Date</h4>
              <p className="text-base text-gray-200 font-medium">18th July 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t border-gray-900 pt-4">
            <Image src="/founderHive/venue.png" alt="Venue" width={32} height={32} />
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-500 uppercase">Venue</h4>
              <p className="text-base text-gray-200 font-medium">will be announced soon...</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t border-gray-900 pt-4">
            <Image src="/founderHive/networking.png" alt="Category" width={32} height={32} />
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-500 uppercase">Category</h4>
              <p className="text-base text-gray-200 font-medium">Networking & Mentorship</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}