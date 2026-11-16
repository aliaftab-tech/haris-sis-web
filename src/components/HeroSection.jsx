import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[640px] sm:min-h-[720px] flex flex-col items-center justify-between text-center overflow-hidden bg-[#F7F4EE]">
      {/* 4K Generated Palace Artwork */}
      <div 
        className="absolute inset-0 bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${weddingData.heroImage})` }}
      />

      {/* Gentle bottom gradient for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none" />

      {/* Clean Dynamic Typography Positioned Inside the Open Palace Arch */}
      <div className="relative z-10 pt-12 sm:pt-16 px-6 flex flex-col items-center max-w-[360px]">
        {/* Islamic Prefix */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#68523A] text-[10px] sm:text-[11px] tracking-[0.25em] font-serif uppercase font-semibold drop-shadow-sm mb-1"
        >
          {weddingData.ceremony.welcomePrefix}
        </motion.p>

        {/* Wedding Celebrations Script */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-script text-4xl sm:text-5xl text-[#8E6E34] my-0.5 drop-shadow"
        >
          {weddingData.ceremony.title}
        </motion.h1>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="my-1.5 flex flex-col items-center"
        >
          <span className="font-display font-bold text-2xl sm:text-3xl text-[#3A2D1F] tracking-wide">
            {weddingData.groom.name}
          </span>
          <span className="font-script text-2xl sm:text-3xl text-[#A8813B] my-0.5">
            &
          </span>
          <span className="font-display font-bold text-2xl sm:text-3xl text-[#3A2D1F] tracking-wide">
            {weddingData.bride.name}
          </span>
        </motion.div>

        {/* December 2026 Dates Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center space-x-2.5 mt-1"
        >
          <span className="w-5 h-[1px] bg-[#C5A059]" />
          <span className="font-serif tracking-[0.25em] uppercase text-xs text-[#523E28] font-bold">
            11 • 12 • 13 December 2026
          </span>
          <span className="w-5 h-[1px] bg-[#C5A059]" />
        </motion.div>
      </div>

      {/* Bottom Bouncing "Scroll down" Callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 pb-8 flex flex-col items-center cursor-pointer"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
        }}
      >
        <span className="font-script text-2xl sm:text-3xl text-[#8E6E34] drop-shadow-sm">
          Scroll down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-[#C5A059] mt-1"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
