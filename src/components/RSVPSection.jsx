import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Send, CheckCircle2 } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function RSVPSection() {
  const [guestName, setGuestName] = useState('')
  const [attendance, setAttendance] = useState('Attending with Family')
  const [selectedDua, setSelectedDua] = useState(
    'Barakallahu lakuma wa baraka alaikuma wa jama\'a bainakuma fee khair.'
  )
  const [customNote, setCustomNote] = useState('')

  const duasList = [
    "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair.",
    "May Allah bless your union with endless happiness, barakah, and prosperity.",
    "Warmest congratulations! So delighted to celebrate this blessed milestone with you."
  ]

  const handleSendWhatsApp = () => {
    const nameStr = guestName.trim() ? guestName.trim() : 'A well-wisher'
    const message = [
      `Assalamu Alaikum! 🌸`,
      `Hearty congratulations to ${weddingData.groom.name} & ${weddingData.bride.name} on their Nikkah! ✨`,
      ``,
      `*Guest Name:* ${nameStr}`,
      `*Status:* ${attendance}`,
      ``,
      `*Heartfelt Dua & Wishes:*`,
      `"${selectedDua}"`,
      customNote.trim() ? `Note: ${customNote.trim()}` : null,
      ``,
      `Looking forward to celebrating with you! 🤍`
    ]
      .filter(Boolean)
      .join('\n')

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative w-full py-12 px-4 flex flex-col items-center bg-[#FAF8F5]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[370px] rounded-3xl bg-[#FFFDF9] border border-[#DFC99E]/60 p-6 shadow-sm text-center flex flex-col items-center"
      >
        {/* Title */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#8E6E34] mb-1">
          RSVP & Send Duas
        </h3>

        <p className="font-serif italic text-xs text-[#8C7B68] mb-6">
          Share your presence and prayers with the happy couple
        </p>

        {/* Guest Name Input */}
        <div className="w-full text-left mb-4">
          <label className="block font-sans text-[10px] tracking-widest text-[#8C7B68] uppercase font-semibold mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="e.g. Haris & Family"
            className="w-full px-4 py-2.5 rounded-xl border border-[#DFC99E]/50 bg-[#FAF8F5] text-xs font-serif text-[#3A2D1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 placeholder:text-[#9E8B75]/60"
          />
        </div>

        {/* Attendance Options */}
        <div className="w-full text-left mb-4">
          <label className="block font-sans text-[10px] tracking-widest text-[#8C7B68] uppercase font-semibold mb-1.5">
            Will you be attending?
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              'Attending with Family',
              'Attending Solo',
              'Sending Warm Duas from Afar'
            ].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAttendance(option)}
                className={`w-full py-2 px-3 rounded-xl border text-xs font-serif flex items-center justify-between transition-colors ${
                  attendance === option
                    ? 'border-[#C5A059] bg-[#FAF3E3] text-[#423117] font-medium'
                    : 'border-[#DFC99E]/40 bg-[#FAF8F5] text-[#6B5A49]'
                }`}
              >
                <span>{option}</span>
                {attendance === option && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Select Dua */}
        <div className="w-full text-left mb-4">
          <label className="block font-sans text-[10px] tracking-widest text-[#8C7B68] uppercase font-semibold mb-1.5">
            Choose a Wedding Blessing
          </label>
          <div className="space-y-1.5">
            {duasList.map((dua, i) => (
              <div
                key={i}
                onClick={() => setSelectedDua(dua)}
                className={`p-2.5 rounded-xl border text-xs font-serif italic cursor-pointer transition-colors ${
                  selectedDua === dua
                    ? 'border-[#C5A059] bg-[#FAF3E3] text-[#423117]'
                    : 'border-[#DFC99E]/30 bg-[#FAF8F5] text-[#7A6A5C]'
                }`}
              >
                "{dua}"
              </div>
            ))}
          </div>
        </div>

        {/* Custom Message Input */}
        <div className="w-full text-left mb-6">
          <label className="block font-sans text-[10px] tracking-widest text-[#8C7B68] uppercase font-semibold mb-1.5">
            Personal Note (Optional)
          </label>
          <textarea
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            placeholder="Add your warm wishes..."
            rows={2}
            className="w-full px-4 py-2 rounded-xl border border-[#DFC99E]/50 bg-[#FAF8F5] text-xs font-serif text-[#3A2D1F] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 resize-none placeholder:text-[#9E8B75]/60"
          />
        </div>

        {/* Send WhatsApp Button */}
        <button
          onClick={handleSendWhatsApp}
          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#F4E3BA] to-[#DFCA9F] text-[#423117] font-serif text-sm font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 border border-[#C5A059]/40 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Send className="w-4 h-4 text-[#8E6E34]" />
          <span>Send RSVP on WhatsApp</span>
        </button>
      </motion.div>
    </section>
  )
}

