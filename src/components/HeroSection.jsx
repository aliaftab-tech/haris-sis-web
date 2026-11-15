import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[660px] flex flex-col items-center justify-between text-center overflow-hidden bg-[#F7F4EE]">
      {/* Background Hero Artwork (Islamic Arch, Flowers, Hanging Lanterns, Palace & Couple) */}
      <div 
        className="absolute inset-0 bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/images/hero_clean_bg.jpg)` }}
      />

      {/* Gentle Bottom Fade for Smooth Transition into the Scratch Date Section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent pointer-events-none" />

      {/* Top Spacer */}
      <div className="w-full pt-12" />

      {/* Bottom Bouncing "Scroll down" Callout Matching Reference Video */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
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
