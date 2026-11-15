import React, { useState } from 'react'
import { Share2, Check, Copy } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function ShareBar() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareData = {
      title: `${weddingData.ceremony.title}: ${weddingData.groom.name} & ${weddingData.bride.name}`,
      text: `You're warmly invited to celebrate the wedding of ${weddingData.groom.name} & ${weddingData.bride.name}! ✨`,
      url: window.location.href
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // User cancelled or blocked
      }
    } else {
      // Fallback: Copy link
      try {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      } catch {
        // Fallback prompt
      }
    }
  }

  return (
    <div className="w-full py-6 flex flex-col items-center justify-center bg-[#FAF8F5]">
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-[#DFC99E] bg-[#FFFDF9] text-[#7A6237] text-xs font-serif shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 font-medium">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Share Invitation with Family</span>
          </>
        )}
      </button>

      {/* Gift & Duas Blessing Footer */}
      <p className="mt-8 text-[11px] font-serif italic text-[#8C7B68] max-w-[260px] text-center leading-relaxed">
        "Your presence, prayers, and heartfelt duas are the greatest gifts of all."
      </p>
    </div>
  )
}

