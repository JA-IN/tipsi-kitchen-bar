import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Utensils, MessageSquare, Phone, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, BANQUET_HALLS } from '../data/menuData';
import { BanquetInquiry } from '../types';

interface BanquetModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedHallId?: string;
}

export const BanquetModal: React.FC<BanquetModalProps> = ({
  isOpen,
  onClose,
  preselectedHallId
}) => {
  const [formData, setFormData] = useState<BanquetInquiry>({
    eventType: 'Birthday Party / Anniversary',
    guestCount: 45,
    date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    timeSlot: 'Evening Dinner Gala (7:00 PM – 11:00 PM)',
    hallPreference: preselectedHallId || 'The Royal Speakeasy Lounge (30–70 Guests)',
    catering: 'Mixed Veg & Non-Veg Deluxe Buffet',
    customerName: '',
    phone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const eventTypes = [
    'Birthday Party / Anniversary',
    'Wedding Reception / Ring Ceremony (Roka / Sagai)',
    'Corporate Dinner / Conference',
    'Cocktail & DJ Night / Private Bash',
    'Family Get-Together / Kitty Party'
  ];

  const timeSlots = [
    'Afternoon Lunch (12:00 PM – 4:00 PM)',
    'Sunset High-Tea (4:00 PM – 7:00 PM)',
    'Evening Dinner Gala (7:00 PM – 11:00 PM)',
    'Full Day Exclusive Booking'
  ];

  const cateringOptions = [
    'Pure Veg Royal Feast',
    'Mixed Veg & Non-Veg Deluxe Buffet',
    'Cocktail Finger Foods & Live Tandoor / Robata Bar',
    'Custom Chef Menu (Tasting Session)'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*✨ NEW BANQUET & PARTY HALL ENQUIRY*\n`;
    message += `*Tipsy Kitchen & Bar, Khanna*\n`;
    message += `------------------------------------\n`;
    message += `🎉 *Event Type:* ${formData.eventType}\n`;
    message += `🏛️ *Hall Preferred:* ${formData.hallPreference}\n`;
    message += `👥 *Estimated Guests:* ${formData.guestCount} People\n`;
    message += `📅 *Date:* ${formData.date}\n`;
    message += `⏰ *Slot:* ${formData.timeSlot}\n`;
    message += `🍽️ *Catering Choice:* ${formData.catering}\n`;
    message += `------------------------------------\n`;
    message += `👤 *Client Name:* ${formData.customerName.trim() || 'Valued Host'}\n`;
    if (formData.phone.trim()) {
      message += `📞 *Contact Number:* ${formData.phone.trim()}\n`;
    }
    if (formData.notes.trim()) {
      message += `📝 *Special Requests:* ${formData.notes.trim()}\n`;
    }
    message += `------------------------------------\n`;
    message += `_Please share hall availability, menu packages & rate quotation. Thank you!_ 🙏`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Scrim Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-[#181716] border border-[#f3be65]/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#201f1d] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#181716] border border-[#d4a24c]/40 flex items-center justify-center p-1.5 shadow-sm">
              <img
                src="/assets/tipsy_bull_logo.png"
                alt="Tipsy Bull Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(245,130,32,0.4)]"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f5f5f5] leading-tight">
                Book Party &amp; Banquet Hall
              </h3>
              <p className="text-xs text-[#a99c8f] flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3 h-3 text-[#f3be65]" />
                {RESTAURANT_INFO.landmark} • {RESTAURANT_INFO.address}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-8 h-8 rounded-full bg-[#272624] hover:bg-[#333230] text-[#a99c8f] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 no-scrollbar">
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center gap-3">
              <CheckCircle className="w-14 h-14 text-[#25D366] animate-bounce" />
              <h4 className="font-serif text-xl font-bold text-white">
                WhatsApp Inquiry Dispatched!
              </h4>
              <p className="text-xs text-[#a99c8f] max-w-sm">
                Your banquet request has been formatted and opened in WhatsApp. Our banquet manager will respond with customized packages shortly.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-[#252424] text-xs font-semibold text-[#e5e2e1] hover:bg-[#302e2e]"
                >
                  Edit Inquiry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#d4a24c] text-[#1c1200] text-xs font-bold hover:bg-[#f3be65]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Event Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#d3c4b2]">
                  Occasion / Event Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4a24c] cursor-pointer"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#1c1b1b]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hall Preference & Guest Count Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#d3c4b2]">
                    Venue / Hall
                  </label>
                  <select
                    value={formData.hallPreference}
                    onChange={(e) => setFormData({ ...formData, hallPreference: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4a24c] cursor-pointer"
                  >
                    <option value="The Royal Speakeasy Lounge (30–70 Guests)" className="bg-[#1c1b1b]">
                      The Royal Speakeasy Lounge (30–70 Guests)
                    </option>
                    <option value="Grand Sovereign Banquet Hall (80–250 Guests)" className="bg-[#1c1b1b]">
                      Grand Sovereign Banquet Hall (80–250 Guests)
                    </option>
                    <option value="Entire Venue Exclusive Buyout (300+ Guests)" className="bg-[#1c1b1b]">
                      Entire Venue Exclusive Buyout (300+ Guests)
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#d3c4b2] flex items-center justify-between">
                    <span>Expected Guests</span>
                    <span className="text-[#f3be65] font-bold">{formData.guestCount} Guests</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="15"
                      max="300"
                      step="5"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                      className="w-full accent-[#d4a24c] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#d3c4b2] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#f3be65]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4a24c]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#d3c4b2] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#f3be65]" />
                    <span>Time Slot</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4a24c] cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1c1b1b]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Catering Style */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#d3c4b2] flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#f3be65]" />
                  <span>Food &amp; Beverage Package</span>
                </label>
                <select
                  value={formData.catering}
                  onChange={(e) => setFormData({ ...formData, catering: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4a24c] cursor-pointer"
                >
                  {cateringOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1c1b1b]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Host Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#d3c4b2]">
                    Host Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Harpreet Singh"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white placeholder:text-[#786e63] focus:outline-none focus:border-[#d4a24c]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#d3c4b2]">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white placeholder:text-[#786e63] focus:outline-none focus:border-[#d4a24c]"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#d3c4b2]">
                  Special Requirements (DJ, Cake, Decor, Bar)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need DJ sound system, floral stage backdrop, Robata grill starters live counter..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#201f1d] border border-white/10 text-xs text-white placeholder:text-[#786e63] focus:outline-none focus:border-[#d4a24c] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#052e16] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Send Party Hall Enquiry via WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-[#a99c8f] pt-1">
                  <span>Or speak with Banquet Manager:</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-[#f3be65] font-semibold hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.secondaryPhone}`}
                    className="text-[#f3be65] font-semibold hover:underline"
                  >
                    {RESTAURANT_INFO.secondaryPhoneDisplay}
                  </a>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
