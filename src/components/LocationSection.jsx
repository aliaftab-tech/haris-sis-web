import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function LocationSection() {
  return (
    <section className="relative w-full py-10 px-4 flex flex-col items-center bg-[#FAF8F5] text-center">
      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-script text-4xl sm:text-5xl text-[#8E6E34]"
      >
        Venue & Location
      </motion.h3>

      {/* Decorative Gold Flourish */}
      <div className="flex items-center space-x-3 mt-1 mb-4 opacity-70">
        <span className="w-10 h-[1px] bg-[#C5A059]" />
        <span className="text-[#C5A059] text-xs">✦</span>
        <span className="w-10 h-[1px] bg-[#C5A059]" />
      </div>

      {/* City & Venue Title */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 px-4"
      >
        <span className="block font-sans text-xs tracking-[0.3em] uppercase text-[#6B5A49] font-semibold mb-1">
          {weddingData.venue.city}
        </span>
        <h4 className="font-serif text-lg sm:text-xl text-[#3A2D1F] max-w-xs mx-auto leading-snug font-medium">
          {weddingData.venue.name}
        </h4>
      </motion.div>

      {/* 4K Venue Photo with Luxury Frame */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-[350px] rounded-3xl overflow-hidden shadow-lg border border-[#DFC99E]/60 mb-6 group"
      >
        <img
          src={weddingData.venueImage}
          alt={weddingData.venue.name}
          className="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 right-4 text-left">
          <p className="text-white text-xs font-serif italic drop-shadow-md">
            {weddingData.venue.address}
          </p>
        </div>
      </motion.div>

      {/* Interactive Map Navigation Trigger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-[350px]"
      >
        <a
          href={weddingData.venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3.5 rounded-2xl border border-[#DFC99E] bg-[#FFFDF9] hover:bg-[#FAF4E8] text-[#7A5C28] shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center space-x-2 text-left">
            <div className="w-9 h-9 rounded-full bg-[#FAF3E3] border border-[#DFC99E] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#8E6E34]" />
            </div>
            <div>
              <span className="block text-xs font-serif font-bold text-[#3A2D1F]">
                Get Venue Directions
              </span>
              <span className="block text-[11px] font-serif text-[#7A6A5C]">
                Open in Google Maps / Navigation
              </span>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#8E6E34] shrink-0" />
        </a>
      </motion.div>
    </section>
  )
}
