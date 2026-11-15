import React from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../config/weddingData'

export default function InvitationCardSection() {
  return (
    <section className="relative w-full py-10 px-4 flex flex-col items-center bg-[#FAF8F5]">
      {/* Luxury Arch Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[370px] bg-[#FFFDF9] rounded-t-[100px] rounded-b-[20px] p-6 sm:p-8 text-center border-2 border-[#DFC99E]/60 shadow-[0_10px_35px_rgba(200,165,100,0.12)] overflow-hidden"
      >
        {/* Subtle inner double border */}
        <div className="absolute inset-2.5 rounded-t-[90px] rounded-b-[15px] border border-[#DFC99E]/40 pointer-events-none" />

        {/* Bismillah Calligraphy */}
        <div className="pt-4 pb-3">
          <p className="font-serif text-xl sm:text-2xl text-[#8E6E34] tracking-wider leading-relaxed">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>

        {/* Invitation Heading */}
        <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-[#8C7B68] font-medium uppercase mt-2 mb-4 leading-relaxed">
          {weddingData.ceremony.invitationHeading}
        </p>

        {/* Groom Section */}
        <div className="my-2">
          <h4 className="font-script text-4xl sm:text-5xl text-[#3A2D1F]">
            {weddingData.groom.name}
          </h4>
          <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-[#8C7B68] uppercase mt-1">
            {weddingData.groom.relation} {weddingData.groom.parents}
          </p>
        </div>

        {/* "With" Divider */}
        <div className="my-3 flex items-center justify-center space-x-3">
          <span className="w-8 h-[1px] bg-[#DFC99E]" />
          <span className="font-script text-2xl text-[#A37B39]">With</span>
          <span className="w-8 h-[1px] bg-[#DFC99E]" />
        </div>

        {/* Bride Section */}
        <div className="my-2">
          <h4 className="font-script text-4xl sm:text-5xl text-[#3A2D1F]">
            {weddingData.bride.name}
          </h4>
          <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-[#8C7B68] uppercase mt-1">
            {weddingData.bride.relation} {weddingData.bride.parents}
          </p>
        </div>

        {/* Flourish Divider */}
        <div className="my-5 flex items-center justify-center opacity-60">
          <span className="w-12 h-[1px] bg-[#C5A059]" />
          <span className="mx-2 text-xs text-[#C5A059]">❖</span>
          <span className="w-12 h-[1px] bg-[#C5A059]" />
        </div>

        {/* Family Message */}
        <div className="pb-4">
          <p className="font-script text-2xl text-[#8E6E34] mb-2">
            {weddingData.ceremony.introMessage}
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#665749] leading-relaxed max-w-[280px] mx-auto">
            "{weddingData.ceremony.loveNote}"
          </p>
        </div>

        {/* Bottom Floral Corners Accent */}
        <div className="absolute bottom-1 left-2 w-10 h-10 opacity-30 pointer-events-none border-b-2 border-l-2 border-[#C5A059] rounded-bl-lg" />
        <div className="absolute bottom-1 right-2 w-10 h-10 opacity-30 pointer-events-none border-b-2 border-r-2 border-[#C5A059] rounded-br-lg" />
      </motion.div>
    </section>
  )
}

