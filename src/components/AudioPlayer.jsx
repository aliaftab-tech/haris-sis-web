import React from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'

export default function AudioPlayer({ isPlaying, togglePlay }) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={togglePlay}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#E5C378] text-[#3A2A12] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 cursor-pointer"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {/* Pulsing outer aura ring when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-[#E5C378]/40 animate-ping pointer-events-none" />
        )}
        
        {/* Play / Pause Icon styled exactly as video */}
        {isPlaying ? (
          <div className="flex items-center space-x-1">
            <span className="w-1 h-3.5 bg-[#422D0A] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-4 bg-[#422D0A] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-3 bg-[#422D0A] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        ) : (
          <Music className="w-5 h-5 text-[#422D0A] group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  )
}

