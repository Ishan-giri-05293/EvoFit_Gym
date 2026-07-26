import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a complimentary 1-day pass for local residents to experience our premium facilities before committing to a membership."
  },
  {
    question: "Do you have female trainers?",
    answer: "Absolutely. We have a team of elite female trainers available for both personal training and general guidance, ensuring a comfortable and empowering environment."
  },
  {
    question: "What are your membership plans?",
    answer: "We offer Basic, Gold, and Premium tiers. Each is designed to cater to different levels of commitment and access requirements. See our Membership section for detailed breakdowns."
  },
  {
    question: "Do you provide personal training?",
    answer: "Yes, our certified professionals offer bespoke 1-on-1 personal training tailored explicitly to your fitness goals, complete with nutritional guidance."
  },
  {
    question: "What are the gym timings?",
    answer: "We are open 24/7 for Gold and Premium members. Basic members have access from 5:00 AM to 11:00 PM, 365 days a year."
  },
  {
    question: "Where are you located?",
    answer: "We are located in the heart of the city's premium district. Full address details and directions can be found in our Contact section."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-24 bg-zinc-950 text-white relative border-t border-white/[0.03]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
            <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Common Questions
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-zinc-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85]">
            What You Need <br />
            <span className="text-zinc-500">To Know</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="text-zinc-500 group-hover:text-white transition-colors shrink-0">
                  {openIndex === index ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 font-light leading-relaxed pb-6 max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
