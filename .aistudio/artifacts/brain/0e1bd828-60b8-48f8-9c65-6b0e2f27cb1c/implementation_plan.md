# Implementation Plan: Banquet Booking, Celebration Gallery & Food Visuals

Enhance **Tipsy Kitchen & Bar** with a dedicated Banquet & Party Hall booking experience, a luxury celebration photo gallery, integration of the 4 owner-provided flagship promotional photos, compact food thumbnails on each menu card, and direct WhatsApp reservation dispatch.

---

## 1. Official Owner Assets & Showcase Integration

We will incorporate all 4 official owner images into the application:
- **Hero / Front Main Poster**: `/public/assets/aistudio/c34aad81-94b9-4978-b42b-ac49c90d3b2d_e1b6f61f.jpg` (Official Tipsy dining lounge, bar interior & "Where Every Moment Feels Just Right" branding).
- **Robata Grill & Paneer Tikka Special**: `/public/assets/aistudio/589ebc50-4d2b-4459-8aec-d38b5ee11eed_af45566c.jpg` (Fusion of Traditions showcase + featured dish in Starters).
- **Dan Dan Noodles**: `/public/assets/aistudio/64c98488-0485-4227-b86d-62c628d1283e_9f7f8caa.jpg` (Specialty noodle showcase in Asian / New Snacks).
- **Paneer Paapdi**: `/public/assets/aistudio/04846cab-3e84-4cd5-a50c-63bf9a33fa89_c96bfd38.jpg` (Signature crispy paneer appetizer in Starters).
- **Contact & Landmark Sync**: Update phone numbers with both verified lines: `+91 90410 27022` and `+91 88725 11711`, Landmark: `"Central Hub, Near KFC, Khanna, Punjab"`.

---

## 2. Banquet & Party Hall Booking Section

- **Hall Capacity & Features**:
  - **The Royal Speakeasy Lounge** (Capacity: 30–60 guests): Intimate mood lighting, live bar setup, DJ acoustic stage, plush leather booths.
  - **Grand Sovereign Banquet** (Capacity: 80–250 guests): Full dining setup, reception stage, custom buffet counters, dedicated hospitality team.
- **Interactive Quick Booking Modal & Form**:
  - Event Type selector: *Birthday Parties & Anniversaries*, *Wedding Receptions & Ring Ceremonies*, *Corporate & Family Get-Togethers*, *Cocktail & DJ Nights*.
  - Estimated Guest Count stepper (15 to 300+ guests).
  - Date & Preferred Time Slot (Lunch 12–4 PM, High-Tea 4–7 PM, Dinner 7–11 PM).
  - Catering Preference (Pure Veg, Non-Veg, or Premium Fusion Bar Buffet).
  - Customer Name, Contact Number, and Special Requirements.
- **WhatsApp Reservation Flow**:
  - Formats a pre-made booking enquiry message with all event details, guest numbers, dates, and package choice.
  - Dispatches directly to WhatsApp `+919041027022` (`https://wa.me/919041027022?text=...`).

---

## 3. Celebration & Gathering Photo Gallery

- **Visual Story Grid**:
  - Highlights real festive moments: birthday celebrations, ring ceremonies, family dinners, and cocktail lounge gatherings.
  - Interactive lightbox / fullscreen preview on click.
  - Curated high-aesthetic images depicting warm lighting, joyful toasts, tiered cakes, and banquet table arrangements.

---

## 4. Compact Food Thumbnails Across Menu Cards

- **Enhanced Card Layout**:
  - Left column: Veg/Non-Veg dot indicator, Chef's Choice / Special tags, Dish Name, Description, Variant selector pills, and Stepper CTA.
  - Right column: Compact, rounded-xl 84x84px food image thumbnail with crisp photography, image zoom preview, and resilient SVG/CSS fallback.
  - Flagship owner items (Paneer Tikka, Paneer Paapdi, Dan Dan Noodles) will feature the owner's exact high-res photography.

---

## 5. Verification & Testing

- Run `compile_applet` and `lint_applet` to ensure zero TypeScript errors or missing imports.
- Test responsive mobile navigation across sticky headers, category filter strip, banquet booking modal, and WhatsApp link generation.
