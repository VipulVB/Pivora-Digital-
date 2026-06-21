import { ServiceItem, CaseStudy, ProcessStep, WhyReason, ThemeConfig } from './types';

export const THEMES: ThemeConfig[] = [
  {
    id: 'dark',
    name: 'Dark Studio',
    icon: 'Moon',
    desc: 'Matte black, electric blue and neon cyan accents. (Default)',
    primaryColor: '#06B6D4',
    secondaryColor: '#3B82F6',
  },
  {
    id: 'light',
    name: 'Pure light',
    icon: 'Sun',
    desc: 'Clean white canvas, modern silver, and royal blue accents.',
    primaryColor: '#2563EB',
    secondaryColor: '#0EA5E9',
  },
  {
    id: 'cyber',
    name: 'Cyberpunk',
    icon: 'Terminal',
    desc: 'Synthetic deep black with glowing violet and neon teal laser beats.',
    primaryColor: '#00F0FF',
    secondaryColor: '#A855F7',
  },
  {
    id: 'luxury',
    name: 'Luxury Velvet',
    icon: 'Crown',
    desc: 'Opulent deep royal navy highlighted with champagne gold filigree.',
    primaryColor: '#E5C158',
    secondaryColor: '#C5A03A',
  },
  {
    id: 'minimal',
    name: 'Nordic Slate',
    icon: 'Compass',
    desc: 'Ultra-clean graphite aesthetic with silent titanium gray and white lines.',
    primaryColor: '#1C2333',
    secondaryColor: '#64748B',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    shortDesc: 'Stunning, blazing fast, responsive websites custom built with cutting-edge tech.',
    longDesc: 'We build bespoke digital flagship products optimized for speed, semantic code, search performance, and visual elegance. From complex layouts to smooth interactive experiences.',
    features: [
      'Next.js, React & Tailwind Architecture',
      'Fluid layouts & custom Framer Motion dynamics',
      'Ultra-optimized PageSpeed core vitals',
      'Dynamic headless CMS integrations',
    ],
    iconName: 'Laptop',
    badge: 'Popular',
  },
  {
    id: 'branding',
    title: 'Branding & Visual Identity',
    shortDesc: 'Unforgettable brand identities that command high industry pricing and trust.',
    longDesc: 'We craft comprehensive brand guidelines, gorgeous vector logo systems, color schemes, typograhical pairings, and collateral assets that embody your vision.',
    features: [
      'Gradient Monogram & Logo Design',
      'Bespoke Brand Guidelines & Assets',
      'Interactive Typography & Color Systems',
      'Marketing Collateral & Pitch Decks',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'seo',
    title: 'SEO & Performance Strategy',
    shortDesc: 'Technical SEO audits, target keywords, and content strategies that rank #1.',
    longDesc: 'Stop relying on paid ads. We structure semantic tags, perform deep competitive competitor keyword research, optimize page loads, and map schemas to drive organic intent.',
    features: [
      'In-Depth Technical SEO Audits',
      'AI-Driven Keyword Competitor Analysis',
      'High-Intent Content Mapping',
      'Google Search Console Optimization',
    ],
    iconName: 'TrendingUp',
    badge: 'ROI Focus',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortDesc: 'Hyper-targeted lead gen campaigns designed to double pipeline conversion rates.',
    longDesc: 'Transform website visitors into active clients. We design high-converting landing pages, integrate direct automated calendar bookers, and execute analytics events.',
    features: [
      'Multi-Channel Advertising strategies',
      'Sales-Funnels with high-fidelity UI/UX',
      'A/B Creative Landing Page Tests',
      'Advanced Meta, Google & LinkedIn Tracking',
    ],
    iconName: 'Megaphone',
  },
  {
    id: 'saas-product',
    title: 'SaaS & UI/UX Product Design',
    shortDesc: 'Beautiful responsive software dashboards optimized for seamless daily retention.',
    longDesc: 'We model user journeys, flowcharts, micro-interactions, and beautiful dark/light themes for full-scale software platforms, dashboards, and responsive web products.',
    features: [
      'Figma Production-Ready Design Systems',
      'High-Fidelity Interactive Prototypes',
      'User Journey & Wireframe Architectures',
      'Developer Hand-Off Spec Docs',
    ],
    iconName: 'Layers',
  },
];

export const WHY_REASONS: WhyReason[] = [
  {
    title: 'Premium Design First',
    description: 'We believe design is an asset, not a cost. We avoid generic themes and craft custom, pixel-perfect layouts inspired by Apple, Stripe, and Linear.',
    statValue: '100%',
    statLabel: 'Bespoke Craftsmanship',
  },
  {
    title: 'Growth-Focused Strategy',
    description: 'A beautiful website is useless if it does not convert. Every headline, CTA button, form placement, and load event is calculated to convert readers to leads.',
    statValue: '240%',
    statLabel: 'Average Traffic Spike',
  },
  {
    title: 'Next-Gen Performance',
    description: 'Every millisecond of lag costs clients money. We write clean, semantic React code resulting in blazing fast loading, smooth scroll transitions, and responsive fluidity.',
    statValue: '0.4s',
    statLabel: 'Avg Load Time',
  },
  {
    title: 'Brand + Tech Expertise',
    description: 'No communication disconnect. We bridge the gap between creative visual designers and deep code stack engineers to deliver unified digital ecosystems.',
    statValue: '150+',
    statLabel: 'Completed Projects',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Align',
    subtitle: 'Extracting Your Brand Core',
    description: 'We dive deep into your market position, competitive landscape, and customer journey maps. We outline complete success milestones, user flows, and core key performance metrics.',
    deliverables: ['Competitive Market Analysis', 'Site Architecture & Wireframes', 'Strategic Roadmap Canvas'],
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'Design Philosophy',
    subtitle: 'Stunning High-Fidelity Previews',
    description: 'We translate raw insights into sleek, modern, interactive design styles. You get complete layouts (in both dark & light palettes) detailing all components, typography systems, and dynamic gradients.',
    deliverables: ['Custom UI Workspace Design', 'Interactive Responsive Prototype', 'Brand Styling System & Guidelines'],
    duration: 'Weeks 2-3',
  },
  {
    number: '03',
    title: 'Develop & Refine',
    subtitle: 'Blazing Fast Semantic Code',
    description: 'We bring designs to life using modern Web technology stacks. We build for flawless cross-device responsivity, semantic search layouts, and seamless fluid micro-animations.',
    deliverables: ['Production-Level codebase', 'Perfect 100/100 Lighthouse Speed', 'Clean SEO Schema Integration'],
    duration: 'Weeks 4-5',
  },
  {
    number: '04',
    title: 'Grow & Automate',
    subtitle: 'Campaign Launch & Workflow Setup',
    description: 'We deploy your platform, configure automated marketing event pipelines, set up AI-driven customer capture lines, and implement analytics software to track conversion behaviors.',
    deliverables: ['Live Launch Checklist', 'Targeted Ads & Analytics Suite Check', 'AI Workflow & Automation Handover'],
    duration: 'Ongoing',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-analytics',
    title: 'Apex Analytics',
    client: 'Apex Venture Labs',
    category: 'UI/UX & SaaS Product',
    description: 'An elite, real-time financial analytics dashboard displaying high-volume venture portfolio projections, user retention matrices, and beautiful custom interactive performance layers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stats: [
      { label: 'Conversion Lift', value: '+74%' },
      { label: 'Platform LTV', value: '3.1x' },
    ],
    testimonial: {
      quote: 'Pivora Digital replaced our legacy telemetry interface with a gorgeous, high-fidelity metrics dashboard. Our enterprise client onboarding increased immediately.',
      author: 'Vipul Bhamre',
      role: 'Founder, Apex Ventures',
    },
    metrics: ['Recharts Dashboard Engine', 'Dynamic Workspace Customizations', 'Real-Time Telemetry Pipeline'],
  },
  {
    id: 'fitness-factory',
    title: 'Fitness Factory',
    client: 'FF Wellness Network',
    category: 'UI/UX & SaaS',
    description: 'A sleek, rich dark-mode active fitness booking dashboard app with bright athletic indicators. Optimized for fast touch target response, rapid membership checkout, and intuitive gym class schedules.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    stats: [
      { label: 'User Signups', value: '5.2x' },
      { label: 'Bounce Rate Down', value: '38%' },
    ],
    testimonial: {
      quote: 'We wanted a software interface that felt energetic yet premium. Pivora built an active dashboard that is adored by over 10,000 active members.',
      author: 'Sarah Jenkins',
      role: 'Product Director',
    },
    metrics: ['Mobile & Touch-Optimized Layouts', 'Interactive Schedules', 'Stripe Payments Custom Hook'],
  },
  {
    id: 'tcsm-security',
    title: 'TCSM Security',
    client: 'TCSM Cyber Labs',
    category: 'UI/UX & Security',
    description: 'Futuristic network security SaaS interface displaying nodes, real-time event tables, block counts, and automated security shield statuses. Framed by a dark cyberpunk aesthetic with glowing borders.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    stats: [
      { label: 'System Visibility', value: '100%' },
      { label: 'Dev Effort Saved', value: '120h' },
    ],
    testimonial: {
      quote: 'The TCSM interface feels like it was engineered by Apple for the Year 2030. The visual layout alone closed our latest Series-A lead.',
      author: 'Maximilian Sterling',
      role: 'Head of Threat Intel',
    },
    metrics: ['Glowing Canvas Charts', 'Live Mock Activity Event Feeds', 'Advanced Grid Layout'],
  },

  {
    id: 'nova-commerce',
    title: 'Nova Commerce',
    client: 'Nova Fashion Group',
    category: 'Websites & Branding',
    description: 'A high-end visual commerce platform for premium lifestyle items. Featuring smooth editorial scroll animations, high-performance image rendering, and instant client purchase transitions.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    stats: [
      { label: 'Cart Conversion', value: '+42%' },
      { label: 'Page Load Speed', value: '0.2s' },
    ],
    testimonial: {
      quote: 'They built an ultra-fast digital boutique that captures the soul of our artisanal products. Sales and repeat purchases exceeded all yearly projections.',
      author: 'Aria Montgomery',
      role: 'Creative Director, Nova Atelier',
    },
    metrics: ['Pre-rendered Static Generations', 'Frictionless Stripe integration', 'Liquid Layout Fluid Interactions'],
  },
];
