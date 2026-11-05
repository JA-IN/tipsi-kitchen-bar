import React from 'react';
import { Phone, MessageSquare, Instagram, Navigation, MapPin, Clock, Calendar, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  onOpenBanquetModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBanquetModal }) => {
  return (
    <footer id="lounge-story" className="w-full bg-[#0d0d0d] text-[#a99c8f] border-t border-white/5 pt-14 pb-24 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Story Column */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#201f1d] border border-[#f3be65]/30 flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                <img
                  src="/assets/tipsy_bull_logo.png"
                  alt="Tipsy Bull Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(245,130,32,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cursive text-3xl sm:text-4xl text-[#f3be65] leading-none">
                  Tipsy
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4a24c]">
                  Kitchen &amp; Bar
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#8a7e72] leading-relaxed max-w-sm">
              Punjab&apos;s ambient culinary sanctuary. Progressive North Indian gastronomy, wood-fired tandoor creations, Japanese robata grills, party halls, and artisanal craft mocktails served in warm brass luxury.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-xs text-[#f3be65] border border-[#f3be65]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f3be65] animate-pulse" />
                Dine-in, Party Halls &amp; Banquets
              </span>
              {onOpenBanquetModal && (
                <button
                  onClick={onOpenBanquetModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4a24c]/15 hover:bg-[#d4a24c]/25 text-xs text-[#f3be65] border border-[#f3be65]/40 transition-colors"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Reserve Banquet Hall</span>
                </button>
              )}
            </div>
          </div>

          {/* Location & Hours Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-serif text-base font-semibold text-[#f5f5f5]">
              Sanctuary &amp; Hours
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#a99c8f]">
              <MapPin className="w-4 h-4 text-[#f3be65] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{RESTAURANT_INFO.landmark}</p>
                <p>{RESTAURANT_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#a99c8f]">
              <Clock className="w-4 h-4 text-[#f3be65] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.hours}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#a99c8f]">
              <Phone className="w-4 h-4 text-[#f3be65] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                  +91 {RESTAURANT_INFO.phoneDisplay} (Front Desk)
                </a>
                <a href={`tel:${RESTAURANT_INFO.secondaryPhone}`} className="hover:text-white transition-colors">
                  +91 {RESTAURANT_INFO.secondaryPhoneDisplay} (Banquet &amp; Events)
                </a>
              </div>
            </div>
          </div>

          {/* Direct Access Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base font-semibold text-[#f5f5f5]">
              Direct Access
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#1c1b1b] hover:bg-[#252424] text-xs text-[#e5e2e1] transition-colors border border-white/5"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#f3be65]" />
                  Call Front Desk
                </span>
                <span className="text-[10px] text-[#786e63]">↗</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#1c1b1b] hover:bg-[#252424] text-xs text-[#e5e2e1] transition-colors border border-white/5"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp Direct
                </span>
                <span className="text-[10px] text-[#786e63]">↗</span>
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#1c1b1b] hover:bg-[#252424] text-xs text-[#e5e2e1] transition-colors border border-white/5"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-[#ff9c73]" />
                  Instagram Lounge
                </span>
                <span className="text-[10px] text-[#786e63]">↗</span>
              </a>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#1c1b1b] hover:bg-[#252424] text-xs text-[#e5e2e1] transition-colors border border-white/5"
              >
                <span className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-[#d4a24c]" />
                  Google Maps Directions
                </span>
                <span className="text-[10px] text-[#786e63]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#786e63]">
          <p>© {new Date().getFullYear()} Tipsy Kitchen &amp; Bar. Central Hub, Khanna, Punjab. All rights reserved.</p>
          <p className="text-[11px] text-[#9c8f7e]">Crafted for Table Hospitality, Mixology &amp; Banquets</p>
        </div>
      </div>
    </footer>
  );
};
