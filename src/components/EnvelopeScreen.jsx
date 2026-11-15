import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function EnvelopeScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpenEnvelope = (e) => {
    if (isOpening) return
    setIsOpening(true)

    // Golden luxury particle confetti burst
    const rect = e?.currentTarget?.getBoundingClientRect?.()
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5

    // Central burst
    confetti({
      particleCount: 65,
      spread: 80,
      origin: { x, y },
      colors: ['#D4AF37', '#F5E5A4', '#C5A059', '#FFFFFF', '#E6CA65', '#B8860B'],
      ticks: 240,
      gravity: 0.7,
      scalar: 1.15,
      shapes: ['circle', 'square']
    })

    // Side shimmer bursts
    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: Math.max(0, x - 0.2), y },
        colors: ['#D4AF37', '#FFF8DC', '#F5E5A4']
      })
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: Math.min(1, x + 0.2), y },
        colors: ['#D4AF37', '#FFF8DC', '#F5E5A4']
      })
    }, 200)

    // Complete open transition after flap animations
    setTimeout(() => {
      onOpen()
    }, 1250)
  }

  return (
    <div className="fixed inset-0 z-40 w-full h-[100dvh] flex items-center justify-center bg-[#FAF8F5] sm:bg-[#1E1B18] overflow-hidden select-none">
      {/* Container: 100% full screen on mobile, elegant mobile mockup on desktop */}
      <div className="relative w-full h-[100dvh] sm:max-w-[430px] sm:h-[92vh] sm:max-h-[880px] sm:rounded-[36px] bg-[#FAF8F5] overflow-hidden flex items-center justify-center sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] sm:border sm:border-[#DFC99E]/50">
        
        {/* Interior Silk Lining & Light Rays (Revealed as flaps part) */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#F7EED8] via-[#E8D4A2] to-[#FAF8F5] flex items-center justify-center"
        >
          {/* Subtle Golden Damask Silk texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Golden Radiant Flare on Tap */}
          <AnimatePresence>
            {isOpening && (
              <motion.div
                initial={{ scale: 0.1, opacity: 0 }}
                animate={{ scale: 3.5, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="absolute z-10 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,250,230,1) 0%, rgba(225,185,95,0.7) 35%, rgba(255,255,255,0) 70%)',
                  boxShadow: '0 0 90px 60px rgba(225,185,95,0.7)'
                }}
              />
            )}
          </AnimatePresence>

          {/* Inner Card Glimpse Rising Up */}
          <motion.div
            initial={{ scale: 0.88, y: 30, opacity: 0 }}
            animate={isOpening ? { scale: 1, y: 0, opacity: 1 } : { scale: 0.88, y: 30, opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-4 rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col items-center justify-center p-4 border border-[#DFC99E]"
          >
            <div 
              className="w-full h-full bg-cover bg-top rounded-xl opacity-95"
              style={{ backgroundImage: `url(/images/hero_clean_bg.jpg)` }}
            />
          </motion.div>
        </div>

        {/* 4 Physical Envelope Flaps (Parting in 4 directions on tap) */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          
          {/* 1. TOP FLAP: Triangle pointing DOWN with top floral bouquet */}
          <motion.div
            animate={isOpening ? { y: '-105%', opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeSeamless})`,
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%)',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.06))'
            }}
          />

          {/* 2. BOTTOM FLAP: Triangle pointing UP with bottom floral bouquet */}
          <motion.div
            animate={isOpening ? { y: '105%', opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeSeamless})`,
              clipPath: 'polygon(0% 100%, 100% 100%, 50% 50%)',
              filter: 'drop-shadow(0 -4px 6px rgba(0,0,0,0.06))'
            }}
          />

          {/* 3. LEFT FLAP: Triangle pointing RIGHT with left floral vine */}
          <motion.div
            animate={isOpening ? { x: '-105%', opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeSeamless})`,
              clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
              filter: 'drop-shadow(4px 0 6px rgba(0,0,0,0.05))'
            }}
          />

          {/* 4. RIGHT FLAP: Triangle pointing LEFT with right floral vine */}
          <motion.div
            animate={isOpening ? { x: '105%', opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${weddingData.envelopeSeamless})`,
              clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
              filter: 'drop-shadow(-4px 0 6px rgba(0,0,0,0.05))'
            }}
          />
        </div>

        {/* Interactive Centered Wax Seal (Only ONE seal, sitting right at flap intersection) */}
        <motion.div
          animate={isOpening ? { scale: 1.35, opacity: 0, y: -15 } : { scale: [1, 1.03, 1] }}
          transition={isOpening ? { duration: 0.65, ease: 'easeOut' } : { repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          className="absolute z-30 cursor-pointer flex items-center justify-center"
          onClick={handleOpenEnvelope}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          {/* Golden Pulsing Shimmer Aura */}
          {!isOpening && (
            <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-[#D4AF37]/35 via-[#F5E5A4]/45 to-[#D4AF37]/35 blur-md animate-pulse pointer-events-none" />
          )}

          {/* Wax Seal Monogram */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 drop-shadow-[0_12px_24px_rgba(150,110,40,0.38)] hover:scale-105 active:scale-95 transition-transform duration-300">
            <img
              src={weddingData.waxSealImage}
              alt={`${weddingData.monogram} Wax Seal`}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </motion.div>

        {/* "Tap Seal to Open" Floating Badge */}
        <motion.div
          animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 z-30 flex flex-col items-center pointer-events-none px-4"
        >
          <div className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DFC99E] shadow-[0_4px_15px_rgba(197,160,89,0.25)] text-[#6D5428] text-xs font-serif tracking-[0.2em] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Tap seal to open</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
