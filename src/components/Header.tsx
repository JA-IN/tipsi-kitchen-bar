import React from 'react';
import { Phone, Instagram, ShoppingBag, Search, Calendar, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeaderProps {
  onSearchClick: () => void;
  isSearchActive: boolean;
  onOpenBanquetModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  isSearchActive,
  onOpenBanquetModal
}) => {
  const { totalItemsCount, setIsCartOpen, tableNumber } = useCart();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#141414]/95 backdrop-blur-md border-b border-[#f3be65]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#d4a24c]/20 to-[#a9772a]/10 border border-[#f3be65]/40 flex items-center justify-center p-1 shadow-sm group-hover:border-[#f3be65] transition-colors overflow-hidden">
            <img
              src="/assets/tipsy_bull_logo.png"
              alt="Tipsy Bull Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(245,130,32,0.4)] group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-cursive text-3xl sm:text-4xl leading-none text-[#f3be65] tracking-wide">
              Tipsy
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4a24c]">
              Kitchen &amp; Bar
            </span>
          </div>
        </a>

        {/* Center Nav Links (Hidden on small mobile, visible on desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-[#d3c4b2]">
          <a href="#cat-soups" className="hover:text-[#f3be65] transition-colors whitespace-nowrap">
            Menu
          </a>
          <a href="#banquets" className="hover:text-[#f3be65] transition-colors whitespace-nowrap flex items-center gap-1.5">
            <span>Party Halls &amp; Banquets</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#d4a24c]/20 text-[#f3be65] border border-[#f3be65]/30">
              New
            </span>
          </a>
          <a href="#gallery" className="hover:text-[#f3be65] transition-colors whitespace-nowrap">
            Celebration Gallery
          </a>
          <a href="#cat-mocktails" className="hover:text-[#f3be65] transition-colors whitespace-nowrap">
            Bar &amp; Mocktails
          </a>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#201f1f] border border-[#f3be65]/20 text-[#f3be65] font-medium">
            {tableNumber}
          </span>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Banquet Booking Button on Header */}
          <button
            onClick={onOpenBanquetModal}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#201f1f] hover:bg-[#282725] border border-[#f3be65]/30 text-xs font-semibold text-[#f3be65] transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Hall</span>
          </button>

          {/* Search Trigger */}
          <button
            onClick={onSearchClick}
            aria-label="Search menu items"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              isSearchActive
                ? 'bg-[#d4a24c] text-[#1a1200] border-[#d4a24c]'
                : 'bg-[#1c1b1b] border-white/10 text-[#d3c4b2] hover:text-white hover:bg-[#252424]'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Call Link */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            aria-label="Call Tipsy Kitchen & Bar"
            className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center bg-[#1c1b1b] border border-white/10 text-[#d3c4b2] hover:text-[#f3be65] hover:bg-[#252424] transition-all"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Instagram Link */}
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tipsy Kitchen & Bar Instagram"
            className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center bg-[#1c1b1b] border border-white/10 text-[#d3c4b2] hover:text-[#f3be65] hover:bg-[#252424] transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Order Bag / Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`View order bag with ${totalItemsCount} items`}
            className="relative h-10 px-3.5 rounded-full flex items-center gap-2 bg-[#d4a24c] hover:bg-[#f3be65] text-[#1c1200] font-semibold text-xs tracking-wide shadow-md transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden xs:inline">Order</span>
            {totalItemsCount > 0 && (
              <span className="min-w-5 h-5 px-1 rounded-full bg-[#1c1200] text-[#f3be65] text-[11px] font-bold flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
