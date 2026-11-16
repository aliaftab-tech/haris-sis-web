import React, { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function EnvelopeScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpenEnvelope = (e) => {
    if (isOpening) return
    setIsOpening(true)

    // Gentle, soft golden shimmer particles
    const rect = e?.currentTarget?.getBoundingClientRect?.()
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: ['#D4AF37', '#F5E5A4', '#FFF8DC', '#E6CA65', '#FFFFFF'],
      ticks: 160,
      gravity: 0.6,
      scalar: 0.85,
      shapes: ['circle']
    })

    // Slow, royal transition (2.2 seconds) to reveal card smoothly
    setTimeout(() => {
      onOpen()
    }, 2200)
  }

  return (
    <div className="fixed inset-0 z-40 w-full h-[100dvh] flex items-center justify-center bg-[#FAF8F5] sm:bg-[#1E1B18] overflow-hidden select-none">
      {/* Mobile Edge-to-Edge Container (100% full screen on phone, luxury frame on desktop) */}
      <div className="relative w-full h-[100dvh] sm:max-w-[430px] sm:h-[92vh] sm:max-h-[880px] sm:rounded-[36px] bg-[#FAF8F5] overflow-hidden flex items-center justify-center sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] sm:border sm:border-[#DFC99E]/50">
        
        {/* Interior Gold Silk Lining (Revealed behind the opening flaps) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F3E5] via-[#EEDDB2] to-[#FAF8F5] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Inner Card Glimpse Rising Up */}
          <motion.div
            initial={{ scale: 0.9, y: 35, opacity: 0 }}
            animate={isOpening ? { scale: 1, y: 0, opacity: 1 } : { scale: 0.9, y: 35, opacity: 0 }}
            transition={{ duration: 2.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-4 rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col items-center justify-center p-4 border border-[#DFC99E]"
          >
            <div 
              className="w-full h-full bg-cover bg-top rounded-xl opacity-95"
              style={{ backgroundImage: `url(${weddingData.heroImage})` }}
            />
          </motion.div>
        </div>

        {/* 4 Physical 4K Flaps (Parting in 4 directions on tap) */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          
          {/* 1. TOP FLAP: Triangle pointing DOWN with top 4K floral relief */}
          <motion.div
            animate={isOpening ? { y: '-105%', opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeImage})`,
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%)',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.06))'
            }}
          />

          {/* 2. BOTTOM FLAP: Triangle pointing UP with bottom 4K floral relief */}
          <motion.div
            animate={isOpening ? { y: '105%', opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeImage})`,
              clipPath: 'polygon(0% 100%, 100% 100%, 50% 50%)',
              filter: 'drop-shadow(0 -3px 6px rgba(0,0,0,0.06))'
            }}
          />

          {/* 3. LEFT FLAP: Triangle pointing RIGHT */}
          <motion.div
            animate={isOpening ? { x: '-105%', opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeImage})`,
              clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
              filter: 'drop-shadow(3px 0 6px rgba(0,0,0,0.05))'
            }}
          />

          {/* 4. RIGHT FLAP: Triangle pointing LEFT */}
          <motion.div
            animate={isOpening ? { x: '105%', opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeImage})`,
              clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
              filter: 'drop-shadow(-3px 0 6px rgba(0,0,0,0.05))'
            }}
          />
        </div>

        {/* Centered 4K Wax Seal (Centered via flexbox without transform conflicts) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <motion.div
            animate={isOpening ? { scale: 1.25, opacity: 0 } : { scale: [1, 1.025, 1] }}
            transition={isOpening ? { duration: 0.9, ease: 'easeOut' } : { repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="pointer-events-auto cursor-pointer relative flex items-center justify-center"
            onClick={handleOpenEnvelope}
          >
            {/* Soft Ambient Golden Aura */}
            {!isOpening && (
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#F5E5A4]/35 to-[#D4AF37]/25 blur-md animate-pulse pointer-events-none" />
            )}

            {/* 4K Liquid Gold Foil Monogram Seal */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 drop-shadow-[0_12px_24px_rgba(150,110,40,0.35)] hover:scale-105 active:scale-95 transition-transform duration-300">
              <img
                src={weddingData.waxSealImage}
                alt={`${weddingData.monogram} Wax Seal`}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Luxury "Tap to Open" Callout Pill */}
        <motion.div
          animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 z-30 flex flex-col items-center pointer-events-none px-4"
        >
          <div className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#DFC99E]/80 shadow-[0_4px_16px_rgba(197,160,89,0.18)] text-[#6D5428] text-[11px] font-serif tracking-[0.25em] uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Tap to Open Invitation</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
