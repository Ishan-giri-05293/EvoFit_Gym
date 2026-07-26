import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TRAINERS = [
  {
    category: 'Personal Trainer',
    name: 'Harish Nagar',
    role: 'Certified Fitness Professional',
    experience: 'Experience: 3 Years',
    image: '/Harish.jpg',
    aspect: 'aspect-[4/5] lg:aspect-[3/4]',
  },
  {
    category: 'Evening Trainer',
    name: 'PRAVEEN',
    role: 'Strength Training, Muscle Gain & Functional Fitness',
    experience: 'Experience: 3+ Years',
    image: '/praveen.jpg',
    aspect: 'aspect-[4/5] lg:aspect-[3/4]',
  },
  {
    category: 'Morning General Trainer',
    name: 'Aman Singh Rajput',
    role: 'Morning General Trainer',
    experience: 'Experience: 3 Years',
    image: '/aman-rajput.jpg',
    aspect: 'aspect-[4/5] md:aspect-[3/4]',
  },
  {
    category: 'Morning Female Personal Trainer',
    name: 'Anchal Nagar',
    role: 'Morning Female Personal Trainer',
    experience: 'Experience: 3 Years',
    image: '/anchal-nagar.jpg',
    aspect: 'aspect-[4/5] md:aspect-[3/4]',
  },
  {
    category: 'Evening Female Trainer',
    name: 'Muskan Hooda',
    role: 'Evening Female Trainer',
    experience: 'Experience: 3 Years',
    image: '/muskan-Hooda.jpg',
    aspect: 'aspect-[4/5] md:aspect-[3/4]',
  },
];

export function Trainers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isInView) {
      timeoutId = setTimeout(() => {
        controls.start({
          x: [0, -24, 0],
          transition: { duration: 1, ease: "easeInOut", times: [0, 0.5, 1] }
        }).catch(() => {});
      }, 800);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, controls]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section ref={sectionRef} id="trainers" className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative border-t border-white/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
              <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                Meet The Experts
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85]">
              Elite <br />
              <span className="text-zinc-500">Trainers</span>
            </h2>
          </div>
          <div className="max-w-sm flex flex-col md:items-end md:text-right">
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-8 md:mb-0">
              Our team of certified professionals is dedicated to pushing your limits and crafting the perfect strategy for your evolution.
            </p>
            {/* Desktop Navigation Arrows (Hidden on mobile) */}
            <div className="hidden md:flex gap-4 mt-8">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group/carousel mb-12"
        >
          {/* Overlay Navigation Arrows (Fade in on hover, desktop only) */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-zinc-950"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-zinc-950"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4 md:-ml-6 lg:-ml-8">
              {TRAINERS.map((trainer, index) => (
                <TrainerCard key={index} trainer={trainer} controls={controls} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-12 md:mb-16">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-tighter text-white mb-6 md:mb-8">
            Ready to train with our experts?
          </h3>
          <Link
            to="/book-trial"
            className="group h-12 md:h-14 px-8 md:px-10 flex items-center justify-center bg-white text-zinc-950 font-bold text-xs md:text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98]"
          >
            <span className="flex items-center gap-2">
              Book Your Free Trial
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

const TrainerCard: React.FC<{ trainer: any; controls: any }> = ({ trainer, controls }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'touch') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { x, y, id }]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-4 md:pl-6 lg:pl-8">
      <motion.div
        animate={controls}
        whileTap={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        onPointerDown={handlePointerDown}
        className="group cursor-pointer flex flex-col h-full relative"
      >
        {/* Image Container */}
        <div className={`relative ${trainer.aspect} w-full overflow-hidden mb-6 md:mb-8 bg-zinc-900 lg:group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-shadow duration-500`}>
          <img 
            src={trainer.image} 
            alt={trainer.name}
            className="w-full h-full object-cover opacity-100 lg:grayscale lg:opacity-70 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 lg:opacity-60" />
          
          {/* Ripple Effect Container */}
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.25 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bg-white/40 rounded-full pointer-events-none z-20"
              style={{
                left: ripple.x - 100,
                top: ripple.y - 100,
                width: 200,
                height: 200,
              }}
            />
          ))}
        </div>
        
        {/* Editorial Text */}
        <div className="flex flex-col flex-grow">
          <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 md:mb-4">
            {trainer.category}
          </p>
          <h3 className="text-lg md:text-xl lg:text-2xl font-black uppercase tracking-widest text-zinc-100 mb-2 md:mb-3 lg:group-hover:text-white transition-colors">
            {trainer.name}
          </h3>
          
          {trainer.role !== trainer.category && (
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-4">
              {trainer.role}
            </p>
          )}
          
          <div className="mt-auto pt-4 md:pt-6">
            <div className="h-[1px] w-12 bg-white/10 mb-4 md:mb-5 lg:group-hover:w-full lg:group-hover:bg-white/30 transition-all duration-500" />
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              {trainer.experience}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
