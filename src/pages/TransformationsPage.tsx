/// <reference types="vite/client" />
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dynamically load all images in public/transformations
const imageModules = import.meta.glob('/public/transformations/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const IMAGES = Object.keys(imageModules).map((key) => key.replace('/public', ''));

export function TransformationsPage() {
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
    <div className="bg-zinc-950 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
              <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                Real Members. Real Consistency. Real Results.
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-6">
              Happy Client <br />
              <span className="text-zinc-500">Transformations</span>
            </h1>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        {IMAGES.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 5) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden bg-zinc-900 cursor-pointer rounded-sm break-inside-avoid shadow-lg"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="absolute inset-0 bg-zinc-950/20 lg:group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={url} 
                  alt={`Transformation ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover opacity-90 lg:grayscale lg:opacity-70 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-light text-2xl shadow-xl">
                    +
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500">
            <p className="text-lg font-light">More transformation stories coming soon.</p>
          </div>
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && IMAGES.length > 0 && (
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
            
            {IMAGES.length > 1 && (
              <>
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
              </>
            )}

            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={IMAGES[selectedIndex]}
              alt={`Transformation ${selectedIndex + 1}`}
              className="relative max-w-full max-h-[85vh] object-contain shadow-2xl z-10 select-none rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
            
            {IMAGES.length > 1 && (
              <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center z-[110] pointer-events-none">
                <span className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-bold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {selectedIndex + 1} / {IMAGES.length}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
