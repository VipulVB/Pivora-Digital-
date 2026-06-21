import { motion } from 'motion/react';
import { ArrowRight, Play, Laptop, Sparkles, TrendingUp, Cpu, Layers } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

export default function Hero() {
  const floatingCards = [
    {
      icon: <Laptop className="w-4 h-4 text-accent-primary" />,
      title: 'Websites & Apps',
      desc: 'Blazing fast, React-driven flags',
      val: '99 Pagespeed',
      delay: 0.1,
    },
    {
      icon: <Sparkles className="w-4 h-4 text-accent-secondary" />,
      title: 'Premium Brand',
      desc: 'Distinctive vector monograms/guides',
      val: 'UX Award ' + String.fromCharCode(9733),
      delay: 0.3,
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
      title: 'SEO & Growth',
      desc: 'Organic SEO keyword rank dominance',
      val: '3.4x Traffic',
      delay: 0.5,
    },
    {
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      title: 'SaaS & UI/UX',
      desc: 'Beautiful responsive dashboards & platforms',
      val: 'Figma Mastery',
      delay: 0.7,
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden flex items-center bg-noise" id="hero">
      {/* Subtle slow-floating 3D shapes or particles background layer */}
      <FloatingShapes sectionId="hero" count={4} />

      {/* Dynamic Glow System that adapts color variables to chosen theme */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent-primary to-accent-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem] transition-all duration-1000 ease-in-out"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          {/* Micro-badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-primary bg-bg-secondary/60 backdrop-blur-md max-w-full"
            id="hero-micro-badge"
          >
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            <span className="text-[8px] min-[360px]:text-[10px] font-extrabold font-display tracking-[0.1em] min-[380px]:tracking-[0.16em] text-text-secondary uppercase truncate">
              NEXT-GEN CREATIVE DIGITAL ENGINE
            </span>
            <span className="text-[8px] min-[360px]:text-[10px] bg-accent-primary/10 text-accent-primary px-1.5 py-0.5 rounded font-extrabold font-display tracking-wider">
              2026
            </span>
          </motion.div>
 
          {/* Master Headings */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.08] break-words"
              id="hero-headline"
            >
              Websites That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[length:200%_auto] animate-bg-pan">
                Drive Growth
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed break-words"
              id="hero-subheadline"
            >
              We build premium websites, brands, and digital growth systems for modern businesses looking to capture authority.
            </motion.p>
          </div>
 
          {/* Conversion CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-sm mx-auto lg:mx-0"
            id="hero-cta-group"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl bg-accent-primary text-bg-primary hover:bg-opacity-95 shadow-lg shadow-accent-primary/10 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl border border-border-primary bg-bg-secondary/40 backdrop-blur-sm hover:bg-bg-tertiary text-text-primary transform hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Play className="w-3.5 h-3.5 text-accent-primary fill-accent-primary animate-pulse" />
              View Our Work
            </a>
          </motion.div>
 
          {/* Core Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-border-primary text-center lg:text-left"
            id="hero-stats"
          >
            <div className="min-w-0 pr-1">
              <p className="text-lg sm:text-2xl font-extrabold font-display text-text-primary">0.4s</p>
              <p className="text-[7.5px] min-[360px]:text-[8.5px] sm:text-[10px] text-text-secondary font-display tracking-[0.05em] min-[360px]:tracking-[0.13em] font-semibold truncate uppercase">AVG LOAD SPEED</p>
            </div>
            <div className="min-w-0 border-l border-border-primary px-1 sm:pl-4">
              <p className="text-lg sm:text-2xl font-extrabold font-display text-text-primary">150+</p>
              <p className="text-[7.5px] min-[360px]:text-[8.5px] sm:text-[10px] text-text-secondary font-display tracking-[0.05em] min-[360px]:tracking-[0.13em] font-semibold truncate uppercase">PROJECTS DONE</p>
            </div>
            <div className="min-w-0 border-l border-border-primary pl-1 sm:pl-4">
              <p className="text-lg sm:text-2xl font-extrabold font-display text-text-primary">100%</p>
              <p className="text-[7.5px] min-[360px]:text-[8.5px] sm:text-[10px] text-text-secondary font-display tracking-[0.05em] min-[360px]:tracking-[0.13em] font-semibold truncate uppercase">SATISFACTION RATE</p>
            </div>
          </motion.div>

        </div>

        {/* Right Interactive Dashboard Canvas Column */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
          
          {/* Main Glassmorphism Laptop Mockup Screen Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[calc(100vw-32px)] min-[360px]:max-w-[325px] min-[400px]:max-w-[360px] sm:max-w-md rounded-2xl border border-border-primary bg-bg-secondary/70 backdrop-blur-xl p-3 sm:p-4 shadow-2xl relative mx-auto"
            style={{ perspective: 1000 }}
            id="hero-mockup-workspace"
          >
            {/* Top Window Actions Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-border-primary/80 mb-4 text-xs font-mono text-text-secondary">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[10px] bg-bg-primary px-2.5 py-1 rounded-md border border-border-primary italic">
                pivora-workspace.app
              </span>
              <span className="text-[9px] font-bold text-accent-primary">LIVE ENGAGEMENT</span>
            </div>

            {/* Dashboard Graphics Block */}
            <div className="space-y-3.5" id="mockup-content">
              {/* Header Title inside device */}
              <div className="flex items-center justify-between bg-bg-primary/50 p-2.5 rounded-xl border border-border-primary">
                <div>
                  <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none">TOTAL AGENCY SALES</h4>
                  <p className="text-sm font-semibold text-text-primary mt-1 font-mono">$1,248,300.00</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  +38%
                </span>
              </div>

              {/* Graphic Wireframe Line Charts */}
              <div className="h-28 bg-bg-primary/40 border border-border-primary rounded-xl p-2 relative flex items-end justify-between overflow-hidden">
                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary inline-block"></span>
                  <p className="text-[9px] font-mono text-text-secondary">Conversion optimization rate</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Layers className="w-12 h-12 text-accent-primary animate-spin" style={{ animationDuration: '12s' }} />
                </div>

                {/* Vertical Bar chart bars with varying heights */}
                <span className="w-6 bg-accent-primary/25 rounded-md h-[40px] animate-pulse"></span>
                <span className="w-6 bg-accent-primary/25 rounded-md h-[55px]"></span>
                <span className="w-6 bg-accent-primary/35 rounded-md h-[78px] animate-pulse"></span>
                <span className="w-6 bg-accent-primary/45 rounded-md h-[60px]"></span>
                <span className="w-6 bg-accent-primary/55 rounded-md h-[95px]"></span>
                <span className="w-6 bg-gradient-to-t from-accent-secondary to-accent-primary rounded-md h-[110px] relative">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-text-primary rounded-full ring-2 ring-accent-primary animate-ping"></span>
                </span>
              </div>

              {/* Floating items listing */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-bg-primary/20 p-2 border border-border-primary rounded-lg text-left">
                  <p className="text-[8px] text-text-secondary uppercase">PageSpeed Rank</p>
                  <p className="text-xs font-bold text-accent-primary">A+ 100/100</p>
                </div>
                <div className="bg-bg-primary/20 p-2 border border-border-primary rounded-lg text-left">
                  <p className="text-[8px] text-text-secondary uppercase">SEO Indexed</p>
                  <p className="text-xs font-bold text-accent-secondary">#1 Position</p>
                </div>
              </div>
            </div>

            {/* Glowing effect inside mockup */}
            <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary opacity-15 blur"></div>
          </motion.div>

          {/* Embedded Floating Cards on Sides */}
          <div className="absolute -bottom-10 -left-6 sm:-left-12 max-w-[180px] hidden sm:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="p-3 bg-bg-secondary/90 border border-border-primary rounded-xl shadow-xl backdrop-blur-md text-left"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                <span className="text-[9px] font-bold text-text-primary font-mono select-none">PIVORA CORE</span>
              </div>
              <p className="text-[10px] text-text-secondary mt-1 leading-tight">No cheap templates. Everything custom-coded.</p>
            </motion.div>
          </div>

          <div className="absolute top-12 -right-8 max-w-[160px] hidden sm:block">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="p-3 bg-bg-secondary/90 border border-border-primary rounded-xl shadow-xl backdrop-blur-md text-left"
            >
              <p className="text-[10px] font-mono font-bold text-accent-secondary uppercase">🔥 ULTRA ROI</p>
              <p className="text-[9px] text-text-secondary mt-0.5 leading-snug">Designed strictly to convert hits into invoices.</p>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Grid of floating micro cards shown under hero in responsive rows */}
      <div className="max-w-7xl mx-auto w-full mt-24 border-t border-border-primary/60 pt-12 relative z-10">
        <p className="text-center font-mono text-[10px] text-text-secondary uppercase tracking-[0.25em] mb-8">
          OUR FLUID GROWTH SERVICE ECOSYSTEM
        </p>

        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-4" id="hero-floating-service-grids">
          {floatingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
              className="p-4 bg-bg-secondary/40 border border-border-primary rounded-2xl text-left relative overflow-hidden transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-bg-primary/60 border border-border-primary">
                  {card.icon}
                </div>
                <span className="text-[9px] font-mono bg-accent-primary/10 text-accent-primary py-0.5 px-2 rounded-full font-bold">
                  {card.val}
                </span>
              </div>
              <h3 className="font-display font-bold text-xs text-text-primary mt-3 leading-none">
                {card.title}
              </h3>
              <p className="text-[10px] text-text-secondary mt-1.5 leading-relaxed">
                {card.desc}
              </p>
              
              {/* Corner ambient glow */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-accent-primary/5 blur-xl group-hover:bg-accent-primary/25"></div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
