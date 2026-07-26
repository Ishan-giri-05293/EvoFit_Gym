import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Map, MessageCircle, ArrowRight } from 'lucide-react';

export function VisitEvo() {
  return (
    <section id="visit" className="relative py-12 md:py-16 lg:py-24 bg-zinc-950 text-white overflow-hidden border-t border-white/[0.03]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop"
          alt="EvoFit Gym Interior"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
              <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                Visit EvoFit Gym
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-6">
              Experience The Gym <br />
              <span className="text-zinc-500">Before You Join.</span>
            </h2>

            <p className="text-zinc-400 font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
              Come explore our premium fitness environment, meet our certified trainers, and experience the energy that makes EvoFit Gym one of Greater Noida's most trusted gyms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com/?q=EvoFit+Gym,+Jagat+Farm,+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-14 px-8 flex items-center justify-center bg-white text-zinc-950 font-bold text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Map size={16} className="mr-2" /> Get Directions
                </span>
              </motion.a>
              <a
                href="https://wa.me/919350856435"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-14 px-8 flex items-center justify-center border border-white/20 text-white font-bold text-sm tracking-widest uppercase overflow-hidden hover:border-white/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center transition-colors duration-300">
                  <MessageCircle size={18} strokeWidth={1.5} className="mr-2" />
                  WhatsApp Harish
                </span>
                <div className="absolute inset-0 h-full w-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Location Card */}
            <div className="bg-zinc-900/40 border border-white/5 p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-zinc-950 border border-white/10 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3 group-hover:text-zinc-200 transition-colors">Location</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    FGJ2+83J EvoFit Gym,<br />
                    Jagat Farm, Block E, Chandila,<br />
                    Gamma 1, Greater Noida,<br />
                    Uttar Pradesh 201310
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-zinc-900/40 border border-white/5 p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-zinc-950 border border-white/10 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3 group-hover:text-zinc-200 transition-colors">Open Hours</h3>
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-zinc-400 font-light">Monday &ndash; Saturday</span>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-zinc-300 font-medium whitespace-nowrap">5:00 AM &ndash; 11:00 AM</span>
                        <span className="text-zinc-300 font-medium whitespace-nowrap">4:00 PM &ndash; 11:00 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-zinc-400 font-light">Sunday</span>
                      <span className="text-zinc-300 font-medium whitespace-nowrap">OFF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-zinc-900/40 border border-white/5 p-6 backdrop-blur-sm hover:-translate-y-1 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-zinc-950 border border-white/10 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3 group-hover:text-zinc-200 transition-colors">Contact</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    +91 9350856435<br />
                    evofitgym0@gmail.com
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden border border-white/10 bg-zinc-900 relative grayscale hover:grayscale-0 transition-all duration-1000 group shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6340243686884!2d77.50361007550153!3d28.49058477574213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea69c0d57ce9%3A0x8673a3df542c38ec!2sEvoFit%20Gym!5e0!3m2!1sen!2sin!4v1716910000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
          ></iframe>
          <div className="absolute inset-0 bg-zinc-950/20 pointer-events-none transition-colors duration-1000 group-hover:bg-transparent" />
        </motion.div>
        
      </div>
    </section>
  );
}
