/**
 * Single source of truth for Ali Hamza & Fariha Tariq's Wedding (December 2026).
 * Mehndi: 11 Dec | Barat: 12 Dec | Walima: 13 Dec
 * Host: Haris & Family
 */

export const weddingData = {
  // Couple & Family Details
  family: {
    eventHost: "Haris & Family",
    sisterTitle: "Beloved Sister's Wedding",
  },
  groom: {
    name: "Ali Hamza",
    parents: "Mr. Ghulam Sabir",
    relation: "Son of"
  },
  bride: {
    name: "Fariha Tariq",
    parents: "Mr. Tariq Muhammad Umar",
    relation: "Daughter of"
  },

  // Monogram & 4K Visual Assets
  monogram: "A & F",
  waxSealImage: "/images/wax_seal_af_couture.png",
  envelopeImage: "/images/envelope_pure_4k.jpg",
  heroImage: "/images/hero_palace_4k.jpg",
  venueImage: "/images/venue_luxury_ballroom.jpg",
  dressCodeImage: "/images/dresscode_pastel_couture.png",

  // Ceremony Quotes & Headings
  ceremony: {
    welcomePrefix: "In the Name of Allah, the Most Gracious, the Most Merciful",
    title: "Wedding Celebrations",
    invitationHeading: "YOU ARE CORDIALLY INVITED TO CELEBRATE THE AUSPICIOUS NIKKAH & WEDDING OF",
    introMessage: "Dear Respected Family & Friends",
    loveNote: "Join us with your warm presence and heartfelt duas as we celebrate this blessed milestone and begin our eternal journey."
  },

  // 3-Day Wedding Events (11, 12, 13 December 2026)
  events: [
    {
      id: "mehndi",
      name: "Mehndi Ceremony",
      urduTitle: "مَہندی و مایوں",
      date: "Friday, 11th December 2026",
      dayNumber: "11",
      month: "DEC",
      year: "2026",
      time: "07:00 PM",
      venue: "The Royal Marquee / Grand Lawn",
      themeColor: "#E09F3E",
      dressTheme: "Vibrant Yellows, Festive Green, Mustard & Traditional Kurtas",
      highlights: "Rasm-e-Henna, Dholak Sangeet, Traditional Feasts & Musical Night"
    },
    {
      id: "barat",
      name: "Barat & Nikkah",
      urduTitle: "بَارات و نکاح",
      date: "Saturday, 12th December 2026",
      dayNumber: "12",
      month: "DEC",
      year: "2026",
      time: "06:00 PM",
      venue: "Grand Crystal Ballroom, Luxury Hotel",
      themeColor: "#C5A059",
      dressTheme: "Royal Traditional Sherwanis, Bridal Lehengas & Formal Attire",
      highlights: "Baraat Welcome, Sacred Nikkah Vows, Royal Feast & Emotional Rukhsati"
    },
    {
      id: "walima",
      name: "Walima Reception",
      urduTitle: "دعوتِ ولیمہ",
      date: "Sunday, 13th December 2026",
      dayNumber: "13",
      month: "DEC",
      year: "2026",
      time: "07:30 PM",
      venue: "The Imperial Ballroom & Courtyard",
      themeColor: "#8E6E34",
      dressTheme: "Soft Pastel Shades, Glamour Chiffons & Black Tie Suits",
      highlights: "Couple Grand Entrance, Royal Banquet Dinner & Family Duas"
    }
  ],

  // Primary countdown to first day (11 December 2026, 19:00 PKT)
  countdownTarget: "2026-12-11T19:00:00+05:00",

  // Quranic Blessing
  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    surah: "Surah Ar-Rum [30:21]",
    translation: "And among His signs is that He created for you mates from among yourselves that you may dwell in tranquility with them; and He placed between you affection and mercy."
  },

  // Venue Details
  venue: {
    city: "ISLAMABAD / LAHORE",
    name: "The Grand Royal Palace & Ballroom",
    address: "Grand Avenue, Luxury Enclave",
    googleMapsUrl: "https://maps.google.com/?q=Islamabad+Serena+Hotel"
  },

  // Barat Day Timeline
  timeline: [
    {
      time: "6:00 PM",
      title: "Guest Arrival & Welcome Drinks",
      desc: "Warm welcome with Kashmiri Chai and fresh refreshments"
    },
    {
      time: "6:45 PM",
      title: "Grand Baraat Arrival",
      desc: "Welcoming Ali Hamza with royal traditional pomp"
    },
    {
      time: "7:30 PM",
      title: "Auspicious Nikkah Ceremony",
      desc: "Sacred vows & heartfelt congregational prayers"
    },
    {
      time: "8:30 PM",
      title: "Royal Dinner Buffet",
      desc: "Exquisite multi-cuisine wedding banquet"
    },
    {
      time: "10:30 PM",
      title: "Rukhsati & Blessings",
      desc: "Sending off Fariha with tears of joy, Quranic shadow, and prayers"
    }
  ],

  // Dress Code
  dressCode: {
    title: "Dress Code",
    tagline: "We cordially invite our guests to dress in Traditional Pakistani Attire in soft pastel shades.",
    recommendedShades: [
      { name: "Lavender Mist", hex: "#D4C5E9" },
      { name: "Blush Peach", hex: "#F6CDB8" },
      { name: "Pastel Lemon", hex: "#F6E69E" },
      { name: "Dusty Rose", hex: "#E8B4B8" },
      { name: "Sage Mint", hex: "#CDD4C6" }
    ],
    guidelines: [
      "Please avoid wearing bridal red & pure white: reserved for the bride.",
      "Soft pastels and traditional ethnic sherwanis/formals are warmly celebrated."
    ]
  },

  // WhatsApp RSVP Contact
  rsvpContact: {
    whatsappNumber: "923000000000",
    defaultDua: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair. Heartiest congratulations to Ali Hamza, Fariha Tariq, and Haris's family!"
  },

  // Audio track
  audio: {
    src: "/audio/background_music.mp3",
    title: "Romantic Flute & Strings Wedding Melody"
  }
}
