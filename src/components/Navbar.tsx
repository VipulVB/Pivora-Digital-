import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, ArrowRight, Layers } from 'lucide-react';
import { ThemeMode } from '../types';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export default function Navbar({ currentTheme, onThemeChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/75 backdrop-blur-lg border-b border-border-primary py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 group" id="brand-logo-link">
            {/* P Monogram Logo Mark */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden flex items-center justify-center bg-bg-secondary border border-border-primary shadow-md shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-secondary via-accent-primary to-transparent opacity-20 group-hover:opacity-35 transition-all duration-300"></div>
              {/* Premium abstract P Monogram */}
              <span className="font-display font-extrabold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary z-10 select-none">
                P
              </span>
            </div>
 
            {/* Logo Text Group */}
            <div className="flex flex-col select-none min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-xs sm:text-sm tracking-widest text-text-primary">
                  PIVORA
                </span>
                <span className="font-display font-extrabold text-[10px] sm:text-xs tracking-wider text-accent-primary hidden min-[370px]:inline">
                  DIGITAL
                </span>
              </div>
              <span className="text-[6px] sm:text-[7px] tracking-[0.18em] sm:tracking-[0.25em] text-text-secondary uppercase font-display font-extrabold leading-none mt-0.5 hidden min-[410px]:block">
                Websites | Branding | Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6" id="desktop-nav-links">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-all duration-300 hover:translate-y-[-1px]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Call-to-Actions and Switcher */}
          <div className="hidden sm:flex items-center gap-4" id="desktop-nav-ctas">
            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-accent-primary text-bg-primary hover:bg-opacity-90 transition-all duration-300 shadow-md transform hover:scale-[1.03] hover:ring-2 hover:ring-accent-primary/20 active:scale-[0.98]"
            >
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Controller Group */}
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            {/* Theme switcher shown on mobile to guarantee access */}
            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-border-primary bg-bg-secondary text-text-primary hover:bg-bg-tertiary transition-all"
              aria-label="Toggle mobile Menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-border-primary bg-bg-primary/95 backdrop-blur-xl overflow-hidden"
            id="mobile-drawer-portal"
          >
            <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-3 pb-4 border-b border-border-primary">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center p-2.5 rounded-xl bg-bg-secondary/40 border border-border-primary/50 text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-bg-secondary hover:border-border-primary transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-center text-xs font-semibold bg-accent-primary text-bg-primary hover:bg-opacity-95 shadow-lg active:scale-95 transition-all"
                >
                  <Rocket className="w-4 h-4" />
                  Start Your Project
                </a>
              </div>

              <p className="text-[9px] text-center font-display font-semibold text-text-secondary uppercase tracking-[0.16em] pt-2">
                WEBSITES | BRANDING | GROWTH • EST. 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
