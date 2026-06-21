import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, CheckSquare, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { PROCESS_STEPS } from '../data';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';

export default function Process() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  return (
    <section className="py-24 px-4 bg-bg-secondary/30 relative border-y border-border-primary/40 overflow-hidden" id="process">
      {/* Dynamic line connecting steps */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent pointer-events-none hidden lg:block"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={entryContainerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* Section Header */}
        <motion.div 
          variants={entryItemVariants}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block">
            THE STRATEGIC WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            How We Guarantee Success
          </h2>
          <p className="text-sm text-text-secondary">
            From initial alignment wireframes to lightning-fast code compilation and automated conversion setups.
          </p>
        </motion.div>

        {/* Process Steps Indicator Buttons Grid (Pills) */}
        <motion.div 
          variants={entryItemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12" 
          id="process-timeline-tabs"
        >
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-5 rounded-2xl text-left border cursor-pointer group transition-all duration-300 ${
                  isActive
                    ? 'bg-bg-secondary border-accent-primary shadow-lg ring-1 ring-accent-primary/20'
                    : 'bg-bg-primary/50 border-border-primary hover:border-accent-primary/40'
                }`}
                id={`process-tab-${idx}`}
              >
                {/* Step Number Badge */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-extrabold text-xs shrink-0 transition-colors duration-300 ${
                    isActive
                      ? 'bg-accent-primary text-bg-primary'
                      : 'bg-bg-tertiary text-text-secondary group-hover:text-accent-primary'
                  }`}
                >
                  {step.number}
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] text-text-secondary font-display font-extrabold tracking-wider leading-none uppercase">
                    STAGE {step.number}
                  </p>
                  <p className={`text-xs font-bold mt-1 transition-colors ${isActive ? 'text-accent-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                    {step.title.split(' ')[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Detailed Step Content Dashboard */}
        <motion.div 
          variants={entryItemVariants}
          className="max-w-4xl mx-auto" 
          id="process-content-dashboard"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-3xl bg-bg-secondary border border-border-primary shadow-2xl relative overflow-hidden"
            >
              {/* Corner Glow Bubble inside dashboard */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-accent-primary/5 blur-3xl"></div>

              {/* Grid representation inside cardboard */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Side info columns */}
                <div className="md:col-span-8 space-y-6">
                  {/* Step headers */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-display font-extrabold tracking-wider text-accent-primary">
                      <Clock className="w-3.5 h-3.5" />
                      <span>APPROX TIMEFRAME: {PROCESS_STEPS[activeStepIdx].duration}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary mt-2 flex items-center gap-2">
                      <span className="text-accent-primary text-opacity-80">{PROCESS_STEPS[activeStepIdx].number}.</span>
                      {PROCESS_STEPS[activeStepIdx].title}
                    </h3>
                    <p className="text-xs text-text-secondary italic mt-1">
                      "{PROCESS_STEPS[activeStepIdx].subtitle}"
                    </p>
                  </div>

                  {/* Main descriptions copy */}
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {PROCESS_STEPS[activeStepIdx].description}
                  </p>
                </div>

                {/* Right Side deliverables listing */}
                <div className="md:col-span-4 space-y-4 bg-bg-primary/50 p-5 rounded-2xl border border-border-primary/80">
                  <div className="flex items-center gap-1">
                    <CheckSquare className="w-4 h-4 text-accent-primary" />
                    <span className="text-[10px] font-extrabold font-display text-text-secondary uppercase tracking-[0.16em]">
                      CORE DELIVERABLES
                    </span>
                  </div>

                  {/* Deliverables tags lists */}
                  <div className="space-y-2.5">
                    {PROCESS_STEPS[activeStepIdx].deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-xs text-text-primary font-semibold"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight callout inside deliverables */}
                  <div className="pt-3.5 border-t border-border-primary text-[10px] text-text-secondary font-display font-semibold tracking-wide flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-primary animate-spin" style={{ animationDuration: '6s' }} />
                    <span>Client Approval required</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}
