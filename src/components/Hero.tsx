import React from 'react';
import { Phone, MessageSquare, Instagram, Navigation, Clock, Flame, UtensilsCrossed, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { tableNumber, setTableNumber } = useCart();

  const tableOptions = [
    'Table 01', 'Table 02', 'Table 03', 'Table 04', 'Table 05',
    'Table 06', 'Table 07', 'Table 08', 'Table 09', 'Table 10',
    'Lounge Booth 01', 'Lounge Booth 02', 'Bar Counter', 'Chef Counter'
  ];

  return (
    <section id="hero" className="relative w-full pt-20 sm:pt-24 pb-12 overflow-hidden bg-[#0e0e0e]">
      {/* Background Ambience with Owner's Official Lounge Poster */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/c34aad81-94b9-4978-b42b-ac49c90d3b2d_e1b6f61f.jpg"
          alt="Tipsy Kitchen & Bar Front Lounge"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/90 via-[#121212]/90 to-[#121212]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a24c]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Ambient Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1c18]/90 border border-[#f3be65]/30 text-[#f3be65] mb-4 text-xs font-semibold tracking-widest uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f3be65] animate-pulse" />
          <span>Gastronomic Speakeasy &amp; Kitchen</span>
        </div>

        {/* Golden Bull Insignia Crest */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#f58220]/25 blur-2xl rounded-full" />
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#201f1d] to-[#151515] border border-[#f3be65]/40 flex items-center justify-center p-2.5 shadow-2xl">
            <img
              src="/assets/tipsy_bull_logo.png"
              alt="Tipsy Charging Bull Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(245,130,32,0.5)]"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <h1 className="font-cursive text-5xl sm:text-7xl text-[#f3be65] tracking-wide leading-none drop-shadow-md">
          Tipsy
        </h1>
        <p className="text-base sm:text-xl font-bold tracking-[0.3em] uppercase text-[#d4a24c] mt-1">
          Kitchen &amp; Bar
        </p>

        {/* Official Motto */}
        <p className="font-serif italic text-sm sm:text-base text-[#e5e2e1] mt-2 max-w-md">
          &quot;Good Food • Great Drinks • Best Moments — Only at Tipsy!&quot;
        </p>

        <p className="text-xs sm:text-sm text-[#d3c4b2] max-w-lg mt-1 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#f3be65] shrink-0" />
          <span>{RESTAURANT_INFO.landmark}, {RESTAURANT_INFO.address}</span>
        </p>

        {/* Phone numbers row */}
        <div className="flex items-center gap-3 text-xs text-[#a99c8f] mt-2">
          <span className="flex items-center gap-1 text-[#f3be65] font-semibold">
            <Phone className="w-3 h-3" />
            +91 {RESTAURANT_INFO.phoneDisplay}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#f3be65] font-semibold">
            <Phone className="w-3 h-3" />
            +91 {RESTAURANT_INFO.secondaryPhoneDisplay}
          </span>
        </div>

        {/* Major Primary Action Hub */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <a
            href="#cat-soups"
            className="px-6 py-3 rounded-xl bg-[#d4a24c] hover:bg-[#f3be65] text-[#1c1200] font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Browse Digital Menu</span>
          </a>
        </div>

        {/* Table Selector Pill */}
        <div className="mt-5 flex items-center justify-center gap-2 bg-[#1c1b1b]/95 border border-[#f3be65]/25 rounded-full px-4 py-1.5 shadow-sm">
          <UtensilsCrossed className="w-3.5 h-3.5 text-[#f3be65]" />
          <span className="text-xs text-[#d3c4b2]">Ordering Station:</span>
          <select
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="bg-transparent text-xs font-semibold text-[#f3be65] focus:outline-none cursor-pointer"
          >
            {tableOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#1c1b1b] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Concierge Action Bar (4 Equal Touchpoints) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6 w-full max-w-xl">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/5 hover:border-[#f3be65]/40 hover:bg-[#252424] text-[#e5e2e1] transition-all group shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#f3be65] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Call Front Desk</span>
          </a>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/5 hover:border-[#25D366]/40 hover:bg-[#252424] text-[#e5e2e1] transition-all group shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">WhatsApp</span>
          </a>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/5 hover:border-[#ff9c73]/40 hover:bg-[#252424] text-[#e5e2e1] transition-all group shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#ff9c73] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Instagram</span>
          </a>

          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/5 hover:border-[#f3be65]/40 hover:bg-[#252424] text-[#e5e2e1] transition-all group shadow-sm"
          >
            <Navigation className="w-4 h-4 text-[#d4a24c] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Directions</span>
          </a>
        </div>

        {/* Operating Amenities Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs text-[#a99c8f]">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#f3be65]" />
            <span>{RESTAURANT_INFO.hours}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#f3be65]" />
            <span>Bar, Tandoor &amp; Robata Active</span>
          </span>
          <span className="flex items-center gap-1.5">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#f3be65]" />
            <span>Table-Side Digital Ordering</span>
          </span>
        </div>
      </div>
    </section>
  );
};
