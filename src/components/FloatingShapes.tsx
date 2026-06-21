import { motion } from 'motion/react';

interface FloatingShapesProps {
  sectionId: string;
  count?: number;
}

export default function FloatingShapes({ sectionId, count = 4 }: FloatingShapesProps) {
  // Let's define the set of shapes based on different visual styles to simulate 3D volume
  const shapes = [
    {
      id: `${sectionId}-shape-1`,
      // Sphere with 3D radial gradient shine & backdrop glassmorphism
      className: "w-32 h-32 md:w-44 md:h-44 rounded-full",
      style: {
        background: "radial-gradient(circle at 30% 30%, var(--accent-primary) 0%, var(--accent-secondary) 50%, rgba(0,0,0,0.8) 100%)",
        boxShadow: "inset -8px -8px 24px rgba(0, 0, 0, 0.6), inset 8px 8px 16px rgba(255, 255, 255, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      },
      animate: {
        x: [0, 40, -30, 20, 0],
        y: [0, -60, 40, -30, 0],
        rotate: [0, 120, 240, 360, 0],
        scale: [1, 1.05, 0.95, 1.02, 1],
      },
      transition: {
        duration: 32,
        repeat: Infinity,
        ease: "easeInOut",
      },
      initialLeft: "10%",
      initialTop: "20%",
    },
    {
      id: `${sectionId}-shape-2`,
      // Floating infinite 3D capsule pill
      className: "w-24 h-48 md:w-32 md:h-64 rounded-full",
      style: {
        background: "linear-gradient(135deg, var(--accent-secondary) 0%, rgba(15, 23, 42, 0.6) 100%)",
        boxShadow: "inset -6px -6px 20px rgba(0,0,0,0.5), inset 6px 6px 16px rgba(255,255,255,0.25), 0 25px 45px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      },
      animate: {
        x: [0, -50, 40, -20, 0],
        y: [0, 40, -60, 30, 0],
        rotate: [45, 180, 315, 45],
        scale: [1, 0.9, 1.08, 0.95, 1],
      },
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "easeInOut",
      },
      initialLeft: "75%",
      initialTop: "15%",
    },
    {
      id: `${sectionId}-shape-3`,
      // Glowing 3D Glassmorphic Torus-like Ring with orbital animation
      className: "w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center p-8",
      style: {
        background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 70%)",
        boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.4), inset 10px 10px 20px rgba(255,255,255,0.2), 0 30px 60px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px)",
      },
      animate: {
        x: [0, 30, -50, 30, 0],
        y: [0, 50, -30, -40, 0],
        rotate: [0, -90, -180, -360, 0],
        scale: [0.95, 1.03, 0.97, 1.02, 0.95],
      },
      transition: {
        duration: 28,
        repeat: Infinity,
        ease: "easeInOut",
      },
      initialLeft: "45%",
      initialTop: "60%",
      children: (
        // Inner element for double nesting depth
        <div 
          className="w-full h-full rounded-full border border-dashed border-accent-primary/40 animate-spin"
          style={{ 
            animationDuration: '24s',
            background: "radial-gradient(circle at 50% 50%, var(--glow-primary), transparent 60%)" 
          }}
        />
      )
    },
    {
      id: `${sectionId}-shape-4`,
      // Small fast sparkling orbital glass particle
      className: "w-16 h-16 md:w-20 md:h-20 rounded-xl",
      style: {
        background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)",
        boxShadow: "inset -4px -4px 12px rgba(0,0,0,0.3), inset 4px 4px 8px rgba(255,255,255,0.25), 0 15px 30px rgba(0,0,0,0.2)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(3px)",
      },
      animate: {
        x: [0, -40, 20, -10, 0],
        y: [0, -30, 50, -20, 0],
        rotate: [15, 135, 255, 375, 15],
        scale: [1, 1.12, 0.88, 1.05, 1],
      },
      transition: {
        duration: 24,
        repeat: Infinity,
        ease: "easeInOut",
      },
      initialLeft: "82%",
      initialTop: "68%",
    }
  ];

  const renderedShapes = shapes.slice(0, count);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none -z-20 select-none opacity-45 dark:opacity-30 cyber:opacity-40 luxury:opacity-35 minimal:opacity-15"
      aria-hidden="true"
      id={`floating-shapes-${sectionId}`}
    >
      {renderedShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.className}`}
          style={{
            ...shape.style,
            left: shape.initialLeft,
            top: shape.initialTop,
          }}
          animate={shape.animate}
          transition={shape.transition}
          id={shape.id}
        >
          {shape.children}
        </motion.div>
      ))}
    </div>
  );
}
