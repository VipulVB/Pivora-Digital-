export type ThemeMode = 'dark' | 'light' | 'cyber' | 'luxury' | 'minimal';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  icon: string;
  desc: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  iconName: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  metrics: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface WhyReason {
  title: string;
  description: string;
  statValue: string;
  statLabel: string;
}

export interface ContactSubmission {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  message: string;
}
