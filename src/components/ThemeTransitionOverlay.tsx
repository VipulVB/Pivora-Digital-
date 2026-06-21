import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeMode } from '../types';

interface ThemeTransitionOverlayProps {
  activeTheme: ThemeMode;
}

export default function ThemeTransitionOverlay({ activeTheme }: ThemeTransitionOverlayProps) {
  const [isTriggered, setIsTriggered] = useState(false);
  const [displayTheme, setDisplayTheme] = useState<ThemeMode>(activeTheme);
  const [reducedMotion, setReducedMotion] = useState(false);
  const prevThemeRef = useRef<ThemeMode>(activeTheme);

  useEffect(() => {
    // Detect reduced motion setting
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', listener);

    if (prevThemeRef.current !== activeTheme) {
      setDisplayTheme(activeTheme);
      setIsTriggered(true);
      prevThemeRef.current = activeTheme;

      const timer = setTimeout(() => {
        setIsTriggered(false);
      }, 900);

      return () => {
        clearTimeout(timer);
        motionQuery.removeEventListener('change', listener);
      };
    }

    return () => motionQuery.removeEventListener('change', listener);
  }, [activeTheme]);

  if (reducedMotion || !isTriggered) return null;

  // Pretty titles & accent colors for cinematic visual cues
  const getThemeMeta = (t: ThemeMode) => {
    switch (t) {
      case 'dark':
        return { name: 'Cosmic Slate', subtitle: 'Deep matte space mode calibrated', gradient: 'from-cyan-500/10 to-blue-500/15' };
      case 'light':
        return { name: 'Specular Silver', subtitle: 'Pristine light-path interface rendered', gradient: 'from-blue-100/15 to-indigo-100/10' };
      case 'cyber':
        return { name: 'Cybernetic Neon', subtitle: 'Sub-grid neon systems fully reactive', gradient: 'from-purple-500/20 to-cyan-400/20' };
      case 'luxury':
        return { name: 'Imperial Gold', subtitle: 'Gold premium textures premium calibrated', gradient: 'from-amber-600/10 to-yellow-500/10' };
      case 'minimal':
        return { name: 'Mono Graphite', subtitle: 'Contrast stark minimal elements active', gradient: 'from-neutral-900/5 to-neutral-200/5' };
      default:
        return { name: 'Pivora Ambient', subtitle: 'Interactive layout synchronized', gradient: 'from-cyan-400/10 to-blue-500/10' };
    }
  };

  const meta = getThemeMeta(displayTheme);

  return (
    <AnimatePresence>
      <motion.div
        id="theme-transition-overlay-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
      >
        {/* Cinematic Backdrop Blur Flash */}
        <motion.div
          id="theme-blur-flash"
          initial={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' }}
          animate={{
            backdropFilter: ['blur(0px)', 'blur(16px)', 'blur(0px)'],
            backgroundColor: [
              'rgba(0,0,0,0)',
              displayTheme === 'light' || displayTheme === 'minimal' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.15)',
              'rgba(0,0,0,0)',
            ],
          }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        />

        {/* Radial Wave expansion */}
        <motion.div
          id="theme-radial-wave"
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{
            scale: [0.3, 1.8],
            opacity: [0, 0.9, 0],
          }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r ${meta.gradient} blur-[100px]`}
        />

        {/* Elegant Floating Atmosphere Title Box */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{
            y: [12, -4, -12],
            opacity: [0, 1, 1, 0],
            scale: [0.95, 1, 0.98],
          }}
          transition={{
            times: [0, 0.25, 0.8, 1],
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 p-6 md:p-8 rounded-2xl bg-bg-secondary/70 backdrop-blur-xl border border-border-primary shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] max-w-sm text-center flex flex-col items-center gap-1.5"
        >
          {/* Accent micro-dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping mb-1" />
          
          <span className="text-[10px] font-bold font-mono tracking-[0.3em] text-accent-primary uppercase">
            ATMOSPHERE ALTERED
          </span>
          
          <h4 className="text-xl font-bold font-display tracking-tight text-text-primary mt-1">
            {meta.name}
          </h4>
          
          <p className="text-xs text-text-secondary font-sans leading-relaxed px-2">
            {meta.subtitle}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
