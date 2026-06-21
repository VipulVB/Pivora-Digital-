import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Terminal, 
  Crown, 
  Eye, 
  Sparkles, 
  Briefcase, 
  Hash, 
  Search, 
  Command, 
  X, 
  CornerDownLeft, 
  Info,
  Calendar
} from 'lucide-react';
import { ThemeMode } from '../types';

interface CommandPaletteProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

interface CommandItem {
  id: string;
  category: string;
  title: string;
  shortcut?: string;
  action: () => void;
  icon: React.ReactNode;
}

export default function CommandPalette({ currentTheme, onThemeChange }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Helper smooth scroller
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const commandItems: CommandItem[] = [
    // Navigation Action Items
    {
      id: 'nav-services',
      category: 'Navigate',
      title: 'Go to Services & Capabilities',
      shortcut: 'G 1',
      action: () => scrollToSection('services'),
      icon: <Laptop className="w-4 h-4 text-accent-primary" />
    },
    {
      id: 'nav-process',
      category: 'Navigate',
      title: 'Go to Process & Workflow',
      shortcut: 'G 2',
      action: () => scrollToSection('process'),
      icon: <Sparkles className="w-4 h-4 text-accent-primary" />
    },
    {
      id: 'nav-portfolio',
      category: 'Navigate',
      title: 'Go to Case Studies Portfolio',
      shortcut: 'G 3',
      action: () => scrollToSection('portfolio'),
      icon: <Briefcase className="w-4 h-4 text-accent-primary" />
    },
    {
      id: 'nav-diagnosis',
      category: 'Navigate',
      title: 'Go to Digital Diagnosis Suite',
      shortcut: 'G 4',
      action: () => scrollToSection('diagnosis'),
      icon: <Info className="w-4 h-4 text-accent-primary" />
    },
    {
      id: 'nav-about',
      category: 'Navigate',
      title: 'Go to Agency About Narrative',
      shortcut: 'G 5',
      action: () => scrollToSection('about'),
      icon: <Hash className="w-4 h-4 text-accent-primary" />
    },
    {
      id: 'nav-contact',
      category: 'Navigate',
      title: 'Go to Contact / Free Strategy Call',
      shortcut: 'G 6',
      action: () => scrollToSection('contact'),
      icon: <Calendar className="w-4 h-4 text-accent-primary" />
    },
    // Theme Switchers
    {
      id: 'theme-dark',
      category: 'Themes',
      title: 'Switch Theme to Cosmic Slate (Dark)',
      shortcut: 'T D',
      action: () => {
        onThemeChange('dark');
        setIsOpen(false);
      },
      icon: <Laptop className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'theme-light',
      category: 'Themes',
      title: 'Switch Theme to Specular Silver (Light)',
      shortcut: 'T L',
      action: () => {
        onThemeChange('light');
        setIsOpen(false);
      },
      icon: <Laptop className="w-4 h-4 text-blue-500" />
    },
    {
      id: 'theme-cyber',
      category: 'Themes',
      title: 'Switch Theme to Cybernetic Neon (Cyber)',
      shortcut: 'T C',
      action: () => {
        onThemeChange('cyber');
        setIsOpen(false);
      },
      icon: <Terminal className="w-4 h-4 text-purple-400" />
    },
    {
      id: 'theme-luxury',
      category: 'Themes',
      title: 'Switch Theme to Imperial Gold (Luxury)',
      shortcut: 'T G',
      action: () => {
        onThemeChange('luxury');
        setIsOpen(false);
      },
      icon: <Crown className="w-4 h-4 text-amber-500" />
    },
    {
      id: 'theme-minimal',
      category: 'Themes',
      title: 'Switch Theme to Mono Graphite (Minimal)',
      shortcut: 'T M',
      action: () => {
        onThemeChange('minimal');
        setIsOpen(false);
      },
      icon: <Laptop className="w-4 h-4 text-neutral-400" />
    },
    // Prime CTA Action Item
    {
      id: 'cta-launch',
      category: 'Actions',
      title: 'Start a Project / Open Consultation console',
      shortcut: '↵',
      action: () => scrollToSection('contact'),
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />
    }
  ];

  // Filters commands list dynamically based on search
  const filteredCommands = commandItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Esc / K Event listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Keyboard navigation controller within menu
  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  // Reset indices on search filter change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Handle focus on menu entry
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      setSearchQuery('');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. Subtle, futuristic desktop-only trigger floating button (badge) in corner of document */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block" id="command-palette-trigger-wrapper">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary/80 hover:bg-bg-secondary border border-border-primary hover:border-accent-primary/20 backdrop-blur-md shadow-lg text-text-secondary hover:text-text-primary text-xs font-mono transition-all duration-300"
          title="Press Ctrl+K or Cmd+K to open actions panel"
        >
          <Command className="w-3.5 h-3.5" />
          <span>CMD+K</span>
        </button>
      </div>

      {/* 2. Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div 
            id="command-palette-overlay"
            className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 overflow-y-auto"
          >
            {/* Dark glass backdrop click target */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-[6px]"
              onClick={() => setIsOpen(false)}
            />

            {/* Glass panel content card container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl bg-bg-secondary/95 border border-border-primary shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden"
              onKeyDown={handleModalKeyDown}
              ref={containerRef}
            >
              {/* Header section with real search box */}
              <div className="flex items-center border-b border-border-primary px-4 py-3.5 gap-3">
                <Search className="w-5 h-5 text-text-secondary shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a core command or search navigation..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-0 text-sm font-sans"
                />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic list scroll window */}
              <div className="max-h-[320px] overflow-y-auto p-2 space-y-1 scrollbar bg-bg-primary/25">
                {filteredCommands.length > 0 ? (
                  // Group by categories
                  Object.entries(
                    filteredCommands.reduce((groups, item) => {
                      if (!groups[item.category]) groups[item.category] = [];
                      groups[item.category].push(item);
                      return groups;
                    }, {} as Record<string, CommandItem[]>)
                  ).map(([category, items]) => (
                    <div key={category} className="space-y-1">
                      {/* Sub-group category title header line */}
                      <span className="text-[10px] font-bold font-mono tracking-wider text-accent-primary/60 px-3 py-1.5 uppercase block">
                        {category}
                      </span>
                      
                      {items.map((item) => {
                        // Find global index in visible selection
                        const globalIndex = filteredCommands.findIndex(fc => fc.id === item.id);
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 relative ${
                              isSelected 
                                ? 'bg-accent-primary/10 border-l-2 border-accent-primary pl-4' 
                                : 'bg-transparent hover:bg-bg-tertiary/40 border-l-2 border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {item.icon}
                              <span className={`text-xs font-medium font-sans ${isSelected ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}>
                                {item.title}
                              </span>
                            </div>
                            {item.shortcut && (
                              <div className="flex items-center gap-1 font-mono text-[10px] text-text-secondary bg-bg-tertiary border border-border-primary/50 px-1.5 py-0.5 rounded">
                                <span>{item.shortcut}</span>
                                {isSelected && <CornerDownLeft className="w-2.5 h-2.5 ml-0.5" />}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  // Empty search fallback
                  <div className="text-center py-10 px-4">
                    <Laptop className="w-8 h-8 text-text-secondary opacity-30 mx-auto mb-3" />
                    <p className="text-xs text-text-secondary font-medium">No Pivora commands found matching query.</p>
                  </div>
                )}
              </div>

              {/* Instructions footer bar */}
              <div className="flex items-center justify-between border-t border-border-primary px-4 py-2 bg-bg-tertiary/40 text-[10px] font-mono text-text-secondary">
                <div className="flex gap-3">
                  <span><kbd className="bg-bg-tertiary px-1 rounded">↑↓</kbd> Navigate</span>
                  <span><kbd className="bg-bg-tertiary px-1 rounded">Enter</kbd> Select</span>
                </div>
                <span>ESC to Close</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
