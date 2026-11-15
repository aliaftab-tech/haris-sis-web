import React, { useEffect, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function RomanticPetals() {
  const [isEnabled, setIsEnabled] = useState(true)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!isEnabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Petals & Gold Dust Particles
    const particleCount = 28
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 1.2 + 0.8,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.35,
        type: i % 3 === 0 ? 'gold' : 'petal' // 1/3 gold spark, 2/3 rose petal
      })
    }

    const drawPetal = (p) => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.globalAlpha = p.opacity

      if (p.type === 'gold') {
        // Golden diamond glitter sparkle
        ctx.fillStyle = '#E5C378'
        ctx.beginPath()
        ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2)
        ctx.fill()
        // Cross sparkle
        ctx.strokeStyle = '#F8E7A2'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(-p.size * 0.6, 0)
        ctx.lineTo(p.size * 0.6, 0)
        ctx.moveTo(0, -p.size * 0.6)
        ctx.lineTo(0, p.size * 0.6)
        ctx.stroke()
      } else {
        // Soft blush/ivory rose petal
        const grad = ctx.createLinearGradient(0, 0, p.size, p.size)
        grad.addColorStop(0, '#F7CEBA')
        grad.addColorStop(0.5, '#E8B4B8')
        grad.addColorStop(1, '#FFF5EE')
        ctx.fillStyle = grad

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.bezierCurveTo(-p.size * 0.5, -p.size * 0.6, -p.size * 0.8, p.size * 0.4, 0, p.size)
        ctx.bezierCurveTo(p.size * 0.8, p.size * 0.4, p.size * 0.5, -p.size * 0.6, 0, 0)
        ctx.fill()
      }

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y += p.speedY
        p.x += Math.sin(p.y * 0.01) * 0.8 + p.speedX
        p.rotation += p.rotationSpeed

        if (p.y > height + 20) {
          p.y = -20
          p.x = Math.random() * width
        }

        drawPetal(p)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isEnabled])

  return (
    <>
      {/* Falling Canvas overlay */}
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
        />
      )}

      {/* Floating Toggle Pill at bottom-left */}
      <div className="fixed bottom-5 left-5 z-50">
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-serif backdrop-blur-md border shadow-lg transition-all duration-300 cursor-pointer ${
            isEnabled
              ? 'bg-white/85 text-[#8E6E34] border-[#DFC99E]'
              : 'bg-black/40 text-white/70 border-white/20'
          }`}
          title={isEnabled ? 'Pause falling petals' : 'Enable falling petals'}
        >
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span>{isEnabled ? 'Petals ON' : 'Petals OFF'}</span>
        </button>
      </div>
    </>
  )
}

