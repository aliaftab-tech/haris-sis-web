import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../config/weddingData'

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(weddingData.countdownTarget).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const padZero = (num) => String(num).padStart(2, '0')

  return (
    <section className="relative w-full py-12 px-4 flex flex-col items-center bg-[#FAF8F5] text-center">
      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-4xl sm:text-5xl text-[#8E6E34]"
      >
        Celebrations Begin In
      </motion.h3>

      <p className="font-serif italic text-xs text-[#8C7B68] mt-0.5 mb-6">
        Counting down to 11th December 2026
      </p>

      {/* Live Digits Display */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center space-x-2 sm:space-x-3 text-[#A8813B]"
      >
        {/* Days */}
        <div className="flex flex-col items-center min-w-[55px] sm:min-w-[65px] p-2.5 rounded-2xl bg-[#FFFDF9] border border-[#DFC99E]/60 shadow-sm">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {timeLeft.days}
          </span>
          <span className="font-serif text-[10px] sm:text-[11px] text-[#8C7B68] tracking-widest uppercase mt-0.5">
            Days
          </span>
        </div>

        <span className="text-xl sm:text-2xl font-light text-[#C5A059]/60">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center min-w-[55px] sm:min-w-[65px] p-2.5 rounded-2xl bg-[#FFFDF9] border border-[#DFC99E]/60 shadow-sm">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {padZero(timeLeft.hours)}
          </span>
          <span className="font-serif text-[10px] sm:text-[11px] text-[#8C7B68] tracking-widest uppercase mt-0.5">
            Hours
          </span>
        </div>

        <span className="text-xl sm:text-2xl font-light text-[#C5A059]/60">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center min-w-[55px] sm:min-w-[65px] p-2.5 rounded-2xl bg-[#FFFDF9] border border-[#DFC99E]/60 shadow-sm">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {padZero(timeLeft.minutes)}
          </span>
          <span className="font-serif text-[10px] sm:text-[11px] text-[#8C7B68] tracking-widest uppercase mt-0.5">
            Minutes
          </span>
        </div>

        <span className="text-xl sm:text-2xl font-light text-[#C5A059]/60">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center min-w-[55px] sm:min-w-[65px] p-2.5 rounded-2xl bg-[#FFFDF9] border border-[#DFC99E]/60 shadow-sm">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {padZero(timeLeft.seconds)}
          </span>
          <span className="font-serif text-[10px] sm:text-[11px] text-[#8C7B68] tracking-widest uppercase mt-0.5">
            Seconds
          </span>
        </div>
      </motion.div>
    </section>
  )
}
