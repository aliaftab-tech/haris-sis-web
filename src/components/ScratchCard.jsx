import React, { useRef, useEffect, useState } from 'react'

export default function ScratchCard({ value, label, onScratchComplete }) {
  const canvasRef = useRef(null)
  const isScratching = useRef(false)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Render Luxury Gold Metallic Foil
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#F5E4B2')
    gradient.addColorStop(0.3, '#DFC58C')
    gradient.addColorStop(0.6, '#F8E8C0')
    gradient.addColorStop(1, '#C9A765')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add subtle shimmer speckles on the foil
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const r = Math.random() * 1.5
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // Border line on foil
    ctx.strokeStyle = '#B39148'
    ctx.lineWidth = 1
    ctx.strokeRect(4, 4, width - 8, height - 8)
  }, [])

  const scratch = (clientX, clientY) => {
    if (isRevealed) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 16, 0, Math.PI * 2)
    ctx.fill()

    checkScratchPercentage()
  }

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current
    if (!canvas || isRevealed) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const width = canvas.offsetWidth * dpr
    const height = canvas.offsetHeight * dpr

    // Sample pixels to compute clear ratio
    try {
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data
      let clearCount = 0
      const totalPixels = data.length / 4

      // Sample every 16th pixel for high performance
      for (let i = 3; i < data.length; i += 64) {
        if (data[i] === 0) {
          clearCount++
        }
      }

      const ratio = clearCount / (totalPixels / 16)
      if (ratio > 0.4) {
        setIsRevealed(true)
        // Clear entire canvas
        ctx.clearRect(0, 0, width, height)
        if (onScratchComplete) onScratchComplete()
      }
    } catch {
      // Ignore if context read blocked
    }
  }

  // Mouse Handlers
  const handleMouseDown = (e) => {
    isScratching.current = true
    scratch(e.clientX, e.clientY)
  }

  const handleMouseMove = (e) => {
    if (!isScratching.current) return
    scratch(e.clientX, e.clientY)
  }

  const handleMouseUp = () => {
    isScratching.current = false
  }

  // Touch Handlers
  const handleTouchStart = (e) => {
    isScratching.current = true
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e) => {
    if (!isScratching.current) return
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleTouchEnd = () => {
    isScratching.current = false
  }

  return (
    <div className="flex flex-col items-center">
      {/* Scratch Box */}
      <div 
        className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden shadow-md border border-[#DFC99E] bg-[#FFFDF9] cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Revealed Content Underneath */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
          <span className="font-display font-medium text-2xl sm:text-3xl text-[#3A2D1F]">
            {value}
          </span>
        </div>

        {/* Scratchable Canvas Layer */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full touch-none"
          />
        )}
      </div>

      {/* Sublabel below card (DAY, MONTH, YEAR) */}
      <span className="mt-2 text-[11px] font-sans tracking-[0.25em] text-[#8C7B68] uppercase font-medium">
        {label}
      </span>
    </div>
  )
}

