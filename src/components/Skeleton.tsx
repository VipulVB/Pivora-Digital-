import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'text' | 'rect' | 'circle';
  key?: React.Key | null | undefined;
}

// 1. Base primitive theme-aware pulsing skeleton item
export function Skeleton({ className = '', variant = 'rect', ...props }: SkeletonProps) {
  // Generates theme-aware background gradients and shimmers
  const getThemeClasses = () => {
    return 'bg-bg-tertiary animate-pulse';
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'circle':
        return 'rounded-full';
      case 'text':
        return 'rounded-md h-3.5 w-5/6';
      case 'rect':
      default:
        return 'rounded-2xl';
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${getThemeClasses()} ${getVariantClasses()} ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* High-end theme shimmers */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5" />
    </div>
  );
}

// 2. Specialty Layout: Bento Grid Card Loading Skeleton
export function BentoCardSkeleton() {
  return (
    <div className="p-6 rounded-3xl bg-bg-secondary border border-border-primary/50 relative overflow-hidden flex flex-col justify-between h-[240px]">
      <div className="space-y-4">
        {/* Top bar with icon orb skeleton & category label skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton variant="circle" className="w-10 h-10 shrink-0" />
          <div className="space-y-2 w-1/2">
            <Skeleton variant="text" className="h-3 w-3/4" />
            <Skeleton variant="text" className="h-2.5 w-1/2" />
          </div>
        </div>
        {/* Descriptive paragraphs skeletons */}
        <div className="space-y-2 mt-4">
          <Skeleton variant="text" className="h-3 w-11/12" />
          <Skeleton variant="text" className="h-3 w-5/6" />
          <Skeleton variant="text" className="h-3 w-4/6" />
        </div>
      </div>
      {/* Bottom button skeleton */}
      <Skeleton variant="rect" className="w-24 h-7 mt-4 rounded-xl" />
    </div>
  );
}

// 3. Specialty Layout: Case Study Portfolio Skeleton
export function PortfolioCardSkeleton() {
  return (
    <div className="rounded-3xl border border-border-primary bg-bg-secondary overflow-hidden flex flex-col h-[400px]">
      {/* Image block container */}
      <Skeleton variant="rect" className="w-full h-48 rounded-none" />
      {/* Portfolio meta information */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Skeleton variant="rect" className="w-16 h-5 rounded-full" />
            <Skeleton variant="rect" className="w-20 h-5 rounded-full" />
          </div>
          <Skeleton variant="text" className="h-5 w-3/4" />
          <Skeleton variant="text" className="h-3 w-5/6" />
        </div>
        {/* Link / CTA element skeleton */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-primary/50">
          <Skeleton variant="text" className="h-3 w-1/4" />
          <Skeleton variant="circle" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

// 4. Specialty Layout: Strategic Questionnaire Diagnosis Skeleton
export function DiagnosisSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
      {/* Left items selectors skeletons */}
      <div className="lg:col-span-7 space-y-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-bg-secondary border border-border-primary/50 space-y-4">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-5 h-5" />
              <Skeleton variant="text" className="h-3 w-1/3" />
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} variant="rect" className="w-24 h-8 rounded-xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Right AI recommendations screen skeleton */}
      <div className="lg:col-span-5">
        <div className="p-8 rounded-3xl bg-bg-secondary border border-border-primary h-full flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2 w-1/2">
                <Skeleton variant="text" className="h-2.5 w-3/4" />
                <Skeleton variant="text" className="h-4 w-1/2" />
              </div>
              <Skeleton variant="rect" className="w-16 h-5 rounded-full" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton variant="circle" className="w-4 h-4 shrink-0 mt-0.5" />
                  <Skeleton variant="text" className="h-3 w-11/12" />
                </div>
              ))}
            </div>
          </div>
          <Skeleton variant="rect" className="w-full h-11 rounded-2xl mt-8" />
        </div>
      </div>
    </div>
  );
}

// 5. High-end mounting container utility: Fades in skeleton first, then cross-fades to the real content
interface WithSkeletonProps {
  children: React.ReactNode;
  variant: 'bento' | 'portfolio' | 'diagnosis';
  className?: string;
  delayMs?: number;
}

export function WithSkeleton({
  children,
  variant,
  className = '',
  delayMs = 600,
}: WithSkeletonProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  const renderSkeleton = () => {
    switch (variant) {
      case 'bento':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" id={`skeleton-bento-grid-${variant}`}>
            <BentoCardSkeleton />
            <BentoCardSkeleton />
            <BentoCardSkeleton />
          </div>
        );
      case 'portfolio':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" id={`skeleton-portfolio-grid-${variant}`}>
            <PortfolioCardSkeleton />
            <PortfolioCardSkeleton />
            <PortfolioCardSkeleton />
          </div>
        );
      case 'diagnosis':
        return <DiagnosisSkeleton />;
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="skeleton-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            {renderSkeleton()}
          </motion.div>
        ) : (
          <motion.div
            key="content-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
