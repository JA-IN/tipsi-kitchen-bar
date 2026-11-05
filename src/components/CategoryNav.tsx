import React, { useRef } from 'react';
import { Search, X, Star } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

interface CategoryNavProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  dietaryFilter: 'all' | 'veg' | 'nonveg' | 'special';
  setDietaryFilter: (filter: 'all' | 'veg' | 'nonveg' | 'special') => void;
  activeCategoryId: string;
  searchRef: React.RefObject<HTMLInputElement | null>;
  totalFilteredCount: number;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  searchQuery,
  setSearchQuery,
  dietaryFilter,
  setDietaryFilter,
  activeCategoryId,
  searchRef,
  totalFilteredCount
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (categoryId: string) => {
    const el = document.getElementById(`cat-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-18 sm:top-20 z-40 bg-[#141414]/95 backdrop-blur-md border-b border-[#f3be65]/15 py-2.5 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-2.5">
        {/* Row 1: Live Search & Dietary Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          {/* Search Bar */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9c8f7e]" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, drinks, ingredients (e.g. Butter Chicken, Dal Makhani)..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-[#201f1f] border border-white/5 text-sm text-[#e5e2e1] placeholder:text-[#887b6d] focus:outline-none focus:border-[#d4a24c]/60 focus:bg-[#252424] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9c8f7e] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter Segmented Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar shrink-0">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                dietaryFilter === 'all'
                  ? 'bg-[#d4a24c] text-[#1c1200] shadow-sm'
                  : 'bg-[#201f1f] text-[#d3c4b2] hover:bg-[#282727] hover:text-white'
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-[#201f1f] text-[#d3c4b2] hover:bg-[#282727] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-xs bg-emerald-400 inline-block" />
              Pure Veg
            </button>

            <button
              onClick={() => setDietaryFilter('nonveg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                dietaryFilter === 'nonveg'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-[#201f1f] text-[#d3c4b2] hover:bg-[#282727] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-xs bg-red-400 inline-block" />
              Non-Veg
            </button>

            <button
              onClick={() => setDietaryFilter('special')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                dietaryFilter === 'special'
                  ? 'bg-[#a6512c] text-white shadow-sm'
                  : 'bg-[#201f1f] text-[#d3c4b2] hover:bg-[#282727] hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Specials
            </button>
          </div>
        </div>

        {/* Row 2: Horizontal 21-Category Carousel Pill Strip */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
        >
          {MENU_CATEGORIES.map((cat, index) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1 rounded-full text-xs transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#d4a24c] text-[#1c1200] font-bold shadow-sm'
                    : 'bg-[#1c1b1b] text-[#b5a796] hover:text-white hover:bg-[#252424] border border-white/5'
                }`}
              >
                <span>{index + 1}. {cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search match notice */}
        {searchQuery.trim() && (
          <div className="text-[11px] text-[#d4a24c] flex items-center justify-between">
            <span>Found {totalFilteredCount} matching dish{totalFilteredCount === 1 ? '' : 'es'} for &quot;{searchQuery}&quot;</span>
            <button
              onClick={() => setSearchQuery('')}
              className="underline hover:text-white text-[11px]"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
