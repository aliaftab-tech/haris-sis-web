/**
 * Single source of truth for all wedding details.
 * To customize for Haris's sister's wedding in December:
 * simply update the values in this file!
 */

export const weddingData = {
  // Couple Information
  groom: {
    name: "Daanish",
    parents: "Mr. & Mrs. Ch. Hussaini",
    relation: "Son of"
  },
  bride: {
    name: "Adeena",
    parents: "Mr. & Mrs. Ch. Farooqi",
    relation: "Daughter of"
  },

  // Monogram & Envelope Visuals
  monogram: "D & A",
  waxSealImage: "/images/wax_seal_exact.png",
  envelopeSeamless: "/images/envelope_seamless.jpg",

  // Ceremony Type & Subtitles
  ceremony: {
    welcomePrefix: "Welcome to the",
    title: "Nikkah Ceremony",
    invitationHeading: "YOU ARE INVITED TO THE NIKKAH CEREMONY OF",
    introMessage: "Dear Friends and Family",
    loveNote: "Join us for an evening of love, laughter, duas, and unforgettable memories as we begin our forever."
  },

  // Quranic Blessing
  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    surah: "Surah Ar-Rum [30:21]",
    translation: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
  },

  // Date & Countdown
  date: {
    day: "10",
    month: "January",
    year: "2027",
    fullDateString: "Sunday, 10 January 2027",
    targetDateIso: "2027-01-10T18:00:00+04:00"
  },

  // Venue & Location
  venue: {
    city: "DUBAI",
    name: "Four Seasons Hotel in Jumeirah, Dana Ballroom",
    address: "Jumeirah Beach Road, Jumeirah 2, Dubai, United Arab Emirates",
    heroImage: "/images/venue_clean.jpg",
    entranceImage: "/images/venue_entrance.jpg",
    mapImage: "/images/map_preview.jpg",
    googleMapsUrl: "https://maps.google.com/?q=Four+Seasons+Resort+Dubai+at+Jumeirah+Beach"
  },

  // Wedding Day Timeline
  timeline: [
    {
      time: "6:00 pm",
      title: "Guest Arrival and Welcome Drinks",
      icon: "/images/icon_arch.png"
    },
    {
      time: "6:30 pm",
      title: "Bride Entrance",
      icon: "/images/icon_bride.png"
    },
    {
      time: "7:30 pm",
      title: "Salat al Isha",
      icon: "/images/icon_salat.png"
    },
    {
      time: "8:30 pm",
      title: "Buffet Opening",
      icon: "/images/icon_buffet.png"
    },
    {
      time: "10:00 pm",
      title: "Let the Fun Begin",
      icon: "sparkles"
    }
  ],

  // Dress Code
  dressCode: {
    title: "Dress Code",
    tagline: "We kindly invite our guests to dress in Traditional Pakistani Attire in soft pastel shades.",
    illustration: "/images/dress_models.png",
    recommendedShades: [
      { name: "Lavender Mist", hex: "#D4C5E9" },
      { name: "Peach Glow", hex: "#F6CDB8" },
      { name: "Pastel Buttercup", hex: "#F6E69E" },
      { name: "Blush Rose", hex: "#E8B4B8" },
      { name: "Soft Silver Sage", hex: "#CDD4C6" }
    ],
    guidelines: [
      "Please avoid wearing beige and champagne: reserved for the bride and groom.",
      "Sage green is reserved exclusively for the bridesmaids."
    ]
  },

  // WhatsApp RSVP Contact Number (can be updated for Haris's sister's wedding)
  rsvpContact: {
    whatsappNumber: "923000000000",
    defaultDua: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair. Wishing you both a lifetime of happiness, peace, and barakah!"
  },

  // Audio track extracted from original video
  audio: {
    src: "/audio/background_music.mp3",
    title: "Romantic Flute & Strings Wedding Melody"
  }
}
