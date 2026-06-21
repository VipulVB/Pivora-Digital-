import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Terminal, Crown, Compass, Check, ChevronDown, Sparkles } from 'lucide-react';
import { ThemeMode, ThemeConfig } from '../types';
import { THEMES } from '../data';

interface ThemeSwitcherProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  const getThemeIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case 'Moon':
        return <Moon className={className} />;
      case 'Sun':
        return <Sun className={className} />;
      case 'Terminal':
        return <Terminal className={className} />;
      case 'Crown':
        return <Crown className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      default:
        return <Moon className={className} />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef} id="theme-switcher-container">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-primary bg-bg-secondary/80 backdrop-blur-md hover:bg-bg-tertiary transition-all duration-300 text-text-primary text-xs font-medium cursor-pointer shadow-sm hover:ring-1 hover:ring-accent-primary/20"
        aria-label="Change theme website"
        id="theme-trigger-btn"
      >
        <span className="text-accent-primary animate-pulse w-2 h-2 rounded-full bg-accent-primary inline-block"></span>
        <span className="flex items-center gap-1">
          {getThemeIcon(activeThemeObj.icon, "w-3.5 h-3.5 text-accent-primary")}
          <span className="hidden sm:inline text-text-secondary">Theme:</span>
          <span className="hidden min-[360px]:inline">{activeThemeObj.name}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-[-12px] sm:right-0 mt-2 w-[280px] sm:w-72 rounded-2xl border border-border-primary bg-bg-secondary p-2 shadow-xl z-50 backdrop-blur-xl"
            id="theme-dropdown-menu"
          >
            {/* Header */}
            <div className="px-3 py-2 border-b border-border-primary flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-accent-primary" /> Select Visual System
              </span>
              <span className="text-[10px] bg-bg-tertiary px-1.5 py-0.5 rounded-md text-accent-primary font-mono select-none">
                {THEMES.length} Presets
              </span>
            </div>

            {/* Options List */}
            <div className="mt-1.5 space-y-1">
              {THEMES.map((theme) => {
                const isSelected = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                        onThemeChange(theme.id);
                        setIsOpen(false);
                    }}
                    className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all duration-300 group cursor-pointer ${
                      isSelected
                        ? 'bg-bg-tertiary text-text-primary'
                        : 'hover:bg-bg-tertiary/65 text-text-secondary hover:text-text-primary'
                    }`}
                    id={`theme-option-${theme.id}`}
                  >
                    {/* Icon Column */}
                    <div
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isSelected
                          ? 'bg-accent-primary/10 text-accent-primary'
                          : 'bg-bg-tertiary/40 group-hover:bg-accent-primary/5 text-text-secondary group-hover:text-accent-primary'
                      }`}
                    >
                      {getThemeIcon(theme.icon, "w-4 h-4")}
                    </div>

                    {/* Meta Column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold">{theme.name}</p>
                        {isSelected && (
                          <span className="text-accent-primary">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] leading-relaxed text-text-secondary/80 mt-0.5 mt-0.5">
                        {theme.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mini Footer / Disclaimer */}
            <div className="mt-2 p-2 bg-bg-primary/50 text-[10px] text-text-secondary rounded-lg text-center font-mono">
              Transitions are hardware-accelerated.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
