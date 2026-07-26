import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-zinc-950 flex items-center">
      {/* Background Image with Cinematic Parallax/Scale Effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
          alt="Athlete training in a premium gym"
          className="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity"
        />
        {/* Elegant Gradient Overlays for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center mt-16 md:mt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="h-[1px] w-8 md:w-12 bg-zinc-400" />
            <span className="text-zinc-300 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Premium Fitness Experience
            </span>
          </motion.div>

          {/* Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter text-white leading-[0.85] mb-6 md:mb-8"
          >
            Evolve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
              Beyond Limits
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-xl font-light mb-10 md:mb-12 leading-relaxed"
          >
            Experience elite training in a world-class facility designed to push you past your boundaries. Your legacy starts here.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Link
              to="/book-trial"
              className="group h-14 px-8 flex items-center justify-center bg-white text-zinc-950 font-bold text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-[2px] active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                Book Free Trial <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/#memberships"
              className="group relative h-14 px-8 flex items-center justify-center border border-white/20 text-white font-bold text-sm tracking-widest uppercase overflow-hidden hover:border-white/40 transition-all duration-300"
            >
              <span className="relative z-10 transition-colors duration-300">View Membership Plans</span>
              <div className="absolute inset-0 h-full w-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-6 md:left-auto md:right-12 flex flex-col items-center gap-4 z-10 hidden sm:flex"
      >
        <span className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase [writing-mode:vertical-lr] rotate-180">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-zinc-800 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
