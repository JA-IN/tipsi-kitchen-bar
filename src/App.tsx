/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { MenuItemCard } from './components/MenuItemCard';
import { CartDrawer } from './components/CartDrawer';
import { FloatingCartBar } from './components/FloatingCartBar';
import { Footer } from './components/Footer';
import { MENU_CATEGORIES } from './data/menuData';
import { MenuItem, MenuCategory } from './types';
import { SearchX, UtensilsCrossed } from 'lucide-react';
import { CelebrationGallery } from './components/CelebrationGallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'nonveg' | 'special'>('all');
  const [activeCategoryId, setActiveCategoryId] = useState<string>(MENU_CATEGORIES[0]?.id || 'soups');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Filter items based on query and dietary toggle
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENU_CATEGORIES.map((category) => {
      const filteredItems = category.items.filter((item: MenuItem) => {
        // Dietary match
        if (dietaryFilter === 'veg' && item.type === 'nonveg') return false;
        if (dietaryFilter === 'nonveg' && item.type === 'veg') return false;
        if (dietaryFilter === 'special' && !item.isSpecial && !item.badge) return false;

        // Search match
        if (!q) return true;
        const inName = item.name.toLowerCase().includes(q);
        const inDesc = item.description?.toLowerCase().includes(q) || false;
        const inCategory = category.name.toLowerCase().includes(q);
        const inVariants = item.variants.some((v) => v.label.toLowerCase().includes(q));

        return inName || inDesc || inCategory || inVariants;
      });

      return {
        ...category,
        items: filteredItems
      };
    }).filter((category) => category.items.length > 0);
  }, [searchQuery, dietaryFilter]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  // ScrollSpy to update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (const cat of MENU_CATEGORIES) {
        const el = document.getElementById(`cat-${cat.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveCategoryId(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#121212] text-[#e5e2e1] flex flex-col selection:bg-[#d4a24c] selection:text-[#1c1200]">
        {/* Fixed Top Header */}
        <Header
          onSearchClick={handleSearchClick}
          isSearchActive={Boolean(searchQuery)}
        />

        {/* Hero Section */}
        <Hero />

        {/* Celebration Gallery */}
        <CelebrationGallery onBookClick={() => {}} />

        {/* Section Divider & Menu Anchor */}
        <div id="menu-section" className="w-full bg-[#141414] py-4 border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-[#f3be65]" />
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                À La Carte Culinary Menu
              </span>
            </div>
            <span className="text-xs text-[#a99c8f]">
              21 Handcrafted Courses • Table-Side Ordering
            </span>
          </div>
        </div>

        {/* Sticky Sub-Navbar: Search, Dietary Filters & 21-Category Scroll Strip */}
        <CategoryNav
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dietaryFilter={dietaryFilter}
          setDietaryFilter={setDietaryFilter}
          activeCategoryId={activeCategoryId}
          searchRef={searchInputRef}
          totalFilteredCount={totalFilteredCount}
        />

        {/* Main Menu Showcase */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full flex flex-col gap-12">
          {filteredCategories.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center text-[#9c8f7e]">
              <SearchX className="w-16 h-16 stroke-[1.2] text-[#d4a24c] opacity-50 mb-3" />
              <h3 className="font-serif text-xl font-bold text-[#f5f5f5]">
                No dishes found matching your search
              </h3>
              <p className="text-xs text-[#8a7e72] mt-1 max-w-sm">
                We couldn&apos;t find any items matching &quot;{searchQuery}&quot; with the selected filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDietaryFilter('all');
                }}
                className="mt-5 px-5 py-2 rounded-xl bg-[#d4a24c] hover:bg-[#f3be65] text-[#1c1200] text-xs font-bold transition-all shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category: MenuCategory) => (
              <section
                key={category.id}
                id={`cat-${category.id}`}
                className="scroll-mt-header flex flex-col gap-4"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-2 border-b border-white/5 gap-1">
                  <div>
                    {category.courseNumber && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4a24c]">
                        {category.courseNumber}
                      </span>
                    )}
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f5f5] tracking-tight">
                      {category.name}
                    </h2>
                  </div>
                  {category.subtitle && (
                    <span className="text-xs text-[#a99c8f] italic">
                      {category.subtitle}
                    </span>
                  )}
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {category.items.map((item: MenuItem) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))
          )}
        </main>

        {/* Floating Cart Indicator */}
        <FloatingCartBar />

        {/* Slide-over Cart & WhatsApp Checkout Drawer */}
        <CartDrawer />

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
