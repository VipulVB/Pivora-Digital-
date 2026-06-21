import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ThemeMode } from '../types';

interface ExperienceLayerProps {
  theme: ThemeMode;
}

export default function ExperienceLayer({ theme }: ExperienceLayerProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Cursor tracking spring animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 15, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Detect dynamic dimensions
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // 2. Detect prefers-reduced-motion support
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    // 3. Document-level mouse move tracking for dynamic glowing cursor tracker
    const handleMouseMove = (e: MouseEvent) => {
      if (motionQuery.matches) return;
      mouseX.set(e.clientX - 150); // Offset by half of glow card dimension (300px)
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      motionQuery.removeEventListener('change', motionListener);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Render static fallback or simple non-interactive layer if reducedMotion is active
  if (reducedMotion) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true" id="experience-layer-static">
        {theme === 'cyber' && (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        )}
        {theme === 'luxury' && (
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent opacity-40"></div>
        )}
      </div>
    );
  }

  // Segment generation counts to ensure extreme optimization
  const fragmentCount = theme === 'cyber' ? 12 : theme === 'luxury' ? 8 : theme === 'minimal' ? 6 : 10;

  // Render theme-specific background fragments and details
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true" id="experience-layer-dynamic">
      
      {/* 1. Theme-Aware Moving Mesh Glow Orbs */}
      {theme === 'dark' && (
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-[80px]"
          style={{ x: cursorX, y: cursorY }}
        />
      )}
      {theme === 'light' && (
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-300/15 blur-[90px]"
          style={{ x: cursorX, y: cursorY }}
        />
      )}
      {theme === 'cyber' && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <motion.div
            className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/12 blur-[70px]"
            style={{ x: cursorX, y: cursorY }}
          />
        </>
      )}
      {theme === 'luxury' && (
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-amber-500/6 blur-[110px]"
          style={{ x: cursorX, y: cursorY }}
        />
      )}
      {theme === 'minimal' && (
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full bg-neutral-200/40 blur-[60px]"
          style={{ x: cursorX, y: cursorY }}
        />
      )}

      {/* 2. Abstract Pivora-style Digital Fragments (Floater Particles) */}
      {Array.from({ length: fragmentCount }).map((_, idx) => {
        // High quality pseudo-random parameters anchored to array index to avoid layout shifts at hydration
        const size = 12 + (idx * 7) % 36; 
        const opacity = 0.05 + ((idx * 3) % 15) / 100;
        const startX = ((idx * 17) % 85) + 5; // 5% to 90% view-width
        const startY = ((idx * 23) % 80) + 10; // 10% to 90% view-height
        const rotateStart = (idx * 45) % 360;
        const duration = 18 + (idx * 5) % 25; // 18s - 43s (ultra-slow moving atmosphere)
        const delay = -((idx * 4) % 20);

        // Render shapes depending on current theme mood
        return (
          <motion.div
            key={`fragment-${theme}-${idx}`}
            className="absolute flex items-center justify-center text-accent-primary"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              width: size,
              height: size,
              opacity,
            }}
            animate={{
              y: [0, -40, 40, 0],
              x: [0, 20, -20, 0],
              rotate: [rotateStart, rotateStart + 180, rotateStart - 180, rotateStart],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {theme === 'cyber' ? (
              // Cyber code characters or tech geometric fragments
              <span className="font-mono text-xs font-bold tracking-tighter text-accent-secondary opacity-60">
                {['//', '01', 'PV', 'PX', '[]', '<>', '::', '#'][idx % 8]}
              </span>
            ) : theme === 'luxury' ? (
              // Elegant golden diamonds
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-accent-primary w-full h-full opacity-40">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" />
              </svg>
            ) : theme === 'minimal' ? (
              // Subtle clean lines
              <div className="w-full h-[1px] bg-text-primary/30" />
            ) : (
              // Floating circles / elegant custom SVG particles
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full opacity-50">
                {idx % 2 === 0 ? (
                  <circle cx="50" cy="50" r="40" />
                ) : (
                  <path d="M10 10 H90 V90 H10 Z" />
                )}
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
