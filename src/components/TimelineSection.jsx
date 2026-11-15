import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function TimelineSection() {
  return (
    <section className="relative w-full py-12 px-4 flex flex-col items-center bg-[#FAF8F5]">
      {/* Section Header */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-4xl sm:text-5xl text-[#8E6E34] text-center"
      >
        Wedding Timeline
      </motion.h3>

      {/* Decorative Gold Flourish */}
      <div className="flex items-center space-x-3 mt-1 mb-10 opacity-70">
        <span className="w-10 h-[1px] bg-[#C5A059]" />
        <span className="text-[#C5A059] text-xs">✦</span>
        <span className="w-10 h-[1px] bg-[#C5A059]" />
      </div>

      {/* Timeline Tree Container */}
      <div className="relative w-full max-w-sm flex flex-col items-center">
        {/* Central Vertical Golden Line */}
        <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#C5A059]/10 via-[#C5A059]/70 to-[#C5A059]/10" />

        {/* Timeline Events */}
        {weddingData.timeline.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative w-full grid grid-cols-2 gap-6 my-5 items-center"
            >
              {/* Central Diamond Node on the line */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 rotate-45 border border-[#C5A059] bg-[#FAF8F5] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#C5A059]" />
              </div>

              {/* Left Column */}
              <div className={`flex ${isLeft ? 'justify-end pr-4' : 'justify-end pr-4 text-right'}`}>
                {isLeft ? (
                  /* Icon on Left */
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {item.icon === 'sparkles' ? (
                      <div className="w-12 h-12 rounded-full border border-[#C5A059]/50 bg-[#FFFDF9] flex items-center justify-center text-[#C5A059]">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    ) : (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain drop-shadow-sm"
                      />
                    )}
                  </div>
                ) : (
                  /* Text on Left */
                  <div className="flex flex-col items-end">
                    <span className="font-serif italic text-lg sm:text-xl text-[#8E6E34]">
                      {item.time}
                    </span>
                    <span className="font-serif text-xs sm:text-sm text-[#3A2D1F] font-medium leading-snug">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className={`flex ${isLeft ? 'justify-start pl-4 text-left' : 'justify-start pl-4'}`}>
                {isLeft ? (
                  /* Text on Right */
                  <div className="flex flex-col items-start">
                    <span className="font-serif italic text-lg sm:text-xl text-[#8E6E34]">
                      {item.time}
                    </span>
                    <span className="font-serif text-xs sm:text-sm text-[#3A2D1F] font-medium leading-snug">
                      {item.title}
                    </span>
                  </div>
                ) : (
                  /* Icon on Right */
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {item.icon === 'sparkles' ? (
                      <div className="w-12 h-12 rounded-full border border-[#C5A059]/50 bg-[#FFFDF9] flex items-center justify-center text-[#C5A059]">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    ) : (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain drop-shadow-sm"
                      />
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

