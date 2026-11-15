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
        Location
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
        <h4 className="font-serif text-lg sm:text-xl text-[#3A2D1F] max-w-xs mx-auto leading-snug">
          {weddingData.venue.name}
        </h4>
      </motion.div>

      {/* Venue Photo with luxury border */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-[340px] rounded-2xl overflow-hidden shadow-md border border-[#DFC99E]/50 mb-6 group"
      >
        <img
          src={weddingData.venue.entranceImage}
          alt={weddingData.venue.name}
          className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-2.5 left-3 right-3 text-left">
          <p className="text-white text-xs font-serif italic drop-shadow-md">
            {weddingData.venue.address}
          </p>
        </div>
      </motion.div>

      {/* Interactive Map Card Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border-2 border-[#DFC99E]/60 bg-white p-2.5 shadow-md flex flex-col items-center"
      >
        {/* Open In Maps Header Button */}
        <div className="w-full flex items-center justify-between pb-2 px-1 border-b border-[#DFC99E]/30 mb-2">
          <div className="flex items-center space-x-1.5 text-[#8E6E34] text-xs font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-sans tracking-wide">Interactive Location</span>
          </div>
          <a
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#FAF4E8] text-[#8E6E34] border border-[#DFC99E] hover:bg-[#F2E5CC] text-[11px] font-sans font-medium transition-colors"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Map Snapshot Container */}
        <a
          href={weddingData.venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full rounded-xl overflow-hidden cursor-pointer"
        >
          <img
            src={weddingData.venue.mapImage}
            alt="Map Preview"
            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/5 transition-colors">
            <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-[#DFC99E] text-xs font-medium text-[#3A2D1F] flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>Click to Navigate</span>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  )
}

