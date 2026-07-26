import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  UserCircle, 
  Dumbbell, 
  Utensils, 
  Target, 
  Activity, 
  Scale, 
  Flame,
  Check
} from 'lucide-react';

const GYM_PLANS = [
  {
    name: 'Basic',
    isPopular: false,
    pricing: [
      { duration: '1 Month', price: '1,499' },
      { duration: '3 Months', price: '3,499' },
      { duration: '6 Months', price: '4,999' },
      { duration: '12 Months', price: '7,999' },
    ],
    features: [
      'Unlimited Gym Access',
      'Cardio & Strength Training',
      'General Trainer Support',
      'Standard Workout Guidance',
    ]
  },
  {
    name: 'Gold',
    isPopular: true,
    pricing: [
      { duration: '1 Month', price: '2,199' },
      { duration: '3 Months', price: '4,999' },
      { duration: '6 Months', price: '6,999' },
      { duration: '12 Months', price: '10,999' },
    ],
    features: [
      'Everything in Basic',
      'Personalized Workout Plan',
      'Basic Diet Plan',
      'Monthly Body Assessment',
      'Priority Trainer Support',
    ]
  },
  {
    name: 'Premium',
    isPopular: false,
    pricing: [
      { duration: '1 Month', price: '2,999' },
      { duration: '3 Months', price: '6,499' },
      { duration: '6 Months', price: '8,999' },
      { duration: '12 Months', price: '13,999' },
    ],
    features: [
      'Everything in Gold',
      'Personal Training Sessions',
      'Customized Diet Plan',
      'Weekly Progress Tracking',
      'Priority Assistance',
      'Exclusive Member Benefits',
    ]
  },
];

const PT_PLANS = [
  {
    name: 'Silver PT',
    price: '3,000',
    sessionsPerMonth: '8',
    sessionsPerWeek: '2',
    isPopular: false,
  },
  {
    name: 'Gold PT',
    price: '4,000',
    sessionsPerMonth: '12',
    sessionsPerWeek: '3',
    isPopular: true,
  },
  {
    name: 'Premium PT',
    price: '5,000',
    sessionsPerMonth: '16',
    sessionsPerWeek: '4',
    isPopular: false,
  },
  {
    name: 'Elite PT',
    price: '7,000',
    sessionsPerMonth: '24',
    sessionsPerWeek: '6',
    isPopular: false,
  },
];

