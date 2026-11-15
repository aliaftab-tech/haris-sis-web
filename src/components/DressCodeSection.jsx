import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../config/weddingData'

export default function DressCodeSection() {
  const [activeTooltip, setActiveTooltip] = useState(null)

  return (
    <section className="relative w-full pt-10 pb-16 px-4 flex flex-col items-center bg-[#FAF8F5] text-center">
      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-4xl sm:text-5xl text-[#8E6E34]"
      >
        {weddingData.dressCode.title}
      </motion.h3>

      {/* Decorative Gold Flourish */}
      <div className="flex items-center space-x-3 mt-1 mb-6 opacity-70">
        <span className="w-10 h-[1px] bg-[#C5A059]" />
        <span className="text-[#C5A059] text-xs">✤</span>
        <span className="w-10 h-[1px] bg-[#C5A059]" />
      </div>

      {/* Attire Models Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[300px] mb-6 flex justify-center"
      >
        <img
          src={weddingData.dressCode.illustration}
          alt="Traditional Pakistani Attire"
          className="w-full max-h-52 object-contain drop-shadow-sm"
        />
      </motion.div>

      {/* Invitation Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[300px] mb-6"
      >
        <p className="font-serif text-xs sm:text-sm text-[#52463B] leading-relaxed">
          We kindly invite our guests to dress in
        </p>
        <p className="font-script text-2xl sm:text-3xl text-[#8E6E34] my-0.5">
          Traditional Pakistani Attire
        </p>
        <p className="font-serif text-xs sm:text-sm text-[#52463B]">
          in soft pastel shades.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-[#DFC99E] mb-5 opacity-60" />

      {/* Recommended Shades Header */}
      <p className="font-serif italic text-xs text-[#8C7B68] mb-4">
        Recommended shades
      </p>

      {/* Color Palette Swatches */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6"
      >
        {weddingData.dressCode.recommendedShades.map((shade, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <button
              onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
              onMouseEnter={() => setActiveTooltip(index)}
              onMouseLeave={() => setActiveTooltip(null)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 shadow-sm hover:scale-110 active:scale-95 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              style={{ backgroundColor: shade.hex }}
              aria-label={shade.name}
            />
            {/* Tooltip on tap/hover */}
            {activeTooltip === index && (
              <span className="absolute -bottom-7 whitespace-nowrap px-2 py-0.5 rounded bg-[#3A2D1F] text-white text-[10px] font-sans shadow-md z-10 pointer-events-none animate-fade-in">
                {shade.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-[#DFC99E] mb-5 opacity-60" />

      {/* Dress Code Guidelines */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[310px] space-y-2 px-2"
      >
        {weddingData.dressCode.guidelines.map((rule, idx) => (
          <p key={idx} className="font-serif italic text-xs text-[#7A6A5C] leading-snug">
            {rule}
          </p>
        ))}
      </motion.div>

      {/* Footer Branding / Floral Decor matching video */}
      <div className="mt-12 flex flex-col items-center opacity-60">
        <div className="w-8 h-[1px] bg-[#C5A059] mb-2" />
        <span className="font-sans text-[10px] tracking-widest uppercase text-[#96826F]">
          With Compliments & Duas
        </span>
      </div>
    </section>
  )
}

