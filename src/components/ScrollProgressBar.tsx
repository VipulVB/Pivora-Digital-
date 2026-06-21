import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Custom spring physics configuration for a smooth, organic feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <motion.div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] origin-left z-50 pointer-events-none shadow-[0_1px_10px_rgba(var(--accent-primary-rgb,20,110,245),0.4)]"
      style={{ scaleX }}
    />
  );
}
