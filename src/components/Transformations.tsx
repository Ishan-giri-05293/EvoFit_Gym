import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORY = {
  name: 'Rohit',
  time: '6 Months',
  goal: 'Muscle Gain • Strength • Physique Transformation',
  coach: 'Harish Nagar',
  headline: 'Built, Not Born.\nSix Months of Consistency.',
  quote: '"I joined EvoFit Gym to build muscle and become stronger. Every week I saw progress—not just in the mirror, but in my confidence and performance. The coaching, discipline, and environment kept me consistent, and six months later I achieved a physique I never thought was possible."',
  badges: [
    'Noticeable Muscle Growth',
    'Increased Strength',
    'Better Physique',
    'Higher Confidence'
  ],
  beforeImage: '/transformations/beforA.jpg',
  afterImage: '/transformations/WhatsApp Image 2026-07-17 at 16.02.06.jpeg',
};

export function Transformations() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="transformations" className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
            <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Transformation Stories
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] max-w-3xl mb-8 md:mb-12">
            Real People.<br />
            <span className="text-zinc-500">Real Results.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] bg-zinc-900 group overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            {/* After Image */}
            <img 
              src={STORY.afterImage} 
              alt="After Transformation" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
            />
            
            {/* Labels */}
            <div className="absolute top-6 right-6 z-0 mix-blend-difference pointer-events-none">
              <span className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase">After</span>
            </div>
            
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={STORY.beforeImage} 
                alt="Before Transformation" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <span className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase drop-shadow-md">Before</span>
              </div>
            </div>

            {/* Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white/80 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-zinc-950 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <ArrowLeftRight size={16} strokeWidth={2.5} />
              </div>
            </div>

            {/* Slider Input */}
            <input 
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Image comparison slider"
            />
          </motion.div>

          {/* Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1]">
              Built, Not Born.<br />
              <span className="text-zinc-500">Six Months of Consistency.</span>
            </h3>

            <p className="text-lg md:text-xl font-light text-zinc-300 leading-relaxed italic mb-8 border-l-2 border-orange-500 pl-6">
              {STORY.quote}
            </p>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-8 border-t border-white/[0.03] pt-8">
              <div>
                <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1">Member</p>
                <p className="text-zinc-100 text-sm md:text-base font-bold tracking-widest uppercase">{STORY.name}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1">Duration</p>
                <p className="text-zinc-100 text-sm md:text-base font-bold tracking-widest uppercase">{STORY.time}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1">Coach</p>
                <p className="text-zinc-100 text-sm md:text-base font-bold tracking-widest uppercase">{STORY.coach}</p>
              </div>
              <div>
                {/* Empty placeholder for grid balance if needed */}
              </div>

              <div className="col-span-2 border-t border-white/[0.03] pt-6 mt-2">
                <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1">Goal Achieved</p>
                <p className="text-zinc-100 text-sm md:text-base font-bold tracking-widest uppercase">{STORY.goal}</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {STORY.badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Check size={14} className="text-orange-500" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-300">{badge}</span>
                </div>
              ))}
            </div>

            <Link
              to="/book-trial"
              className="group h-14 w-full md:w-fit px-10 flex items-center justify-center bg-white text-zinc-950 font-bold text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                Become Our Next Success Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* See More Happy Clients Button */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
  className="flex justify-center mt-12 md:mt-16"
>
  <Link
    to="/transformations"
    className="group h-14 px-10 flex items-center justify-center bg-orange-500 border border-orange-500 text-zinc-950 font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_8px_30px_rgba(249,115,22,0.35)] transition-all duration-300 transform hover:scale-[1.02]"
  >
    <span className="flex items-center gap-2">
      See More Happy Clients{" "}
      <ArrowRight
        size={16}
        className="group-hover:translate-x-1 transition-transform"
      />
    </span>
  </Link>
</motion.div>

      </div>
    </section>
  );
}
