import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnvelopeScreen from './components/EnvelopeScreen'
import AudioPlayer from './components/AudioPlayer'
import HeroSection from './components/HeroSection'
import ScratchDateSection from './components/ScratchDateSection'
import InvitationCardSection from './components/InvitationCardSection'
import TimelineSection from './components/TimelineSection'
import CountdownSection from './components/CountdownSection'
import LocationSection from './components/LocationSection'
import DressCodeSection from './components/DressCodeSection'
import { weddingData } from './config/weddingData'

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Start audio on envelope opening
  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpened(true)
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio autoplay blocked by browser policy:", err)
        })
    }
  }

  // Toggle audio play/pause
  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error)
    }
  }

  return (
    <div className="min-h-screen bg-[#2D2825] flex justify-center items-start sm:py-6 overflow-x-hidden selection:bg-[#E5C378]/30">
      {/* Hidden Loopable Background Audio */}
      <audio
        ref={audioRef}
        src={weddingData.audio.src}
        preload="auto"
        loop
      />

      {/* 3D Wax Seal Envelope Screen (Shown initially until guest taps) */}
      <AnimatePresence>
        {!isEnvelopeOpened && (
          <EnvelopeScreen onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Card Container */}
      <motion.main
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isEnvelopeOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[430px] min-h-screen bg-[#FAF8F5] sm:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border sm:border-[#DFC99E]/40 overflow-hidden relative flex flex-col"
      >
        {/* Top iOS Status Bar Simulator for authentic phone look on desktop */}
        <div className="w-full pt-3 px-6 pb-1 flex justify-between items-center text-[11px] font-sans font-medium text-[#7C6C5C] bg-[#F7F4EE] sm:block hidden">
          <span>20:40</span>
          <div className="w-24 h-4 bg-black/80 rounded-full mx-auto" />
        </div>

        {/* Section 1: Hero & Arch Screen */}
        <HeroSection />

        {/* Section 2: Interactive Scratch Date */}
        <ScratchDateSection />

        {/* Section 3: Formal Parents Invitation Announcement */}
        <InvitationCardSection />

        {/* Section 4: Chronological Wedding Timeline */}
        <TimelineSection />

        {/* Section 5: Real-time Countdown Timer */}
        <CountdownSection />

        {/* Section 6: Location & Interactive Map */}
        <LocationSection />

        {/* Section 7: Dress Code & Recommended Pastel Shades */}
        <DressCodeSection />

        {/* Bottom Home Indicator Simulator for desktop view */}
        <div className="w-full py-2 flex justify-center bg-[#FAF8F5] sm:block hidden">
          <div className="w-32 h-1 bg-black/20 rounded-full mx-auto" />
        </div>
      </motion.main>

      {/* Persistent Floating Audio Toggle */}
      {isEnvelopeOpened && (
        <AudioPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
      )}
    </div>
  )
}

