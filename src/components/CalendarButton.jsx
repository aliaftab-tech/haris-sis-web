import React, { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'
import { weddingData } from '../config/weddingData'

export default function CalendarButton() {
  const [showOptions, setShowOptions] = useState(false)

  // 12 December 2026 (Main Barat/Nikkah day)
  const eventTitle = `Wedding Celebrations (${weddingData.family.sisterTitle})`
  const eventDetails = `Mehndi: 11 Dec | Barat: 12 Dec | Walima: 13 Dec. Hosted by ${weddingData.family.eventHost}.`
  const eventLocation = `${weddingData.venue.name}, ${weddingData.venue.city}`

  // 12 Dec 2026, 18:00 to 23:30 (PKT is UTC+5 -> 13:00 to 18:30 UTC)
  const startTimeUtc = "20261212T130000Z"
  const endTimeUtc = "20261212T183000Z"

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${startTimeUtc}/${endTimeUtc}&details=${encodeURIComponent(
    eventDetails
  )}&location=${encodeURIComponent(eventLocation)}`

  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Digital Wedding Invitation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDetails}`,
      `LOCATION:${eventLocation}`,
      `DTSTART:${startTimeUtc}`,
      `DTEND:${endTimeUtc}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `Haris_Sister_Wedding_December_2026.ics`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowOptions(false)
  }

  return (
    <div className="relative my-4 flex flex-col items-center">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#F4E3BA] to-[#DFCA9F] text-[#423117] font-serif text-sm font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 border border-[#C5A059]/40 cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-[#8E6E34]" />
        <span>Save Dates to Calendar</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
      </button>

      {/* Calendar Provider Dropdown */}
      {showOptions && (
        <div className="absolute top-14 z-30 w-60 rounded-2xl bg-[#FFFDF9] border border-[#DFC99E] shadow-xl p-2 flex flex-col space-y-1">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowOptions(false)}
            className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-serif text-[#3A2D1F] hover:bg-[#FAF2E1] transition-colors"
          >
            <span>Google Calendar (11-13 Dec)</span>
          </a>
          <button
            onClick={downloadIcsFile}
            className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-serif text-[#3A2D1F] hover:bg-[#FAF2E1] transition-colors text-left"
          >
            <span>Apple / Outlook Calendar (.ics)</span>
          </button>
        </div>
      )}
    </div>
  )
}
