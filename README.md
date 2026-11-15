# Digital Wedding Invitation Website (Video Replica Clone)

A luxury, interactive digital wedding invitation website built with **React**, **Tailwind CSS**, and **Framer Motion**, inspired by high-end bespoke mobile invitations.

---

## ✨ Features Included

1. **Interactive 3D Envelope Opening**
   - Realistic embossed floral damask envelope texture with centered wax seal monogram (`D & A`).
   - Tap-to-open gesture triggers golden sparkle confetti and light burst effect.
   - Smooth 3D flap unfolding transition that reveals the inner invitation card.

2. **Background Music Autoplay & Floating Controller**
   - The exact romantic flute/strings melody extracted from the video plays automatically on envelope tap.
   - Floating gold audio toggle at the bottom-right for instant play/pause control.

3. **Hero Palace & Arch Scene**
   - High-resolution Islamic ornamental archway with warm glowing lanterns.
   - Couple artwork standing before the majestic white palace.
   - Dynamic names and ceremony heading.
   - Animated bouncing "Scroll down ⌄" indicator.

4. **Interactive Scratch Date Cards**
   - "✦ Scratch to reveal the date ✦"
   - 3 realistic HTML5 canvas scratch cards (Day, Month, Year).
   - Metallic gold foil texture responds to finger touch or mouse dragging.
   - Auto-reveals with celebratory sparkles once > 40% is scratched.

5. **Formal Parents Invitation Card**
   - Traditional Bismillah calligraphy (`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`).
   - Formal invitation wording honoring both bride's and groom's parents.
   - Warm heartfelt family message for duas and blessings.

6. **Chronological Wedding Timeline**
   - Central gilded timeline with diamond nodes.
   - Alternating events with custom illustrations:
     - 6:00 pm: Guest Arrival and Welcome Drinks
     - 6:30 pm: Bride Entrance
     - 7:30 pm: Salat al Isha
     - 8:30 pm: Buffet Opening
     - 10:00 pm: Let the Fun Begin

7. **Live Celebration Countdown**
   - Real-time ticking countdown timer (Days, Hours, Minutes, Seconds).
   - Accurately synchronizes with the wedding date.

8. **Location & Interactive Map**
   - Venue photography with lush palm trees.
   - "Open in Maps ↗" button directly opening Google Maps directions.

9. **Dress Code & Pastel Palette Swatches**
   - Traditional Pakistani ethnic fashion illustration.
   - 5 soft pastel color swatches with interactive tooltip labels.
   - Etiquette guidelines (bride/groom and bridesmaids reserved colors).

---

## 🛠️ How to Customize for the December Wedding

All text, dates, names, and images are centralized in a single configuration file:
👉 **`src/config/weddingData.js`**

To customize:
1. Open `src/config/weddingData.js`.
2. Change the names, parents, date, and venue details:
   ```javascript
   groom: {
     name: "Groom Name",
     parents: "Mr. & Mrs. ...",
     relation: "Son of"
   },
   bride: {
     name: "Bride Name",
     parents: "Mr. & Mrs. ...",
     relation: "Daughter of"
   },
   date: {
     day: "18",
     month: "December",
     year: "2026",
     targetDateIso: "2026-12-18T18:00:00"
   }
   ```
3. Save the file and the whole website instantly reflects the changes!

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

