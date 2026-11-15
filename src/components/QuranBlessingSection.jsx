import React from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../config/weddingData'

export default function QuranBlessingSection() {
  return (
    <section className="relative w-full py-8 px-4 flex flex-col items-center bg-[#FAF8F5]">
      {/* Decorative Ornate Frame */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[370px] rounded-2xl bg-[#FFFDF9] border border-[#DFC99E]/50 p-6 text-center shadow-sm overflow-hidden"
      >
        {/* Subtle Arch Decor at Top */}
        <div className="flex items-center justify-center space-x-2 mb-3 opacity-70">
          <span className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-[#C5A059] text-xs">۞</span>
          <span className="w-8 h-[1px] bg-[#C5A059]" />
        </div>

        {/* Arabic Verse */}
        <p className="font-serif text-lg sm:text-xl text-[#8E6E34] leading-relaxed mb-3 dir-rtl font-medium">
          {weddingData.quranVerse.arabic}
        </p>

        {/* English Translation */}
        <p className="font-serif italic text-xs sm:text-sm text-[#665749] leading-relaxed mb-3">
          "{weddingData.quranVerse.translation}"
        </p>

        {/* Surah Citation */}
        <span className="font-sans text-[10px] tracking-[0.2em] text-[#9E8B75] uppercase font-semibold">
          — {weddingData.quranVerse.surah}
        </span>
      </motion.div>
    </section>
  )
}

