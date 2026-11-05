import React, { useState } from 'react';
import { Plus, Minus, Star, Utensils } from 'lucide-react';
import { MenuItem, MenuVariant } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart, updateQty, cart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<MenuVariant>(item.variants[0]);
  const [imageError, setImageError] = useState(false);

  const cartId = `${item.id}-${selectedVariant.label}`;
  const existingCartItem = cart.find((i) => i.cartId === cartId);
  const currentQty = existingCartItem ? existingCartItem.qty : 0;

  const handleAdd = () => {
    addToCart(item, selectedVariant, 1);
  };

  const handleIncrement = () => {
    if (existingCartItem) {
      updateQty(cartId, 1);
    } else {
      addToCart(item, selectedVariant, 1);
    }
  };

  const handleDecrement = () => {
    if (existingCartItem) {
      updateQty(cartId, -1);
    }
  };

  const isVeg = item.type === 'veg' || (item.type === 'veg-nonveg' && !selectedVariant.label.toLowerCase().includes('non'));

  return (
    <div className="bg-[#1c1b1b] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/5 hover:border-[#f3be65]/30 transition-all duration-200 shadow-md group">
      {/* Top Section: Details on Left + Compact Food Image Thumbnail on Right */}
      <div className="flex items-start justify-between gap-3.5">
        {/* Left Side: Dish Info */}
        <div className="flex-1 min-w-0">
          {/* Indicators & Badges */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {/* Indian FSSAI Veg / Non-Veg Dot in Square */}
            <div
              className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center p-0.5 shrink-0 ${
                isVeg ? 'border-emerald-500' : 'border-red-500'
              }`}
              title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isVeg ? 'bg-emerald-500' : 'bg-red-500'
                }`}
              />
            </div>

            {item.badge && (
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#2a241b] text-[#f3be65] border border-[#f3be65]/25 flex items-center gap-1">
                {item.isSpecial && <Star className="w-2.5 h-2.5 fill-current" />}
                {item.badge}
              </span>
            )}
          </div>

          {/* Dish Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#f5f5f5] leading-snug group-hover:text-[#ffd885] transition-colors">
            {item.name}
          </h3>

          {/* Description */}
          {item.description && (
            <p className="text-xs text-[#9e9e9e] mt-1 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Price */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-serif text-base sm:text-lg font-bold text-[#f3be65] tabular-nums">
              ₹{selectedVariant.price}
            </span>
            {selectedVariant.label !== 'Regular' && (
              <span className="text-[11px] text-[#a99c8f]">
                ({selectedVariant.label})
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Compact Food Thumbnail */}
        {item.image && !imageError ? (
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-[#252424] border border-white/10 shrink-0 shadow-md">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>
        ) : (
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-[#252424]/80 border border-white/5 shrink-0 flex flex-col items-center justify-center text-[#786e63] shadow-inner p-2">
            <Utensils className="w-6 h-6 stroke-[1.5] text-[#d4a24c]/40" />
            <span className="text-[9px] text-[#8a7e72] mt-1 text-center font-medium leading-none">Tipsy Spec</span>
          </div>
        )}
      </div>

      {/* Footer Area: Variant Selectors & Add/Stepper Button */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Variant Pills (if more than 1 variant) */}
        {item.variants.length > 1 ? (
          <div className="flex flex-wrap items-center gap-1.5">
            {item.variants.map((v) => {
              const isSelected = selectedVariant.label === v.label;
              return (
                <button
                  key={v.label}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                    isSelected
                      ? 'bg-[#d4a24c] text-[#1c1200] font-bold shadow-xs'
                      : 'bg-[#252424] text-[#a99c8f] hover:text-white hover:bg-[#2e2d2d]'
                  }`}
                >
                  {v.label} (₹{v.price})
                </button>
              );
            })}
          </div>
        ) : (
          <span className="text-[11px] text-[#786e63]">Standard Portion</span>
        )}

        {/* Stepper / Add to Cart CTA */}
        <div className="flex items-center justify-end">
          {currentQty > 0 ? (
            <div className="inline-flex items-center gap-2 bg-[#252424] border border-[#d4a24c]/40 rounded-xl px-2 py-1 shadow-sm">
              <button
                onClick={handleDecrement}
                aria-label={`Decrease quantity of ${item.name}`}
                className="w-7 h-7 rounded-lg bg-[#1c1b1b] flex items-center justify-center text-[#e5e2e1] hover:text-[#f3be65] hover:bg-[#302e2e] transition-colors active:scale-95"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold text-[#f5f5f5] min-w-5 text-center tabular-nums">
                {currentQty}
              </span>
              <button
                onClick={handleIncrement}
                aria-label={`Increase quantity of ${item.name}`}
                className="w-7 h-7 rounded-lg bg-[#1c1b1b] flex items-center justify-center text-[#e5e2e1] hover:text-[#f3be65] hover:bg-[#302e2e] transition-colors active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className="px-4 py-1.5 rounded-xl bg-[#252424] hover:bg-[#d4a24c] text-[#f3be65] hover:text-[#1c1200] border border-[#d4a24c]/30 hover:border-[#d4a24c] text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>ADD</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
