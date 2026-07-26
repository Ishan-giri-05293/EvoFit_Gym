import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, User, Phone, MessageSquare, Target, Activity } from 'lucide-react';

export function BookTrial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    age: '',
    gender: '',
    fitnessGoal: '',
    trialDate: '',
    trialTime: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*NEW FREE TRIAL BOOKING*
    
*Name:* ${formData.fullName}
*Mobile:* ${formData.mobile}
*Age:* ${formData.age || 'Not specified'}
*Gender:* ${formData.gender || 'Not specified'}
*Fitness Goal:* ${formData.fitnessGoal}
*Preferred Date:* ${formData.trialDate}
*Preferred Time:* ${formData.trialTime}
*Experience:* ${formData.experience || 'Not specified'}

*Additional Message:* 
${formData.message || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919350856435?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gallery/8th.jpg" 
            alt="Gym Background" 
            className="w-full h-full object-cover scale-105 transform opacity-60" 
          />
          <div className="absolute inset-0 bg-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 text-white drop-shadow-xl">
              Step Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">Greatness</span>
            </h1>
            <p className="hidden md:block text-lg md:text-xl lg:text-2xl text-zinc-300 font-light max-w-2xl mx-auto tracking-wide mb-10 drop-shadow-md">
              Experience the elite atmosphere, premium equipment, and expert guidance at EvoFit Gym. Your first session is on us.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Your Journey <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="booking-section" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Timeline & Image */}
            <div className="hidden md:block lg:col-span-5 space-y-12 lg:sticky lg:top-32">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
                <img 
                  src="/gallery/5th.jpg" 
                  alt="Fitness Training" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">What Happens Next?</h3>
                  <p className="text-zinc-400 font-light text-sm tracking-wide">Your journey to a better you starts here.</p>
                </div>
              </div>
              
              <div className="space-y-10 pl-2">
                {[
                  { step: '01', title: 'Request Session', desc: "Submit your preferences through our secure form. We'll receive your request instantly." },
                  { step: '02', title: 'Fast Confirmation', desc: "Our team will reach out via WhatsApp to confirm your time slot and trainer availability." },
                  { step: '03', title: 'Experience EvoFit Gym', desc: "Arrive 10 minutes early. We'll give you a tour, introduce your coach, and start your session." }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 font-mono text-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="text-zinc-400 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-zinc-900/50 p-8 md:p-12 border border-white/[0.05] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 opacity-20" />
                
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-3">Book Your Trial</h2>
                  <p className="text-zinc-400 font-light tracking-wide">Fill out the details below to secure your complimentary session.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Full Name */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <User size={14} /> Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-zinc-700"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <Phone size={14} /> Mobile Number *
                      </label>
                      <input 
                        type="tel" 
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-zinc-700"
                        placeholder="Enter your mobile number"
                      />
                    </div>

                    {/* Age */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                        Age
                      </label>
                      <input 
                        type="number" 
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-zinc-700"
                        placeholder="e.g. 25"
                        min="16"
                        max="100"
                      />
                    </div>

                    {/* Gender */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                        Gender
                      </label>
                      <select 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Fitness Goal */}
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <Target size={14} /> Fitness Goal *
                      </label>
                      <select 
                        name="fitnessGoal"
                        required
                        value={formData.fitnessGoal}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                      >
                        <option value="">Select your primary goal</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Muscle Gain">Muscle Gain</option>
                        <option value="General Fitness">General Fitness</option>
                        <option value="Strength Training">Strength Training</option>
                        <option value="Endurance">Endurance</option>
                      </select>
                    </div>

                    {/* Preferred Trial Date */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <Calendar size={14} /> Preferred Trial Date *
                      </label>
                      <input 
                        type="date" 
                        name="trialDate"
                        required
                        value={formData.trialDate}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
                      />
                    </div>

                    {/* Preferred Trial Time */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <Clock size={14} /> Preferred Trial Time *
                      </label>
                      <input 
                        type="time" 
                        name="trialTime"
                        required
                        value={formData.trialTime}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
                      />
                    </div>

                    {/* Workout Experience */}
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <Activity size={14} /> Workout Experience
                      </label>
                      <select 
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                      >
                        <option value="">Select experience level</option>
                        <option value="Beginner">Beginner (New to gym)</option>
                        <option value="Intermediate">Intermediate (Some experience)</option>
                        <option value="Advanced">Advanced (Regular gym-goer)</option>
                      </select>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                        <MessageSquare size={14} /> Additional Message
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-zinc-950/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-colors resize-none placeholder:text-zinc-700"
                        placeholder="Any injuries, medical conditions, or specific questions?"
                      ></textarea>
                    </div>

                  </div>

                  <button 
                    type="submit"
                    className="group relative w-full flex items-center justify-center gap-3 bg-white text-zinc-950 px-8 py-5 font-bold tracking-widest uppercase overflow-hidden hover:bg-zinc-200 transition-colors mt-8"
                  >
                    <span className="relative z-10">Confirm Booking</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-zinc-500 text-xs tracking-wider uppercase mt-6">
                    You will be redirected to WhatsApp to finalize your booking.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
