import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Clock, MapPin, Palette } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function EventsProgramSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative w-full py-12 px-4 flex flex-col items-center bg-[#FAF8F5]">
      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-4xl sm:text-5xl text-[#8E6E34] text-center"
      >
        Celebration Itinerary
      </motion.h3>

      <p className="font-serif italic text-xs text-[#8C7B68] mt-1 mb-6">
        Three days of love, traditions, and togetherness
      </p>

      {/* Event Selector Tabs */}
      <div className="flex items-center space-x-1.5 p-1 bg-[#F2EDE4] rounded-full border border-[#DFC99E]/60 mb-6 max-w-sm w-full justify-between">
        {weddingData.events.map((ev, index) => (
          <button
            key={ev.id}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 px-2.5 rounded-full text-xs font-serif transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? 'bg-[#FFFDF9] text-[#7A5C28] font-bold shadow-md border border-[#DFC99E]/70'
                : 'text-[#8C7B68] hover:text-[#524434]'
            }`}
          >
            <span className="block text-[10px] tracking-wider uppercase font-sans">
              {ev.dayNumber} DEC
            </span>
            <span className="block text-xs font-serif truncate">
              {ev.name.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Event Card Details */}
      {weddingData.events.map((ev, index) => {
        if (index !== activeTab) return null

        return (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-[370px] rounded-3xl bg-[#FFFDF9] border-2 border-[#DFC99E]/70 p-6 shadow-md flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Top Urdu Title */}
            <span className="font-serif text-2xl text-[#C5A059] opacity-90 mb-1">
              {ev.urduTitle}
            </span>

            {/* Event Name */}
            <h4 className="font-serif text-2xl sm:text-3xl text-[#3A2D1F] font-semibold mb-1">
              {ev.name}
            </h4>

            {/* Date Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#FAF3E3] border border-[#DFC99E] text-xs font-serif text-[#7A5C28] my-2 font-medium">
              <span>{ev.date}</span>
            </div>

            {/* Time & Venue */}
            <div className="w-full my-4 space-y-2 text-left bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#DFC99E]/40">
              <div className="flex items-center space-x-2 text-xs font-serif text-[#423117]">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Time: <strong>{ev.time}</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-serif text-[#423117]">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Venue: <strong>{ev.venue}</strong></span>
              </div>
              <div className="flex items-start space-x-2 text-xs font-serif text-[#423117]">
                <Palette className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Dress Theme: <em className="text-[#6B5A49]">{ev.dressTheme}</em></span>
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-2 text-xs font-serif italic text-[#7A6A5C] leading-relaxed">
              "{ev.highlights}"
            </div>

            {/* Subtle Corner Flourishes */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#C5A059]/40 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#C5A059]/40 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#C5A059]/40 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#C5A059]/40 rounded-br-lg pointer-events-none" />
          </motion.div>
        )
      })}
    </section>
  )
}

