import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, MenuVariant } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, variant: MenuVariant, qty?: number) => void;
  updateQty: (cartId: string, delta: number) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  getItemQty: (itemId: string, variantLabel: string) => number;
  totalItemsCount: number;
  subtotal: number;
  gstAmount: number;
  grandTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  tableNumber: string;
  setTableNumber: (table: string) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  orderNote: string;
  setOrderNote: (note: string) => void;
  sendOrderToWhatsApp: () => void;
  orderPlacedMessage: string | null;
  setOrderPlacedMessage: (msg: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'tipsy_kitchen_cart_v1';
const LOCAL_STORAGE_TABLE_KEY = 'tipsy_kitchen_table_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear stale cart from localStorage', e);
    }
    return [];
  });

  const [tableNumber, setTableNumber] = useState<string>(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_TABLE_KEY) || 'Table 04';
    } catch {
      return 'Table 04';
    }
  });

  const [customerName, setCustomerName] = useState<string>('');
  const [orderNote, setOrderNote] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [orderPlacedMessage, setOrderPlacedMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to persist cart", e);
    }
  }, [cart]);

  // Sync table to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, tableNumber);
    } catch (e) {
      console.error("Failed to persist table", e);
    }
  }, [tableNumber]);

  const addToCart = (item: MenuItem, variant: MenuVariant, qty: number = 1) => {
    const cartId = `${item.id}-${variant.label}`;
    setCart((prev) => {
      const existing = prev.find((i) => i.cartId === cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === cartId ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          cartId,
          itemId: item.id,
          name: item.name,
          variant: variant.label,
          price: variant.price,
          qty,
          type: item.type === 'veg-nonveg' 
            ? (variant.label.toLowerCase().includes('non') ? 'nonveg' : 'veg')
            : item.type
        }
      ];
    });
  };

  const updateQty = (cartId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((i) => {
          if (i.cartId === cartId) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getItemQty = (itemId: string, variantLabel: string): number => {
    const cartId = `${itemId}-${variantLabel}`;
    const found = cart.find((i) => i.cartId === cartId);
    return found ? found.qty : 0;
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gstAmount = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gstAmount;

  /**
   * Builds formatted order message and sends to WhatsApp
   */
  const sendOrderToWhatsApp = () => {
    if (!cart || cart.length === 0) {
      alert("Your cart is empty! Please add some delicious dishes first.");
      return;
    }

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let message = "Hello Tipsy Kitchen & Bar! 🍽️\n";
    message += `I'd like to place an order from *${tableNumber}* (${timeStr}):\n\n`;

    let total = 0;
    cart.forEach((item, index) => {
      const lineTotal = item.price * item.qty;
      total += lineTotal;
      message += `${index + 1}. *${item.name}*`;
      if (item.variant && item.variant !== "Regular") {
        message += ` (${item.variant})`;
      }
      message += ` x${item.qty} - ₹${lineTotal}\n`;
    });

    const gst = Math.round(total * 0.05);
    const finalBill = total + gst;

    message += `\n-----------------------------\n`;
    message += `Subtotal: ₹${total}\n`;
    message += `GST & Service (5%): ₹${gst}\n`;
    message += `*Grand Total: ₹${finalBill}*\n\n`;

    if (customerName.trim()) {
      message += `👤 Guest Name: ${customerName.trim()}\n`;
    }
    message += `📍 Table: ${tableNumber}\n`;

    if (orderNote.trim()) {
      message += `📝 Special Notes: ${orderNote.trim()}\n`;
    }

    message += `\nPlease confirm my order. Thank you! 🙏\n`;
    message += `_Sent via Tipsy Digital Menu_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    setOrderPlacedMessage(`Order successfully routed to Kitchen WhatsApp for ${tableNumber}!`);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        getItemQty,
        totalItemsCount,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
