import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnvelopeScreen from './components/EnvelopeScreen'
import AudioPlayer from './components/AudioPlayer'
import HeroSection from './components/HeroSection'
import QuranBlessingSection from './components/QuranBlessingSection'
import ScratchDateSection from './components/ScratchDateSection'
import EventsProgramSection from './components/EventsProgramSection'
import CalendarButton from './components/CalendarButton'
import InvitationCardSection from './components/InvitationCardSection'
import TimelineSection from './components/TimelineSection'
import CountdownSection from './components/CountdownSection'
import LocationSection from './components/LocationSection'
import DressCodeSection from './components/DressCodeSection'
import RSVPSection from './components/RSVPSection'
import ShareBar from './components/ShareBar'
import RomanticPetals from './components/RomanticPetals'
import { weddingData } from './config/weddingData'

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Start background audio on envelope opening
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
    <div className="w-full min-h-[100dvh] bg-[#FAF8F5] sm:bg-[#1E1B18] flex justify-center items-start sm:py-6 overflow-x-hidden selection:bg-[#E5C378]/30">
      {/* Hidden Loopable Background Audio */}
      <audio
        ref={audioRef}
        src={weddingData.audio.src}
        preload="auto"
        loop
      />

      {/* 3D 4-Flap Wax Seal Envelope Screen (Shown initially until guest taps) */}
      <AnimatePresence>
        {!isEnvelopeOpened && (
          <EnvelopeScreen onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {/* Floating Romantic Petals & Gold Dust Effect (Visible after opening) */}
      {isEnvelopeOpened && <RomanticPetals />}

      {/* Main Wedding Invitation Card Container (100% full screen on mobile, luxury phone mockup on desktop) */}
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isEnvelopeOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[430px] min-h-[100dvh] bg-[#FAF8F5] sm:rounded-[36px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] sm:border sm:border-[#DFC99E]/40 overflow-hidden relative flex flex-col rounded-none border-none p-0"
      >
        {/* Desktop iPhone Dynamic Island Simulator */}
        <div className="w-full pt-3 px-6 pb-1 justify-between items-center text-[11px] font-sans font-medium text-[#7C6C5C] bg-[#F7F4EE] sm:flex hidden">
          <span>20:40</span>
          <div className="w-24 h-4 bg-black/80 rounded-full mx-auto" />
          <span>5G</span>
        </div>

        {/* 1. Hero & Palace Arch Scene (4K Generated Artwork & Clean Gold Typography) */}
        <HeroSection />

        {/* 2. Quranic Marriage Blessing Card */}
        <QuranBlessingSection />

        {/* 3. Interactive Scratch Date Cards (11 Mehndi, 12 Barat, 13 Walima) */}
        <ScratchDateSection />

        {/* 4. "Save Dates to Calendar" 1-Click Feature */}
        <CalendarButton />

        {/* 5. 3-Day Celebrations Program (Mehndi | Barat | Walima Tabs) */}
        <EventsProgramSection />

        {/* 6. Formal Family Invitation Announcement */}
        <InvitationCardSection />

        {/* 7. Chronological Barat Day Timeline (Bespoke Royal Vector SVG Icons) */}
        <TimelineSection />

        {/* 8. Real-Time Countdown to 11th December 2026 */}
        <CountdownSection />

        {/* 9. 4K Venue Photography & Interactive Google Maps */}
        <LocationSection />

        {/* 10. 4K Couture Fashion Illustration & Pastel Palette */}
        <DressCodeSection />

        {/* 11. WhatsApp RSVP & Heartfelt Dua Generator */}
        <RSVPSection />

        {/* 12. One-Tap Share Bar & Family Blessing Note */}
        <ShareBar />

        {/* Desktop Home Bar Indicator */}
        <div className="w-full py-2 justify-center bg-[#FAF8F5] sm:flex hidden">
          <div className="w-32 h-1 bg-black/20 rounded-full mx-auto" />
        </div>
      </motion.main>

      {/* Persistent Floating Audio Toggle (Bottom-Right) */}
      {isEnvelopeOpened && (
        <AudioPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
      )}
    </div>
  )
}
