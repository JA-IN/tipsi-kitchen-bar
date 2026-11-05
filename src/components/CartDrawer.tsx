import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, Copy, Check, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    updateQty,
    removeFromCart,
    clearCart,
    subtotal,
    gstAmount,
    grandTotal,
    isCartOpen,
    setIsCartOpen,
    tableNumber,
    setTableNumber,
    customerName,
    setCustomerName,
    orderNote,
    setOrderNote,
    sendOrderToWhatsApp,
    orderPlacedMessage,
    setOrderPlacedMessage
  } = useCart();

  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  const tableOptions = [
    'Table 01', 'Table 02', 'Table 03', 'Table 04', 'Table 05',
    'Table 06', 'Table 07', 'Table 08', 'Table 09', 'Table 10',
    'Lounge Booth 01', 'Lounge Booth 02', 'Bar Counter', 'Takeaway / Curbside'
  ];

  const handleCopyOrder = () => {
    let summary = `*TIPSY KITCHEN & BAR ORDER*\nTable: ${tableNumber}\n\n`;
    cart.forEach((i, idx) => {
      summary += `${idx + 1}. ${i.name} (${i.variant}) x${i.qty} = ₹${i.price * i.qty}\n`;
    });
    summary += `\nSubtotal: ₹${subtotal}\nGST (5%): ₹${gstAmount}\nTotal: ₹${grandTotal}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Scrim Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#181716] h-full flex flex-col justify-between shadow-2xl border-l border-white/5 z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#1f1e1c] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#201f1d] border border-[#d4a24c]/30 flex items-center justify-center p-1.5 shadow-sm">
              <img
                src="/assets/tipsy_bull_logo.png"
                alt="Tipsy Bull Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(245,130,32,0.4)]"
              />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#f5f5f5] leading-tight">
                Your Table Order
              </h2>
              <p className="text-xs text-[#a99c8f]">
                Tipsy Kitchen &amp; Bar, Khanna
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
            className="w-8 h-8 rounded-full bg-[#272624] hover:bg-[#333230] text-[#a99c8f] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Items & Inputs Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-4 no-scrollbar">
          {/* Order Placed Toast */}
          {orderPlacedMessage && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between">
              <span>{orderPlacedMessage}</span>
              <button
                onClick={() => setOrderPlacedMessage(null)}
                className="text-emerald-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Table Selector Box */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f1d] border border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#a99c8f]">Dining Station:</span>
              <select
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="bg-[#282725] text-xs font-bold text-[#f3be65] rounded-md px-2 py-1 border border-white/10 focus:outline-none cursor-pointer"
              >
                {tableOptions.map((t) => (
                  <option key={t} value={t} className="bg-[#1c1b1b] text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[11px] text-[#ffb4ab] hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Cart Items List */}
          {cart.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center text-[#9c8f7e]">
              <UtensilsCrossed className="w-12 h-12 stroke-[1.2] opacity-30 mb-3" />
              <p className="text-sm font-medium text-[#e5e2e1]">Your order docket is empty</p>
              <p className="text-xs text-[#8a7e72] mt-1 max-w-xs">
                Select your favorite dishes, breads, curries or cocktails from the menu to start!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-4 py-1.5 rounded-lg bg-[#d4a24c] text-[#1c1200] text-xs font-bold"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              {cart.map((item) => {
                const isVeg = item.type === 'veg';
                return (
                  <div
                    key={item.cartId}
                    className="p-3 rounded-xl bg-[#201f1d] border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5 flex-1 min-w-0">
                      {/* Dietary dot */}
                      <div
                        className={`w-3.5 h-3.5 mt-0.5 rounded-xs border flex items-center justify-center p-0.5 shrink-0 ${
                          isVeg ? 'border-emerald-500' : 'border-red-500'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isVeg ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-[#f5f5f5] truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-[#f3be65] font-medium">
                          ₹{item.price} {item.variant !== 'Regular' ? `• ${item.variant}` : ''}
                        </span>
                      </div>
                    </div>

                    {/* Stepper & Line Total */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="inline-flex items-center gap-1.5 bg-[#282725] rounded-lg px-1.5 py-0.5 border border-white/5">
                        <button
                          onClick={() => updateQty(item.cartId, -1)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 flex items-center justify-center text-[#d3c4b2] hover:text-[#f3be65] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-4 text-center tabular-nums">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.cartId, 1)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 flex items-center justify-center text-[#d3c4b2] hover:text-[#f3be65] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#f5f5f5] min-w-14 text-right tabular-nums">
                        ₹{item.price * item.qty}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        aria-label="Remove item"
                        className="p-1 text-[#8a7e72] hover:text-[#ffb4ab] transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {cart.length > 0 && (
            <>
              {/* Cooking Instructions & Spice Preferences */}
              <div className="flex flex-col gap-1.5 pt-2">
                <label htmlFor="order-note-input" className="text-xs font-medium text-[#d3c4b2]">
                  Special Instructions / Spice Level
                </label>
                <textarea
                  id="order-note-input"
                  rows={2}
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="e.g. Medium spicy, crisp tandoori rotis, extra lemon & onions..."
                  className="w-full p-2.5 rounded-xl bg-[#201f1d] border border-white/5 text-xs text-[#e5e2e1] placeholder:text-[#786e63] focus:outline-none focus:border-[#d4a24c]/60 resize-none transition-colors"
                />
              </div>

              {/* Guest Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="guest-name-input" className="text-xs font-medium text-[#d3c4b2]">
                  Guest Name (Optional)
                </label>
                <input
                  id="guest-name-input"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your name for order billing docket"
                  className="w-full px-3 py-2 rounded-xl bg-[#201f1d] border border-white/5 text-xs text-[#e5e2e1] placeholder:text-[#786e63] focus:outline-none focus:border-[#d4a24c]/60 transition-colors"
                />
              </div>

              {/* Billing Calculations */}
              <div className="p-3.5 rounded-xl bg-[#201f1d] border border-white/5 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between text-[#a99c8f]">
                  <span>Item Subtotal</span>
                  <span className="tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#a99c8f]">
                  <span>GST &amp; Service Charges (5%)</span>
                  <span className="tabular-nums">₹{gstAmount}</span>
                </div>
                <div className="pt-2 mt-1 border-t border-white/10 flex justify-between font-serif text-base font-bold text-[#f3be65]">
                  <span>Total Payable</span>
                  <span className="tabular-nums">₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#1f1e1c] border-t border-white/5 flex flex-col gap-2">
            <button
              onClick={sendOrderToWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#052e16] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Send Order to Kitchen via WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#9c8f7e] px-1">
              <span>Orders route directly to Table #{tableNumber} KOT</span>
              <button
                onClick={handleCopyOrder}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy summary'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