const PT_BENEFITS = [
  { label: 'One-on-One Personal Trainer', icon: UserCircle },
  { label: 'Customized Workout Plan', icon: Dumbbell },
  { label: 'Personalized Diet Guidance', icon: Utensils },
  { label: 'Form & Technique Correction', icon: Target },
  { label: 'Progress Tracking', icon: Activity },
  { label: 'Body Assessment', icon: Scale },
  { label: 'Motivation & Accountability', icon: Flame },
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

type TabType = 'gym' | 'pt';

function GymPlanCard({ plan }: { plan: typeof GYM_PLANS[0]; key?: number | string }) {
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const currentPricing = plan.pricing[selectedDurationIndex];

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      className={`group relative bg-zinc-900/10 p-8 lg:p-10 transition-all duration-500 hover:bg-zinc-900/40 flex flex-col h-full ${
        plan.isPopular 
          ? 'border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.05)] lg:-my-4 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)] z-10' 
          : 'border border-white/[0.03] hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] z-0'
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 border border-amber-500/30 text-amber-500 uppercase tracking-[0.2em] text-[10px] font-bold px-4 py-1">
          ⭐ Most Popular
        </div>
      )}
      
      <div className="mb-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-zinc-100 mb-6">
          {plan.name}
        </h3>
        
        <div className="flex items-center justify-center gap-1 mb-2 h-16">
          <span className="text-zinc-500 text-2xl font-light">₹</span>
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentPricing.price}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-light tracking-tighter inline-block"
            >
              {currentPricing.price}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-10">
        {plan.pricing.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelectedDurationIndex(i)}
            className={`py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] transition-colors border ${
              selectedDurationIndex === i
                ? 'border-amber-500/50 bg-amber-500/10 text-amber-400'
                : 'border-white/5 bg-zinc-900/30 text-zinc-500 hover:text-zinc-300 hover:border-white/20'
            }`}
          >
            {p.duration}
          </button>
        ))}
      </div>

      <div className="h-[1px] w-full bg-white/[0.03] mb-10 group-hover:bg-white/10 transition-colors" />

      <ul className="flex flex-col gap-5 mb-14 flex-grow">
        {plan.features.map((feature, fIndex) => (
          <li key={fIndex} className="flex items-start gap-3 text-zinc-300">
            <Check size={18} strokeWidth={1.5} className={plan.isPopular ? "text-amber-500/70" : "text-zinc-500"} />
            <span className="font-light text-sm md:text-base leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/book-trial"
        className={`w-full h-14 flex items-center justify-center font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
          plan.isPopular
            ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-950'
            : 'bg-white text-zinc-950 hover:bg-zinc-200'
        }`}
      >
        Book Free Trial
      </Link>
    </motion.div>
  );
}

export function Memberships() {
  const [activeTab, setActiveTab] = useState<TabType>('gym');

  return (
    <section id="memberships" className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
            <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Membership & Pricing
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-4 md:mb-6">
            Choose Your <br />
            <span className="text-zinc-500">Plan</span>
          </h2>
          <p className="text-zinc-400 font-light text-base md:text-lg max-w-2xl mb-8">
            Choose the fitness plan that matches your goals.
          </p>

          {/* Segmented Toggle */}
          <div className="relative flex items-center p-1 bg-zinc-900/50 border border-white/5 rounded-full z-10">
            <button
              onClick={() => setActiveTab('gym')}
              className={`relative px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${
                activeTab === 'gym' ? 'text-zinc-950' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Gym Membership
            </button>
            <button
              onClick={() => setActiveTab('pt')}
              className={`relative px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${
                activeTab === 'pt' ? 'text-zinc-950' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Personal Training
            </button>
            
            {/* Animated Background */}
            <motion.div
              layoutId="activeTabBackground"
              initial={false}
              className="absolute top-1 bottom-1 bg-white rounded-full z-0"
              animate={{
                left: activeTab === 'gym' ? '4px' : '50%',
                right: activeTab === 'pt' ? '4px' : '50%',
                width: 'calc(50% - 4px)',
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'gym' && (
            <motion.div
              key="gym"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gym Pricing Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-12 md:mb-16">
                {GYM_PLANS.map((plan, index) => (
                  <GymPlanCard key={index} plan={plan} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'pt' && (
            <motion.div
              key="pt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* PT Pricing Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center mb-12 md:mb-16">
                {PT_PLANS.map((plan, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -4 }}
                    className={`group relative bg-zinc-900/10 p-8 lg:p-10 transition-all duration-500 hover:bg-zinc-900/40 flex flex-col h-full ${
                      plan.isPopular 
                        ? 'border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.05)] lg:-my-4 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)] z-10' 
                        : 'border border-white/[0.03] hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] z-0'
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 border border-amber-500/30 text-amber-500 uppercase tracking-[0.2em] text-[10px] font-bold px-4 py-1">
                        ⭐ Most Popular
                      </div>
                    )}
                    
                    <div className="mb-10 text-center">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-zinc-100 mb-6">
                        {plan.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <span className="text-zinc-500 text-2xl font-light">₹</span>
                        <span className="text-4xl md:text-5xl font-light tracking-tighter">{plan.price}</span>
                      </div>
                      <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Per Month</div>
                    </div>

                    <div className="h-[1px] w-full bg-white/[0.03] mb-10 group-hover:bg-white/10 transition-colors" />

                    <div className="flex flex-col gap-6 mb-12 flex-grow text-center">
                      <div>
                        <div className="text-3xl font-light text-zinc-100 mb-1">{plan.sessionsPerMonth}</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Sessions / Month</div>
                      </div>
                      <div>
                        <div className="text-3xl font-light text-zinc-100 mb-1">{plan.sessionsPerWeek}</div>
                        <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Sessions / Week</div>
                      </div>
                    </div>

                    <Link
                      to="/book-trial"
                      className={`w-full h-14 flex items-center justify-center font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                        plan.isPopular
                          ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-950'
                          : 'bg-white text-zinc-950 hover:bg-zinc-200'
                      }`}
                    >
                      Book Free Trial
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Benefits Strip */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/[0.03] bg-zinc-900/10 p-6 md:p-10 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
                
                <div className="text-center mb-8 md:mb-12 relative z-10">
                  <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest text-zinc-100">
                    Every Personal Training Plan Includes
                  </h3>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 relative z-10">
                  {PT_BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-5 group w-[130px] md:w-[150px]">
                      <div className="w-16 h-16 rounded-full border border-white/[0.03] bg-zinc-900/30 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 group-hover:bg-zinc-800 transition-all duration-500">
                        <benefit.icon strokeWidth={1} size={26} className="group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-zinc-400 font-light text-[13px] tracking-wide leading-snug group-hover:text-zinc-200 transition-colors">
                        {benefit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

