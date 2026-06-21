import { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import ExperienceLayer from './components/ExperienceLayer';
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay';
import CommandPalette from './components/CommandPalette';
import SmartFloatingCTA from './components/SmartFloatingCTA';
import StaggerReveal from './components/StaggerReveal';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyPivora from './components/WhyPivora';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WebsiteDiagnosis from './components/WebsiteDiagnosis';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Load initial theme from localStorage safely, fallback to dark
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const persistedTheme = localStorage.getItem('pivora_selected_theme');
      if (['dark', 'light', 'cyber', 'luxury', 'minimal'].includes(persistedTheme || '')) {
        return persistedTheme as ThemeMode;
      }
    } catch (e) {
      console.warn('LocalStorage not reachable, defaulting to dark', e);
    }
    return 'dark';
  });

  // Synchronize theme attribute with visual root container
  useEffect(() => {
    try {
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      localStorage.setItem('pivora_selected_theme', theme);
    } catch (e) {
      console.error('Failed to sync theme preference', e);
    }
  }, [theme]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary transition-colors duration-500 font-sans overflow-x-hidden" id="applet-viewport">
      {/* Slim, elegant scrolling progress tracker top anchor */}
      <ScrollProgressBar />

      {/* Futuristic Experience Layer behind text content */}
      <ExperienceLayer theme={theme} />

      {/* Cinematic Theme Change Overlay */}
      <ThemeTransitionOverlay activeTheme={theme} />

      {/* Command Palette console triggers */}
      <CommandPalette currentTheme={theme} onThemeChange={handleThemeChange} />

      {/* Sticky, scroll-responsive Smart Floating CTA badge */}
      <SmartFloatingCTA />

      {/* Background Glow Orbs - Immersive UI Design Layout patterns */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[40%] bg-cyan-500/15 dark:bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none select-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[50%] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none select-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-[35%] h-[35%] bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-[140px] pointer-events-none select-none z-0"></div>

      {/* Absolute top decorative wireframe grid overlay across the whole app */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none select-none z-0"></div>

      {/* Main sticky navigation bar with inline theme toggler */}
      <Navbar currentTheme={theme} onThemeChange={handleThemeChange} />

      {/* Grid Content Modules */}
      <main className="relative z-10 w-full overflow-hidden" id="main-scroller">
        
        {/* 1. Hero visual launch section */}
        <StaggerReveal>
          <Hero />
        </StaggerReveal>

        {/* 2. Services cards grids */}
        <StaggerReveal>
          <Services />
        </StaggerReveal>

        {/* 3. Why us trust markers & stats bento */}
        <StaggerReveal>
          <WhyPivora />
        </StaggerReveal>

        {/* 4. Strategic timeline development process */}
        <StaggerReveal>
          <Process />
        </StaggerReveal>

        {/* 5. Custom case studies deck portfolio */}
        <StaggerReveal>
          <Portfolio />
        </StaggerReveal>

        {/* 5.5 Interactive strategic diagnosis suite */}
        <StaggerReveal>
          <WebsiteDiagnosis />
        </StaggerReveal>

        {/* 6. About story layout */}
        <StaggerReveal>
          <About />
        </StaggerReveal>

        {/* 7 & 8. Bold final CTA & secure contact submission console */}
        <StaggerReveal>
          <ContactForm />
        </StaggerReveal>

      </main>

      {/* 9. Layout directories and footer credits */}
      <Footer />
    </div>
  );
}
