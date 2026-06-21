import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, ArrowUpRight, FolderOpen, Tag, Users, CheckCircle, Quote, X, TrendingUp, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';
import { WithSkeleton } from './Skeleton';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // Filter categories helper
  const categories = ['All', 'Websites', 'UI/UX', 'SEO'];

  const filteredCaseStudies = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category.toLowerCase().includes(filter.toLowerCase()) || study.description.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="py-24 px-4 bg-bg-primary relative overflow-hidden" id="portfolio">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={entryContainerVariants}
        className="max-w-7xl mx-auto"
      >
        
        {/* Section Header */}
        <motion.div 
          variants={entryItemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block">
              THE PORTFOLIO VAULT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              Case Studies & Proof
            </h2>
            <p className="text-sm text-text-secondary">
              We focus purely on production grade applications that deliver clear, measurable outcomes.
            </p>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap gap-2" id="portfolio-filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-display font-extrabold text-[11px] tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-accent-primary border-accent-primary text-bg-primary shadow-lg shadow-accent-primary/10'
                    : 'bg-bg-secondary border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Responsive Bento Deck Grid */}
        <WithSkeleton variant="portfolio" className="w-full">
          <motion.div 
            variants={entryItemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            id="portfolio-grid-cards"
          >
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.map((study, idx) => (
                <motion.div
                  layout
                  key={study.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl bg-bg-secondary border border-border-primary overflow-hidden shadow-xl flex flex-col justify-between"
                  id={`portfolio-card-${study.id}`}
                >
                  
                  {/* Thumbnail Preview Area */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-bg-tertiary">
                    {/* Thumbnail Image */}
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />

                    {/* Glassmorphic category pill overlay */}
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[10px] font-display text-white tracking-wider font-extrabold">
                      <Tag className="w-3 h-3 text-accent-primary" />
                      {study.category.toUpperCase()}
                    </span>

                    {/* Absolute core metrics box inside thumbnail */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                      <div className="flex gap-2">
                        {study.stats.map((stat, sIdx) => (
                          <div
                            key={sIdx}
                            className="px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-lg border border-white/10 bg-black/85 backdrop-blur-md"
                          >
                            <p className="text-[8px] text-gray-400 font-display tracking-wider leading-none uppercase font-extrabold">
                              {stat.label}
                            </p>
                            <p className="text-sm font-extrabold text-accent-primary font-display mt-0.5 leading-none">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Text Details */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <p className="text-[10px] font-display font-extrabold uppercase tracking-[0.16em] text-text-secondary">
                        CLIENT: {study.client}
                      </p>
                      <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-normal line-clamp-3">
                        {study.description}
                      </p>
                    </div>

                    {/* Tech specs bullet line */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.metrics.slice(0, 2).map((m, mIdx) => (
                        <span key={mIdx} className="text-[9px] bg-bg-primary px-2.5 py-1 rounded border border-border-primary text-text-secondary font-display font-bold tracking-wide">
                          {m}
                        </span>
                      ))}
                      {study.metrics.length > 2 && (
                        <span className="text-[9px] bg-bg-primary px-2.5 py-1 rounded border border-border-primary text-accent-primary font-display font-extrabold">
                          +{study.metrics.length - 2} More
                        </span>
                      )}
                    </div>

                    {/* CTA Footer on card */}
                    <div className="pt-4 border-t border-border-primary/50 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedStudy(study)}
                        className="text-xs font-bold text-accent-primary flex items-center gap-1 hover:underline cursor-pointer"
                        id={`portfolio-action-btn-${study.id}`}
                      >
                        View Case Study
                        <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                      
                      <span className="text-[10px] text-text-secondary font-display font-semibold italic">
                        Verified Impact
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </WithSkeleton>

      </motion.div>

      {/* Popover / Overlay modal with full spec parameters */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            id="portfolio-inspector-modal"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-bg-secondary border border-border-primary rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-10 my-4 sm:my-8"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Floating Controller */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-bg-primary border border-border-primary text-text-primary hover:bg-bg-tertiary transition cursor-pointer z-10"
                aria-label="Close Inspector"
                id="close-inspector-btn"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                
                {/* Meta Category and Client title headers */}
                <div className="space-y-2 pr-8 sm:pr-0">
                  <span className="text-[9px] font-display bg-accent-primary/10 text-accent-primary px-3 py-1.5 rounded-full border border-accent-primary/20 font-extrabold uppercase tracking-[0.16em] inline-block">
                    {selectedStudy.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary tracking-tight">
                    {selectedStudy.title}
                  </h2>
                  <p className="text-xs text-text-secondary font-display font-extrabold tracking-[0.16em] uppercase leading-none">
                    PARTNER CLIENT: {selectedStudy.client}
                  </p>
                </div>

                {/* Visual Cover Asset */}
                <div className="h-52 sm:h-64 rounded-2xl overflow-hidden bg-bg-tertiary border border-border-primary">
                  <img
                    src={selectedStudy.image}
                    alt={selectedStudy.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Performance stats layout */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedStudy.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-bg-primary border border-border-primary flex items-center justify-between"
                    >
                      <div>
                        <p className="text-[10px] font-display font-extrabold text-text-secondary uppercase tracking-[0.16em]">
                          {stat.label}
                        </p>
                        <p className="text-xl sm:text-2xl font-extrabold font-display text-accent-primary mt-1">
                          {stat.value}
                        </p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-accent-primary opacity-60 shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Long description copy */}
                <div className="space-y-3">
                  <h3 className="text-sm font-extrabold font-display tracking-[0.16em] text-text-secondary uppercase">
                    PROJECT OVERVIEW & SOLUTION
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {selectedStudy.description}
                  </p>
                </div>

                {/* Tech specifications checklist */}
                <div className="space-y-3">
                  <h3 className="text-sm font-extrabold font-display tracking-[0.16em] text-text-secondary uppercase">
                    DEVELOPMENT HIGHLIGHTS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {selectedStudy.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-text-primary font-medium">
                        <CheckCircle className="w-4 h-4 text-accent-primary shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client testimonial Quote area */}
                {selectedStudy.testimonial && (
                  <div className="p-5 rounded-2xl bg-bg-primary border border-border-primary/80 relative overflow-hidden">
                    <Quote className="absolute top-2 right-4 w-12 h-12 text-accent-primary opacity-5 select-none pointer-events-none" />
                    <p className="text-xs text-text-primary font-medium italic mt-1 leading-relaxed">
                      "{selectedStudy.testimonial.quote}"
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                       <p className="text-[10px] font-display font-medium text-text-secondary">
                         <span className="font-bold text-text-primary">{selectedStudy.testimonial.author}</span> — {selectedStudy.testimonial.role}
                       </p>
                    </div>
                  </div>
                )}

                {/* Back Button Action footer */}
                <div className="pt-4 border-t border-border-primary/50 flex justify-end">
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="px-5 py-3 rounded-xl bg-accent-primary text-bg-primary text-xs font-bold hover:bg-opacity-95 transition-all text-center cursor-pointer shadow-lg shadow-accent-primary/10"
                  >
                    Got It, Thank You
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
