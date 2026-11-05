import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FloatingCartBar: React.FC = () => {
  const { totalItemsCount, grandTotal, setIsCartOpen, tableNumber } = useCart();

  if (totalItemsCount === 0) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 max-w-lg mx-auto z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <button
        onClick={() => setIsCartOpen(true)}
        className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#1e1c18]/95 backdrop-blur-xl border border-[#d4a24c]/40 text-[#f5f5f5] shadow-2xl hover:bg-[#25231e] transition-all group active:scale-[0.99]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4a24c] text-[#1c1200] flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <span>{totalItemsCount}</span> items selected
            </span>
            <span className="text-[11px] text-[#a99c8f]">
              {tableNumber} • Dine-in
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-serif text-base sm:text-lg font-bold text-[#f3be65] tabular-nums">
            ₹{grandTotal}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#d4a24c] text-[#1c1200] text-xs font-bold tracking-wide group-hover:bg-[#f3be65] transition-colors shadow-sm">
            <span>View Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </button>
    </div>
  );
};
