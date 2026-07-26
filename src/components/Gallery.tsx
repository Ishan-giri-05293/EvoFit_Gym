import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Automatically import all images from /public/gallery
const GALLERY_IMAGES = [
  '/gallery/1st.jpg',
  '/gallery/2nd.jpg',
  '/gallery/3rd.jpg',
  '/gallery/5th.jpg',
  '/gallery/6th.jpg',
  '/gallery/7th.jpg',
  '/gallery/8th.jpg'
];

const getGridClass = (index: number) => {
  const layout = [
    'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto', // 1st
    'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto', // 2nd
    'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto', // 3rd
    'md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto', // 4th
    'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto', // 5th
    'md:col-span-1 md:row-span-1 aspect-square md:aspect-auto', // 6th
    'md:col-span-1 md:row-span-1 aspect-square md:aspect-auto', // 7th
  ];
  return layout[index % layout.length];
};

const IMAGES = GALLERY_IMAGES.map((url, i) => ({
  url,
  className: getGridClass(i),
  alt: `Gallery image ${i + 1}`
}));

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % IMAGES.length);
    }
  }, [selectedIndex]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + IMAGES.length) % IMAGES.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
              <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                The Environment
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85]">
              Premium <br />
              <span className="text-zinc-500">Facilities</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              Every square foot is engineered for performance. Explore our world-class training zones.
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[400px]">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 5) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-zinc-900 cursor-pointer ${img.className}`}
              onClick={() => setSelectedIndex(index)}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-zinc-950/20 lg:group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img 
                src={img.url} 
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-0 opacity-100 lg:grayscale lg:opacity-70 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-light text-2xl">
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-12 md:right-12 text-zinc-400 hover:text-white transition-colors z-[110] bg-black/20 p-2 rounded-full md:bg-transparent md:p-0"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              aria-label="Close gallery"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <button
              className="absolute left-4 md:left-12 text-zinc-400 hover:text-white transition-colors z-[110] bg-black/20 p-3 rounded-full hover:bg-black/40 backdrop-blur-sm"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            <button
              className="absolute right-4 md:right-12 text-zinc-400 hover:text-white transition-colors z-[110] bg-black/20 p-3 rounded-full hover:bg-black/40 backdrop-blur-sm"
              onClick={showNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={IMAGES[selectedIndex].url}
              alt={IMAGES[selectedIndex].alt}
              className="relative max-w-full max-h-full object-contain shadow-2xl z-10 select-none"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center z-[110] pointer-events-none">
              <span className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-bold">
                {selectedIndex + 1} / {IMAGES.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
