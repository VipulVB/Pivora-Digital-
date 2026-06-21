import React from 'react';
import { motion } from 'motion/react';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export default function StaggerReveal({
  children,
  className = '',
  once = true,
}: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={entryContainerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        // Wrap each child in an item reveal variants motion block for staggered entry
        return (
          <motion.div variants={entryItemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
