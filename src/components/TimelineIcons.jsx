import React from 'react'

// Bespoke Royal Gold Vector Icons for Timeline (Razor sharp on all Retina & 4K screens)

export function WelcomeDrinksIcon({ className = "w-7 h-7 text-[#B58A3E]" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ornate Archway */}
      <path d="M12 42V20C12 13.3726 17.3726 8 24 8C30.6274 8 36 13.3726 36 20V42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 42V22C16 17.5817 19.5817 14 24 14C28.4183 14 32 17.5817 32 22V42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3"/>
      {/* Welcome Goblet / Drink Chalice in center */}
      <path d="M21 24H27V29C27 30.6569 25.6569 32 24 32C22.3431 32 21 30.6569 21 29V24Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M24 32V38M20 38H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Floral Leaves at Crown */}
      <circle cx="24" cy="6" r="2" fill="currentColor"/>
      <path d="M18 10C19.5 8 22 7 24 7C26 7 28.5 8 30 10" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}

export function BrideEntranceIcon({ className = "w-7 h-7 text-[#B58A3E]" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Royal Bride with Flowing Dupatta & Silhouette */}
      <path d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      {/* Maang Tikka / Headpiece */}
      <circle cx="24" cy="5.5" r="1" fill="currentColor"/>
      <line x1="24" y1="6.5" x2="24" y2="8" stroke="currentColor" strokeWidth="1"/>
      {/* Bridal Gown / Lehenga Silhouette */}
      <path d="M19 18C16 23 13 32 11 42H37C35 32 32 23 29 18C27.5 19.5 24 20 24 20C24 20 20.5 19.5 19 18Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* Flowing Veil / Dupatta Drapes */}
      <path d="M15 14C12 20 10 30 8 40" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 2" strokeLinecap="round"/>
      <path d="M33 14C36 20 38 30 40 40" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 2" strokeLinecap="round"/>
      {/* Waist Jewelry belt */}
      <path d="M19.5 26C22 27 26 27 28.5 26" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}

export function SalatIshaIcon({ className = "w-7 h-7 text-[#B58A3E]" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sacred Mosque Dome */}
      <path d="M24 6C24 6 15 13 15 22H33C33 13 24 6 24 6Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* Crescent at top */}
      <path d="M24 3C24.8 3 25.5 3.7 25.5 4.5C25.5 5.3 24.8 6 24 6C24.5 5.5 24.5 4 24 3Z" fill="currentColor"/>
      {/* Pillars / Archway Base */}
      <path d="M13 22V42M35 22V42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M17 42V28C17 24.134 20.134 21 24 21C27.866 21 31 24.134 31 28V42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Hanging Lantern inside */}
      <line x1="24" y1="21" x2="24" y2="28" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M22 28H26L25 32H23L22 28Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
      <circle cx="24" cy="30" r="1.5" fill="#FFF8DC"/>
    </svg>
  )
}

export function BanquetBuffetIcon({ className = "w-7 h-7 text-[#B58A3E]" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Royal Cloche / Serving Dome */}
      <path d="M10 32C10 21 16 14 24 14C32 14 38 21 38 32H10Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.8"/>
      {/* Dome Crown Knob */}
      <circle cx="24" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="24" y1="14" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5"/>
      {/* Serving Platter Tray */}
      <path d="M6 34C6 33.4477 6.44772 33 7 33H41C41.5523 33 42 33.4477 42 34C42 34.5523 41.5523 35 41 35H7C6.44772 35 6 34.5523 6 34Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
      {/* Steam / Aroma curls */}
      <path d="M19 8C19 6.5 20.5 5.5 20.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M29 8C29 6.5 27.5 5.5 27.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Platter Base */}
      <path d="M14 36L16 40H32L34 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function CelebrationPartyIcon({ className = "w-7 h-7 text-[#B58A3E]" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Central Star Sparkle */}
      <path d="M24 6L26.5 18.5L39 21L26.5 23.5L24 36L21.5 23.5L9 21L21.5 18.5L24 6Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Mini Companion Stars */}
      <path d="M35 10L36 14L40 15L36 16L35 20L34 16L30 15L34 14L35 10Z" fill="currentColor"/>
      <path d="M13 28L14 32L18 33L14 34L13 38L12 34L8 33L12 32L13 28Z" fill="currentColor"/>
      {/* Sparkle rays */}
      <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="36" cy="34" r="1.5" fill="currentColor"/>
      <circle cx="24" cy="42" r="1.5" fill="currentColor"/>
    </svg>
  )
}

