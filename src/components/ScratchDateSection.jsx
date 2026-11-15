import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import ScratchCard from './ScratchCard'
import { weddingData } from '../config/weddingData'

export default function ScratchDateSection() {
  const handleCardRevealed = () => {
    // Mini gold sparkle confetti on scratch reveal
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
        The Date
      </motion.h3>

      {/* Instruction Subtitle */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#967F5C] text-xs sm:text-sm tracking-widest font-serif mb-8 flex items-center space-x-1"
      >
        <span>✦</span>
        <span>Scratch to reveal the date</span>
        <span>✦</span>
      </motion.p>

      {/* 3 Scratch Cards Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm w-full justify-center">
        <ScratchCard
          value={weddingData.date.day}
          label="DAY"
          onScratchComplete={handleCardRevealed}
        />
        <ScratchCard
          value={weddingData.date.month}
          label="MONTH"
          onScratchComplete={handleCardRevealed}
        />
        <ScratchCard
          value={weddingData.date.year}
          label="YEAR"
          onScratchComplete={handleCardRevealed}
        />
      </div>
    </section>
  )
}

