import { motion } from 'motion/react';
import { Target, Eye, ShieldAlert, Sparkles, Zap, Star } from 'lucide-react';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';

export default function About() {
  const coreValues = [
    {
      icon: <Target className="w-5 h-5 text-accent-primary" />,
      title: 'Our Ultimate Mission',
      desc: 'To replace slow, low-converting templates with high-performance, premium digital flagships that command trust, authority, and sales.',
    },
    {
      icon: <Eye className="w-5 h-5 text-accent-secondary" />,
      title: 'The Design Standard',
      desc: 'To bridge tech-forward agency aesthetics (Apple, Stripe, Linear) with accessible React codebases that result in blistering fast speed.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-bg-secondary/40 relative overflow-hidden" id="about">
      {/* Absolute decorative gradient grids */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={entryContainerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Beautiful Graphics Layout Card */}
          <motion.div 
            variants={entryItemVariants}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div
              className="p-8 sm:p-10 rounded-3xl bg-bg-secondary border border-border-primary shadow-2xl relative overflow-hidden"
              id="about-card-canvas"
            >
              {/* Internal glow corner */}
              <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-accent-primary/10 blur-2xl"></div>

              {/* Minimalist Tech agency card graphic */}
              <div className="space-y-6">
                
                {/* Meta details */}
                <div className="flex items-center justify-between pb-4 border-b border-border-primary/60">
                  <span className="text-[10px] font-display text-text-secondary tracking-[0.2em] font-extrabold uppercase">
                    PIVORA CORE BLUEPRINT
                  </span>
                  <span className="text-[9px] bg-accent-primary/10 text-accent-primary font-display font-extrabold tracking-wider px-2 py-0.5 rounded">
                    SYS-A
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-mono text-text-secondary">
                    // We engineer systems designed to transform simple visitors into high-paying commercial invoices.
                  </p>

                  <div className="p-4 rounded-xl bg-bg-primary/60 border border-border-primary space-y-2">
                    <p className="text-[9px] font-mono text-text-secondary uppercase">CODE COMPILATION</p>
                    <div className="w-full bg-border-primary h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-accent-primary to-accent-secondary h-full rounded-full w-[96.8%]"></div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-accent-primary">
                      <span>REACT / NEXT.JS CORE</span>
                      <span>96.8% SPEED DEPLOY</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-bg-primary/40 border border-border-primary rounded-lg">
                      <span className="text-xl font-mono font-bold text-text-primary leading-none">0%</span>
                      <p className="text-[8px] text-text-secondary uppercase mt-1 leading-tight font-mono">TEMPLATE BASE</p>
                    </div>
                    <div className="p-3 bg-bg-primary/40 border border-border-primary rounded-lg">
                      <span className="text-xl font-mono font-bold text-accent-primary leading-none">24/7</span>
                      <p className="text-[8px] text-text-secondary uppercase mt-1 leading-tight font-mono">AUTOMATION LIFE</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right: Master Copy narrative with items mapping */}
          <motion.div 
            variants={entryItemVariants}
            className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight" id="about-headline">
                Bespoke Digital Growth
              </h2>
              {/* Premium copywriting requested in prompt */}
              <p className="text-sm sm:text-base leading-relaxed text-text-primary font-medium">
                Pivora Digital is a modern digital agency helping businesses transform their online presence through premium websites, strong branding, SEO, and growth-focused digital experiences.
              </p>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                We believe that software and design are the strongest levers for modern business scaling. We operate as a highly agile core team, ditching classic bloated agency bureaucracy to focus strictly on shipping ultra-refined code and brand solutions rapidly.
              </p>
            </div>

            {/* Core Values mapping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="about-core-values">
              {coreValues.map((val, idx) => (
                <div key={idx} className="space-y-3 p-5 rounded-2xl bg-bg-primary/50 border border-border-primary text-left">
                  <div className="p-2.5 rounded-xl bg-bg-secondary w-fit border border-border-primary text-accent-primary">
                    {val.icon}
                  </div>
                  <h3 className="text-xs font-extrabold uppercase font-display tracking-[0.16em] text-text-primary">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
