import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const HIGHLIGHTS = [
  'Certified Trainers',
  'Modern Equipment',
  'Personal Guidance',
  'Supportive Community',
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
              <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                About EvoFit Gym
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-6">
              Train With <br />
              <span className="text-zinc-500">Purpose.</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-12 max-w-md">
              At EvoFit Gym, we believe results come from consistency, expert guidance, and the right environment. Whether your goal is building muscle, losing fat, improving strength, or simply becoming healthier, our coaches are committed to helping you achieve lasting results.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-6">
              {HIGHLIGHTS.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-default">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 group-hover:bg-white/10 group-hover:border-white/30 transition-colors">
                    <Check size={16} className="text-zinc-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg md:text-xl font-light text-white tracking-wide">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[500px] md:h-[700px] lg:h-[800px] w-full group"
          >
            <div className="absolute inset-0 bg-zinc-900" />
            <img 
              src="/gallery/1st.jpg" 
              alt="EvoFit Gym Facility"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-70" />
            
            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-5 md:p-6 max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white text-sm md:text-base tracking-[0.15em]">★★★★★</span>
                <span className="text-white font-bold text-lg md:text-xl">4.9 Rating</span>
              </div>
              <p className="text-zinc-300 font-light text-sm md:text-base leading-snug">
                Trusted by <br/>
                <span className="text-white font-bold">500+ Members</span>
              </p>
            </div>
            
            {/* Minimalist Accents */}
            <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-white/30" />
            <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-white/30" />
            <div className="absolute top-0 left-0 h-1/3 w-[1px] bg-white/30" />
            <div className="absolute bottom-0 right-0 h-1/3 w-[1px] bg-white/30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
