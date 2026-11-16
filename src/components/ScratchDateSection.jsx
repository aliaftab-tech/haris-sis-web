import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import ScratchCard from './ScratchCard'
import { weddingData } from '../config/weddingData'

export default function ScratchDateSection() {
  const handleCardRevealed = () => {
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5E5A4', '#FFFFFF'],
      ticks: 120,
      gravity: 0.9,
      scalar: 0.8
    })
  }

  return (
    <section className="relative w-full py-10 px-4 flex flex-col items-center bg-[#FAF8F5]">
      {/* Decorative Top Divider */}
      <div className="flex items-center space-x-3 mb-4 opacity-70">
        <span className="w-8 h-[1px] bg-[#C5A059]" />
        <span className="text-[#C5A059] text-xs">✤</span>
        <span className="w-8 h-[1px] bg-[#C5A059]" />
      </div>

      {/* Section Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-4xl sm:text-5xl text-[#8E6E34] mb-1"
      >
        Auspicious Dates
      </motion.h3>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#967F5C] text-xs sm:text-sm tracking-widest font-serif mb-8 flex items-center space-x-1"
      >
        <span>✦</span>
        <span>Scratch to reveal the 3-day celebrations</span>
        <span>✦</span>
      </motion.p>

      {/* 3 Scratch Cards Grid (11 Mehndi, 12 Barat, 13 Walima) */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-sm w-full justify-center">
        <ScratchCard
          value="11 DEC"
          label="MEHNDI"
          onScratchComplete={handleCardRevealed}
        />
        <ScratchCard
          value="12 DEC"
          label="BARAT"
          onScratchComplete={handleCardRevealed}
        />
        <ScratchCard
          value="13 DEC"
          label="WALIMA"
          onScratchComplete={handleCardRevealed}
        />
      </div>
    </section>
  )
}
