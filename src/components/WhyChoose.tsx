import { motion } from 'motion/react';
import { Dumbbell, Medal, Target, Activity, UserCheck, Flame } from 'lucide-react';

const FEATURES = [
  {
    icon: Medal,
    title: 'Certified Trainers',
    description: 'Learn from industry professionals dedicated to your progress.',
  },
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    description: 'State-of-the-art machines and free weights for optimal results.',
  },
  {
    icon: Target,
    title: 'Personal Training',
    description: 'Tailored fitness plans designed exclusively for your goals.',
  },
  {
    icon: Activity,
    title: 'Cardio & Strength',
    description: 'Expansive zones specifically engineered for endurance and power.',
  },
  {
    icon: UserCheck,
    title: 'Female Trainers',
    description: 'Access to top-tier female coaches for a comfortable environment.',
  },
  {
    icon: Flame,
    title: 'Motivating Culture',
    description: 'Surround yourself with a community that pushes you higher.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function WhyChoose() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
            <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Why Choose EvoFit Gym
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] max-w-3xl">
            The Standard of <br />
            <span className="text-zinc-500">Excellence</span>
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group border border-white/[0.03] bg-zinc-900/20 p-6 md:p-10 hover:bg-zinc-900/60 hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col items-start"
            >
              <div className="mb-6 p-4 border border-white/5 bg-zinc-950 text-zinc-400 group-hover:text-white group-hover:border-white/20 group-hover:bg-zinc-900 transition-all duration-500">
                <feature.icon strokeWidth={1.5} size={28} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-4 group-hover:text-zinc-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
