import { motion } from 'motion/react';
import { Award, Zap, HeartHandshake, ShieldCheck, Star } from 'lucide-react';
import { WHY_REASONS } from '../data';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';

export default function WhyPivora() {
  const getIcon = (idx: number, className = "w-5 h-5 text-accent-primary") => {
    switch (idx) {
      case 0:
        return <Award className={className} />;
      case 1:
        return <Zap className={className} />;
      case 2:
        return <ShieldCheck className={className} />;
      case 3:
        return <HeartHandshake className={className} />;
      default:
        return <Star className={className} />;
    }
  };

  return (
    <section className="py-24 px-4 bg-bg-primary relative overflow-hidden" id="why-pivora">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-3xl pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={entryContainerVariants}
        className="max-w-7xl mx-auto"
      >
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visionary copy and metrics summary */}
          <motion.div 
            variants={entryItemVariants}
            className="lg:col-span-4 space-y-6 text-center lg:text-left"
          >
            <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block font-extrabold">
              THE PIVORA PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight">
              Why Serious Brands Choose Pivora
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We completely reject cheap templates, bloated drag-and-drop builders, and low-converting pages. We operate at the intersection of stunning visual arts and lightning-fast developer code.
            </p>
            
            {/* Visual endorsement rating */}
            <div className="pt-6 border-t border-border-primary flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[10px] text-text-secondary font-display font-extrabold tracking-wider">
                RATED 4.9/5 STARS BY 120+ SaaS FOUNDERS
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bento-styled Grid */}
          <motion.div 
            variants={entryItemVariants}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" 
            id="why-pivora-bento-grid"
          >
            {WHY_REASONS.map((reason, idx) => (
              <motion.div
                key={reason.title}
                whileHover={{ scale: 1.015 }}
                className="p-6 sm:p-8 rounded-2xl bg-bg-secondary border border-border-primary hover:border-accent-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id={`why-card-${idx}`}
              >
                {/* Micro Icon and static numbers column */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-bg-primary border border-border-primary text-accent-primary">
                    {getIcon(idx)}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl sm:text-3xl font-display font-black text-accent-primary select-none">
                      {reason.statValue}
                    </p>
                    <p className="text-[8px] text-text-secondary font-display font-extrabold uppercase tracking-[0.16em]">
                      {reason.statLabel}
                    </p>
                  </div>
                </div>

                {/* Card Title & Copy Description */}
                <div>
                  <h3 className="text-base font-display font-bold text-text-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>

                {/* Card Subtle Decorative Corner Lines */}
                <div className="absolute right-0 bottom-0 w-8 h-8 pointer-events-none opacity-5 border-r border-b border-text-primary rounded-br-2xl"></div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
