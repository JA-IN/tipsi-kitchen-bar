import React from 'react';
import { Users, Calendar, Sparkles, Check, Phone, MessageSquare, GlassWater, Music, UtensilsCrossed } from 'lucide-react';
import { BANQUET_HALLS, RESTAURANT_INFO } from '../data/menuData';

interface BanquetSectionProps {
  onOpenBookingModal: (hallId?: string) => void;
}

export const BanquetSection: React.FC<BanquetSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="banquets" className="w-full py-14 bg-[#141414] border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f3be65]/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#a6512c]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201f1d] border border-[#f3be65]/30 text-[#f3be65] text-xs font-semibold uppercase tracking-widest mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Private Gatherings &amp; Banquets</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f5f5] tracking-tight">
              Party Halls &amp; Banquet Venues
            </h2>
            <p className="text-xs sm:text-sm text-[#a99c8f] mt-1.5 leading-relaxed">
              Celebrate your milestone birthdays, wedding receptions, roka ceremonies, and corporate galas at Tipsy Kitchen &amp; Bar. Customized culinary menus, live robata &amp; tandoor stations, handcrafted cocktails, and state-of-the-art sound systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-6 py-3 rounded-xl bg-[#d4a24c] hover:bg-[#f3be65] text-[#1c1200] font-bold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Party Hall</span>
            </button>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Tipsy Kitchen & Bar! I want to inquire about party hall / banquet booking.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-[#1c1b1b] border border-[#25D366]/40 hover:bg-[#252424] text-[#25D366] font-semibold text-xs transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Feature Cards Grid for Halls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {BANQUET_HALLS.map((hall) => (
            <div
              key={hall.id}
              className="rounded-3xl bg-[#1c1b1b] border border-white/5 hover:border-[#f3be65]/30 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              {/* Hall Hero Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#141414]">
                <img
                  src={hall.image}
                  alt={hall.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-[#1c1b1b]/40 to-transparent" />
                
                {/* Capacity Pill Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212]/90 backdrop-blur-md border border-[#f3be65]/40 text-xs font-bold text-[#f3be65] shadow-md">
                    <Users className="w-3.5 h-3.5" />
                    <span>{hall.capacity}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 sm:left-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {hall.name}
                  </h3>
                  <p className="text-xs text-[#d3c4b2] mt-0.5 max-w-md">
                    {hall.tagline}
                  </p>
                </div>
              </div>

              {/* Hall Content Details */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-col gap-4">
                  {/* Features List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a24c] mb-2.5">
                      Included Amenities &amp; Services
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {hall.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#a99c8f]">
                          <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Tags */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a24c] mb-2">
                      Best Suited For
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hall.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#252424] text-[11px] font-medium text-[#e5e2e1] border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-[#8a7e72]">
                    <span className="flex items-center gap-1">
                      <Music className="w-3.5 h-3.5 text-[#f3be65]" /> DJ Ready
                    </span>
                    <span className="flex items-center gap-1">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#f3be65]" /> Live Buffet
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBookingModal(hall.name)}
                    className="px-4 py-2 rounded-xl bg-[#252424] hover:bg-[#d4a24c] text-[#f3be65] hover:text-[#1c1200] border border-[#d4a24c]/40 text-xs font-bold transition-all active:scale-95 shadow-sm"
                  >
                    Check Dates &amp; Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Owner Highlight Banner */}
        <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#201f1d] via-[#1c1b1b] to-[#201f1d] border border-[#f3be65]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d4a24c]/20 border border-[#d4a24c]/40 flex items-center justify-center text-[#f3be65] shrink-0">
              <GlassWater className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4a24c]">
                Personalized Hospitality
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                Need a Custom Package for Your Party?
              </h3>
              <p className="text-xs text-[#a99c8f] mt-0.5">
                Speak directly with our Executive Chef &amp; Events Director for custom menu tastings, decor themes, and volume discounts.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-[#252424] hover:bg-[#2f2d2d] text-xs font-semibold text-[#f5f5f5] border border-white/5 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#f3be65]" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenBookingModal()}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-[#d4a24c] hover:bg-[#f3be65] text-xs font-bold text-[#1c1200] transition-all"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
