import { useState } from 'react';
import { motion } from 'motion/react';
import { Laptop, Sparkles, TrendingUp, Megaphone, Cpu, Layers, Check, ArrowRight, Activity } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import FloatingShapes from './FloatingShapes';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';
import { WithSkeleton } from './Skeleton';

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string, className = "w-6 h-6 text-accent-primary") => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Megaphone':
        return <Megaphone className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      default:
        return <Laptop className={className} />;
    }
  };

  return (
    <section className="py-24 px-4 bg-bg-secondary/40 relative overflow-hidden" id="services">
      {/* Subtle slow-floating 3D shapes or particles background layer */}
      <FloatingShapes sectionId="services" count={3} />

      {/* Aesthetic grid grid lines in background */}
      <div className="absolute inset-0 bg-noise opacity-30 select-none pointer-events-none"></div>

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
          className="text-center md:text-left md:flex md:items-end md:justify-between mb-16"
        >
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block">
              OUR AGENT CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight" id="services-headline">
              Growth Systems We Build
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">
              We leverage premium design, performance-driven web engineering, and high-conversion marketing pipelines to build absolute unfair market advantages.
            </p>
          </div>
          
          <div className="hidden md:block select-none transform translate-y-[-10px]">
            <span className="text-xs bg-bg-tertiary px-3 py-1.5 rounded-full border border-border-primary font-display font-bold tracking-wider text-text-secondary">
              5 CORE ARCHITECTURES
            </span>
          </div>
        </motion.div>

        {/* Services Cards Grid Layout */}
        <WithSkeleton variant="bento" className="w-full">
          <motion.div 
            variants={entryItemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            id="services-list-container"
          >
            {SERVICES.map((service, idx) => {
              const isHovered = activeService === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative rounded-2xl bg-bg-secondary/90 border border-border-primary hover:border-accent-primary/50 p-6 sm:p-8 flex flex-col justify-between shadow-lg overflow-hidden transition-all duration-300 transform hover:translate-y-[-4px]"
                  id={`service-card-${service.id}`}
                >
                  {/* Background active glow bubble */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/5 blur-2xl transition-all duration-500 scale-150 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                  <div>
                    {/* Icon and micro badge */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-primary/50">
                      <div className="p-3.5 rounded-2xl bg-bg-primary/80 border border-border-primary text-accent-primary group-hover:scale-110 transition-transform duration-300">
                        {getServiceIcon(service.iconName)}
                      </div>
                      {service.badge && (
                        <span className="text-[9px] font-extrabold font-display px-2 py-0.5 rounded-sm bg-accent-primary/10 text-accent-primary uppercase tracking-wider">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Copy */}
                    <h3 className="text-lg font-display font-extrabold text-text-primary group-hover:text-accent-primary transition-colors duration-300 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Supplementary features bullet list */}
                    <ul className="mt-6 space-y-2.5">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2 text-[11px] text-text-primary font-medium">
                          <Check className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card CTA Footer */}
                  <div className="pt-8 mt-8 border-t border-border-primary/40 flex items-center justify-between text-xs font-semibold">
                    <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                      Explore deliverables
                    </span>
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1.5 text-accent-primary font-display font-bold text-[10px]"
                    >
                      DEPLOY
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </WithSkeleton>

        {/* Live CTA Section */}
        <motion.div 
          variants={entryItemVariants}
          className="mt-16 text-center select-none" 
          id="services-closing-note"
        >
          <p className="text-xs font-display text-text-secondary font-semibold tracking-wide">
            Need a tailored solution? <a href="#contact" className="text-accent-primary hover:underline font-bold">Talk directly to one of our growth architects</a>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
