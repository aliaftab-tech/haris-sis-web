import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex flex-col items-center justify-between text-center overflow-hidden rounded-t-[28px] bg-[#F7F4EE]">
      {/* Background Hero Artwork (Palace & Romantic Couple Under Floral Arch) */}
      <div 
        className="absolute inset-0 bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/images/hero_clean_bg.jpg)` }}
      />

      {/* Subtle Warm Gradient Overlay at top & bottom for smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-transparent to-[#FAF8F5] pointer-events-none" />

      {/* Dynamic Overlay Text (supports customization from weddingData) */}
      <div className="relative z-10 pt-10 sm:pt-14 px-4 flex flex-col items-center">
        {/* Welcome Prefix */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#6B5A49] text-sm sm:text-base tracking-[0.2em] font-serif uppercase"
        >
          {weddingData.ceremony.welcomePrefix}
        </motion.p>

        {/* Nikkah Ceremony Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-script text-4xl sm:text-5xl text-[#8E6E34] mt-1 mb-0.5 drop-shadow-sm"
        >
          {weddingData.ceremony.title}
        </motion.h1>

        {/* Small "of" divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center space-x-3 my-1"
        >
          <span className="w-6 h-[1px] bg-[#C5A059]/60" />
          <span className="font-serif italic text-xs text-[#857361]">of</span>
          <span className="w-6 h-[1px] bg-[#C5A059]/60" />
        </motion.div>

        {/* Couple Names */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-display font-medium text-3xl sm:text-4xl text-[#3A2D1F] tracking-wide"
        >
          {weddingData.groom.name}
          <span className="block font-script text-2xl sm:text-3xl text-[#A37B39] my-0.5">&</span>
          {weddingData.bride.name}
        </motion.h2>
      </div>

      {/* Bottom Scroll Down Callout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 pb-6 flex flex-col items-center"
      >
        <span className="font-script text-2xl text-[#8E6E34]">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-[#C5A059] mt-1 cursor-pointer"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

