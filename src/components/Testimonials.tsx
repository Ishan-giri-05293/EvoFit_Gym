import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    text: "I joined EvoFit Gym to build muscle, and within a few months I started seeing visible changes. The trainers actually correct every exercise instead of leaving you on your own. The atmosphere keeps you motivated every day.",
    author: "Rohit",
    goal: "Muscle Gain",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "I had zero confidence before joining. The coaching, workout plans, and discipline completely changed my physique. Easily the best gym I've trained at.",
    author: "Priyanshu",
    goal: "Fat Loss",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "I've tried multiple gyms, but this is the first place where I stayed consistent. Every trainer genuinely helps instead of just giving a routine.",
    author: "Ankit",
    goal: "Strength Training",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "The equipment is excellent and the trainers pay attention to every member. You never feel ignored.",
    author: "Shivam",
    goal: "Body Recomposition",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 5,
    text: "The environment is motivating, clean, and serious. Perfect for anyone who actually wants results.",
    author: "Muskan",
    goal: "Women's Fitness",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      const gap = 24; // 1.5rem
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-zinc-950 text-white relative border-t border-white/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
              <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                Member Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              Words of <span className="text-zinc-500">Excellence</span>
            </h2>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-0 max-w-7xl mx-auto"
        >
          {REVIEWS.map((review, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={review.id}
              className="w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 snap-start bg-zinc-900/50 border border-white/[0.05] p-6 md:p-8 flex flex-col h-[280px]"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border border-white/10 bg-zinc-800">
                  <img 
                    src={review.image} 
                    alt={review.author} 
                    className="w-full h-full object-cover grayscale opacity-90" 
                    loading="lazy" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm md:text-base">{review.author}</h4>
                  <p className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5">
                    Goal: {review.goal}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={14} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </motion.div>
          ))}
          {/* Spacer for right padding on mobile scroll */}
          <div className="w-[4vw] md:hidden shrink-0" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 px-6 md:hidden">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
