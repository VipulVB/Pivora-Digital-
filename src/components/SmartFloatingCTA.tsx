import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, CornerLeftUp, Navigation } from 'lucide-react';

interface SectionConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  nextId: string;
}

export default function SmartFloatingCTA() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  const sections: SectionConfig[] = [
    { id: 'hero', label: 'Start', icon: <ArrowDown className="w-3.5 h-3.5 animate-bounce" />, nextId: 'services' },
    { id: 'services', label: 'Explore', icon: <ArrowDown className="w-3.5 h-3.5" />, nextId: 'why-pivora' },
    { id: 'why-pivora', label: 'Creds', icon: <ArrowDown className="w-3.5 h-3.5" />, nextId: 'process' },
    { id: 'process', label: 'Process', icon: <ArrowDown className="w-3.5 h-3.5" />, nextId: 'portfolio' },
    { id: 'portfolio', label: 'Proof', icon: <ArrowDown className="w-3.5 h-3.5" />, nextId: 'diagnosis' },
    { id: 'diagnosis', label: 'Quiz', icon: <ArrowDown className="w-3.5 h-3.5 animate-pulse" />, nextId: 'about' },
    { id: 'about', label: 'Story', icon: <ArrowDown className="w-3.5 h-3.5" />, nextId: 'contact' },
    { id: 'contact', label: 'Launch', icon: <CornerLeftUp className="w-3.5 h-3.5" />, nextId: 'hero' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check footer proximity to hide/dim the orb
      const docHeight = document.documentElement.scrollHeight;
      const scrollPos = window.scrollY + window.innerHeight;
      if (docHeight - scrollPos < 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // 2. Identify active section based on proximity to viewport center
      const viewportCenter = window.innerHeight / 2;
      let currentSection = 'hero';

      for (const item of sections) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial execution
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCta = sections.find(s => s.id === activeSection) || sections[0];

  const handleCtaClick = () => {
    const targetElement = document.getElementById(currentCta.nextId);
    if (targetElement) {
      const topOffset = currentCta.nextId === 'hero' ? 0 : targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="smart-floating-orb-container"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
        >
          {/* Glowing Aura Outer Frame wrapper */}
          <div className="relative group">
            <div className="absolute inset-x-0 -inset-y-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full blur-md opacity-45 group-hover:opacity-80 transition duration-300 animate-pulse pointer-events-none" />
            
            <button
              onClick={handleCtaClick}
              type="button"
              className="relative flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-bg-secondary border border-border-primary text-text-primary text-[10px] sm:text-xs font-bold font-display uppercase tracking-widest shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Navigation className="w-3 h-3 text-accent-primary animate-pulse shrink-0" />
              <span className="hidden min-[380px]:inline">{currentCta.label}</span>
              <span className="opacity-80 shrink-0">{currentCta.icon}</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
