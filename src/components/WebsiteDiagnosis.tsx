import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building,
  Heart,
  Home,
  Activity,
  Utensils,
  User,
  HelpCircle,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  Send,
  Sparkles
} from 'lucide-react';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';
import { WithSkeleton } from './Skeleton';

type BusinessType = 'Local Business' | 'Clinic' | 'Real Estate' | 'Fitness' | 'Hospitality' | 'Personal' | 'Other';
type WebsiteStatus = 'None' | 'Outdated' | 'NoLeads' | 'FullRedesign';
type CoreGoal = 'Leads' | 'Trust' | 'Bookings' | 'Conversion' | 'SEO';

export default function WebsiteDiagnosis() {
  const [bizType, setBizType] = useState<BusinessType>('Local Business');
  const [status, setStatus] = useState<WebsiteStatus>('Outdated');
  const [goal, setGoal] = useState<CoreGoal>('Leads');
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Trigger analysis when selections change
  useEffect(() => {
    setAnalyzing(true);
    const timer = setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [bizType, status, goal]);

  const businessTypes: { value: BusinessType; label: string; icon: React.ReactNode }[] = [
    { value: 'Local Business', label: 'Local Business', icon: <Building className="w-4 h-4 text-accent-primary" /> },
    { value: 'Clinic', label: 'Clinic / Healthcare', icon: <Heart className="w-4 h-4 text-accent-primary" /> },
    { value: 'Real Estate', label: 'Real Estate', icon: <Home className="w-4 h-4 text-accent-primary" /> },
    { value: 'Fitness', label: 'Fitness / Gym', icon: <Activity className="w-4 h-4 text-accent-primary" /> },
    { value: 'Hospitality', label: 'Restaurant / Villa', icon: <Utensils className="w-4 h-4 text-accent-primary" /> },
    { value: 'Personal', label: 'Personal Brand', icon: <User className="w-4 h-4 text-accent-primary" /> },
    { value: 'Other', label: 'Other Space', icon: <HelpCircle className="w-4 h-4 text-text-secondary" /> },
  ];

  const statuses: { value: WebsiteStatus; label: string; desc: string }[] = [
    { value: 'None', label: 'No website yet', desc: 'Starting completely crisp from scratch' },
    { value: 'Outdated', label: 'Outdated design', desc: 'Website exists but feels outdated or slow' },
    { value: 'NoLeads', label: 'Zero leads', desc: 'Gets some traffic but fails to convert visitors' },
    { value: 'FullRedesign', label: 'Premium redesign', desc: 'Seeking high-end visual & tech upgrade' },
  ];

  const goals: { value: CoreGoal; label: string; icon: React.ReactNode }[] = [
    { value: 'Leads', label: 'Get More Leads & Calls', icon: <TrendingUp className="w-4 h-4 text-emerald-400" /> },
    { value: 'Trust', label: 'Higher Brand Authority', icon: <Shield className="w-4 h-4 text-amber-400" /> },
    { value: 'Bookings', label: 'Direct Appointments & Bookings', icon: <Zap className="w-4 h-4 text-cyan-400" /> },
    { value: 'Conversion', label: 'Higher Sales Conversion', icon: <CheckCircle2 className="w-4 h-4 text-indigo-400" /> },
    { value: 'SEO', label: 'Search Engine Rank (SEO)', icon: <Globe className="w-4 h-4 text-purple-400" /> },
  ];

  // Dynamic recommendation engine matching selections
  const getDynamicRecommendations = (): string[] => {
    const list: string[] = ['Mobile-first design system under 0.6s loading overhead'];

    if (status === 'None') {
      list.push('High-converting landing page framework centering instant key trust indicators');
    } else if (status === 'Outdated') {
      list.push('Complete vector aesthetic upgrade with custom modern typography pairings');
      list.push('Elimination of stale elements with lightning-fast React build pipelines');
    } else {
      list.push('Strategic direct floating calling modules and smart Conversion Rate (CRO) triggers');
    }

    if (bizType === 'Clinic') {
      list.push('Fully secure, streamlined direct contact/consultation flow layout');
      list.push('Doctor qualification focus triggers & patient comfort indicators');
    } else if (bizType === 'Hospitality') {
      list.push('Stately image galleries featuring rich focal visual properties');
      list.push('WhatsApp direct chat reservation modules');
    } else if (bizType === 'Real Estate') {
      list.push('Active lead maps overlays & filter cards grids layouts');
    }

    if (goal === 'SEO') {
      list.push('Schema.org structured local business markup inject');
      list.push('Dynamic title optimization with premium index rankings calibration');
    } else if (goal === 'Bookings') {
      list.push('Automated calender schedule/appointment software synchronization');
    } else if (goal === 'Trust') {
      list.push('Staggered interactive reviews carousel and premium client testimonial showcase');
    } else {
      list.push('Clean direct CTA buttons optimized for quick mobile actions');
    }

    return list;
  };

  const handleSendDiagnosis = () => {
    const recommendations = getDynamicRecommendations();
    const formattedMessage = `=== PIVORA DIGITAL DIAGNOSIS REPORT ===
* Business Sector: ${bizType}
* Current Setup: ${statuses.find(s => s.value === status)?.label}
* Core Growth Goal: ${goals.find(g => g.value === goal)?.label}

RECOMMENDED BLUEPRINT:
${recommendations.map((r, i) => `${i + 1}. [RECO] ${r}`).join('\n')}

I've reviewed this premium diagnosis. Let's build a tailored solution!`;

    // 1. Save to localStorage to let contactForm pick it up on mount or instantly
    localStorage.setItem('pivora_diagnosis_prefill', formattedMessage);

    // 2. Dispatch event in case component is already loaded in DOM
    const event = new CustomEvent('pivora-prefill-diagnosis', { detail: formattedMessage });
    window.dispatchEvent(event);

    // 3. Calmly smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-4 bg-bg-secondary/20 relative overflow-hidden border-t border-b border-border-primary/50" id="diagnosis">
      {/* Absolute decorative gradient grids */}
      <div className="absolute inset-x-0 bottom-[-50%] top-[-50%] bg-[radial-gradient(ellipse_at_30%_30%,var(--glow-primary),transparent_50%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={entryContainerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={entryItemVariants} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block">
            LEAD GENERATION ANALYSIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-text-primary">
            Diagnose Your Digital Presence
          </h2>
          <p className="text-sm text-text-secondary">
            Answer a few quick questions to immediately preview the optimal digital blueprint Pivora suggests for your niche business.
          </p>
        </motion.div>

        {/* Diagnostic Bento Grid Layout */}
        <WithSkeleton variant="diagnosis" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="diagnosis-bento-grid">
            
            {/* Left Columns: Parameters interactive selection sheets */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              
              {/* Step 1: Business Sector Selector */}
              <motion.div 
                variants={entryItemVariants}
                className="p-4 sm:p-6 rounded-2xl bg-bg-secondary border border-border-primary shadow-lg flex flex-col gap-4"
                id="diagnosis-card-types"
              >
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-mono font-bold">1</span>
                  <h4 className="text-sm font-bold font-display tracking-wide uppercase text-text-primary">SELECT BUSINESS TYPE</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {businessTypes.map((item) => {
                    const isSelected = bizType === item.value;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setBizType(item.value)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'bg-accent-primary/15 border-accent-primary text-text-primary p-2 border' 
                            : 'bg-bg-primary/50 hover:bg-bg-primary border border-border-primary/50 text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Step 2: Website Status Radios */}
              <motion.div 
                variants={entryItemVariants}
                className="p-4 sm:p-6 rounded-2xl bg-bg-secondary border border-border-primary shadow-lg flex flex-col gap-4"
                id="diagnosis-card-status"
              >
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-mono font-bold">2</span>
                  <h4 className="text-sm font-bold font-display tracking-wide uppercase text-text-primary">CURRENT WEBSITE STATUS</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {statuses.map((item) => {
                    const isSelected = status === item.value;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setStatus(item.value)}
                        className={`flex flex-col items-start gap-1 p-3.5 rounded-xl text-left cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'bg-accent-secondary/10 border-accent-secondary text-text-primary border' 
                            : 'bg-bg-primary/50 hover:bg-bg-primary border border-border-primary/50 text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        <span className="text-xs font-bold text-text-primary">{item.label}</span>
                        <span className="text-[10px] opacity-80 leading-relaxed">{item.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Step 3: Main Goals Buttons */}
              <motion.div 
                variants={entryItemVariants}
                className="p-4 sm:p-6 rounded-2xl bg-bg-secondary border border-border-primary shadow-lg flex flex-col gap-4"
                id="diagnosis-card-goal"
              >
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-mono font-bold">3</span>
                  <h4 className="text-sm font-bold font-display tracking-wide uppercase text-text-primary">PRIMARY GROWTH STRATEGIC GOAL</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goals.map((item) => {
                    const isSelected = goal === item.value;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setGoal(item.value)}
                        className={`flex items-center gap-3 p-3 rounded-xl text-left cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'bg-accent-primary/15 border-accent-primary text-text-primary border' 
                            : 'bg-bg-primary/50 hover:bg-bg-primary border border-border-primary/50 text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {item.icon}
                        <span className="text-xs font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Premium AI Recommendations card result display */}
            <motion.div 
              variants={entryItemVariants}
              className="lg:col-span-5 relative flex"
              id="diagnosis-card-results"
            >
              <div className="w-full p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-bg-secondary to-bg-secondary/40 border border-border-primary/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Outer decorative borders and glows */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary/40" />
                <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-accent-primary/5 blur-3xl" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold font-mono tracking-widest text-accent-primary uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-accent-primary animate-pulse" />
                        PIVORA SMART BLUEPRINT 2.0
                      </span>
                      <h3 className="text-lg font-bold font-display text-text-primary">Suggested Blueprint</h3>
                    </div>
                    
                    {/* Miniature blinking live status tag */}
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-border-primary text-text-primary text-[9px] font-mono leading-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>SECURE INC</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {analyzing ? (
                      <motion.div
                        key="analyzing-shimmer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-14 text-center space-y-3 flex flex-col items-center"
                      >
                        <div className="w-8 h-8 rounded-full border-2 border-accent-primary border-t-transparent animate-spin" />
                        <p className="text-xs font-mono text-text-secondary tracking-widest uppercase">Calibrating formulas...</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="recommendations-list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                      >
                        <p className="text-xs text-text-secondary leading-relaxed font-sans mb-2">
                          Based on your parameters, our premium system suggests integrating these bespoke engineering elements:
                        </p>

                        <ul className="space-y-3">
                          {getDynamicRecommendations().map((rec, index) => (
                            <motion.li
                              key={rec}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                              <span className="text-xs text-text-secondary leading-relaxed font-medium">
                                {rec}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Send Diagnosis & pre-populate contacts CTA */}
                <div className="mt-8 pt-6 border-t border-border-primary">
                  <button
                    type="button"
                    onClick={handleSendDiagnosis}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-xs font-bold font-display uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-[0_12px_24px_-8px_rgba(var(--accent-primary-rgb,34,211,238),0.3)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Send This Diagnosis</span>
                  </button>
                  <p className="text-[10px] text-text-secondary/70 text-center mt-3 leading-relaxed">
                    Clicking will automatically document your selections into our strategic console scroll at our Contact panel to launch.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </WithSkeleton>

      </motion.div>
    </section>
  );
}
