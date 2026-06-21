import { Laptop, Sparkles, TrendingUp, Cpu, Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    { label: 'Website Design & Dev', href: '#services' },
    { label: 'Branding & Identity', href: '#services' },
    { label: 'SEO & Performance', href: '#services' },
    { label: 'SaaS Dashboard UI/UX', href: '#services' },
    { label: 'Digital Marketing Funnels', href: '#services' },
  ];

  const quickLinks = [
    { label: 'Core Capabilities', href: '#services' },
    { label: 'Why Pivora Protocol', href: '#why-us' },
    { label: 'Our Process Timeline', href: '#process' },
    { label: 'Case Studies Results', href: '#portfolio' },
    { label: 'Contact Architects', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Dribbble', href: 'https://dribbble.com/pivoradigital', icon: '🎨' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/pivoradigital', icon: '💼' },
    { label: 'Twitter', href: 'https://twitter.com/pivoradigital', icon: '🐦' },
    { label: 'Behance', href: 'https://behance.net/pivoradigital', icon: '🌐' },
  ];

  return (
    <footer className="bg-bg-primary border-t border-border-primary py-16 px-4 relative overflow-hidden" id="footer">
      
      {/* Footer background design mesh */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-accent-primary/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-border-primary/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-bg-secondary border border-border-primary shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-secondary via-accent-primary to-transparent opacity-15"></div>
                <span className="font-display font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary z-10 select-none">
                  P
                </span>
              </div>
              <div className="flex flex-col select-none text-left">
                <div className="flex items-center gap-1">
                  <span className="font-display font-bold text-sm tracking-widest text-text-primary">
                    PIVORA
                  </span>
                  <span className="font-display font-extrabold text-xs tracking-wider text-accent-primary">
                    DIGITAL
                  </span>
                </div>
                <span className="text-[7.5px] tracking-[0.25em] text-text-secondary uppercase font-display font-extrabold leading-none mt-0.5">
                  Websites | Branding | Growth
                </span>
              </div>
            </a>

            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              We engineer premium custom websites, brand identities and conversion systems designed to double lead acquisition and drive serious business growth.
            </p>

            {/* Social List */}
            <div className="flex items-center gap-3" id="footer-social-deck">
              {socialLinks.map((sc) => (
                <a
                  key={sc.label}
                  href={sc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs bg-bg-secondary border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:scale-105 transition-all duration-300 shadow-sm"
                  title={sc.label}
                >
                  <span>{sc.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3.5 text-left">
            <h4 className="text-[10px] font-extrabold font-display text-text-primary uppercase tracking-[0.2em]">
              AGENCY DISCOVERY
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((lk) => (
                <a
                  key={lk.label}
                  href={lk.href}
                  className="text-xs text-text-secondary hover:text-accent-primary transition-colors duration-200"
                >
                  {lk.label}
                </a>
              ))}
            </div>
          </div>

          {/* Core Services Column */}
          <div className="md:col-span-4 space-y-3.5 text-left">
            <h4 className="text-[10px] font-extrabold font-display text-text-primary uppercase tracking-[0.2em]">
              SERVICES & CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {serviceCategories.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs text-text-secondary hover:text-accent-primary transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono text-text-secondary select-none">
          <p>© {currentYear} Pivora Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Code className="w-3.5 h-3.5 text-accent-primary" /> Core compiled natively using React
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted in 2026 with <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
