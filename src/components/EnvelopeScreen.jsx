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

    // Trigger golden luxury sparkle burst
    const rect = e?.currentTarget?.getBoundingClientRect?.()
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#D4AF37', '#F5E5A4', '#C5A059', '#FFFFFF', '#E6CA65'],
      ticks: 200,
      gravity: 0.8,
      scalar: 1.1,
      shapes: ['circle', 'square']
    })

    // Slight delay before completing open transition
    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#25221F] bg-opacity-95 p-2 sm:p-4 backdrop-blur-md overflow-hidden select-none">
      {/* Outer Mobile Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[420px] h-[92vh] max-h-[860px] bg-[#FAF7F2] rounded-[32px] shadow-2xl overflow-hidden border border-[#E3DAC9] flex flex-col items-center justify-center"
      >
        {/* Subtle Damask / Floral Embossed Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(${weddingData.envelopeTexture})`,
            filter: isOpening ? 'brightness(1.08) contrast(0.95)' : 'none'
          }}
        />

        {/* Golden Light Burst on tap */}
        <AnimatePresence>
          {isOpening && (
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 3, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute z-20 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,245,215,0.95) 0%, rgba(220,180,90,0.6) 40%, rgba(255,255,255,0) 70%)',
                boxShadow: '0 0 60px 40px rgba(230,195,115,0.7)'
              }}
            />
          )}
        </AnimatePresence>

        {/* Envelope Top Flap 3D Fold Layer */}
        <motion.div
          animate={isOpening ? { rotateX: 180, opacity: 0, y: -60 } : { rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: 'top center' }}
          className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-10"
        />

        {/* Interactive Wax Seal Monogram */}
        <motion.div
          animate={isOpening ? { scale: 1.4, opacity: 0, rotate: 15 } : { scale: [1, 1.03, 1] }}
          transition={isOpening ? { duration: 0.6 } : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative z-30 cursor-pointer"
          onClick={handleOpenEnvelope}
        >
          {/* Pulsing Aura */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#D4AF37]/30 to-[#F5E5A4]/40 blur-md animate-pulse" />

          {/* Actual Wax Seal Image */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 drop-shadow-[0_12px_20px_rgba(140,105,40,0.35)] hover:scale-105 active:scale-95 transition-transform duration-300">
            <img
              src={weddingData.waxSealImage}
              alt={`${weddingData.monogram} Wax Seal`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* "Tap to Open" Instruction Pill */}
        <motion.div
          animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-12 z-30 flex flex-col items-center pointer-events-none"
        >
          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-[#DFC99E] shadow-md text-[#6D5428] text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Tap seal to open</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

