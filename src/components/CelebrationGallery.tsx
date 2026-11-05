import React, { useState } from 'react';
import { Maximize2, X, Camera } from 'lucide-react';
import { CELEBRATION_GALLERY } from '../data/menuData';
import { GalleryPhoto } from '../types';

interface CelebrationGalleryProps {
  onBookClick: () => void;
}

export const CelebrationGallery: React.FC<CelebrationGalleryProps> = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Gatherings' },
    { id: 'Birthdays', label: 'Birthday Bashes' },
    { id: 'Receptions', label: 'Wedding Receptions' },
    { id: 'Family & Corporate', label: 'Family & Corporate' },
    { id: 'Lounge & Bar', label: 'Lounge Ambiance' }
  ];

  const filteredPhotos = activeTab === 'all'
    ? CELEBRATION_GALLERY
    : CELEBRATION_GALLERY.filter((p) => p.category === activeTab);

  return (
    <section id="gallery" className="w-full py-12 bg-[#121212] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201f1d] border border-[#f3be65]/30 text-[#f3be65] text-xs font-semibold uppercase tracking-widest mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Memories &amp; Moments</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#f5f5f5] tracking-tight">
              Celebration Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#a99c8f] mt-1 max-w-xl">
              From intimate birthday bashes and cocktail nights to grand wedding receptions and corporate family feasts at Tipsy Kitchen &amp; Bar.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === c.id
                  ? 'bg-[#d4a24c] text-[#1c1200] shadow-sm'
                  : 'bg-[#1c1b1b] text-[#a99c8f] hover:text-white hover:bg-[#252424] border border-white/5'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-[#1c1b1b] border border-white/5 hover:border-[#f3be65]/40 transition-all duration-300 shadow-lg cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video sm:aspect-4/3 w-full overflow-hidden bg-[#141414]">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#121212]/80 backdrop-blur-md text-[10px] font-bold text-[#f3be65] border border-[#f3be65]/20 uppercase tracking-wider">
                    {photo.category}
                  </span>
                </div>

                {/* View Icon Overlay */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#1c1b1b]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#d3c4b2] group-hover:text-[#f3be65] group-hover:scale-110 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Photo Caption Container */}
              <div className="p-4 bg-[#1c1b1b] flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#f5f5f5] group-hover:text-[#ffd885] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#9e9e9e] mt-1 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <div
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <div className="relative max-w-4xl w-full bg-[#181716] border border-[#f3be65]/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col animate-in zoom-in-95 duration-200">
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[70vh]"
                />
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 sm:p-6 bg-[#1f1e1c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#d4a24c] uppercase tracking-widest">
                    {activePhoto.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a99c8f] mt-1 max-w-xl">
                    {activePhoto.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
