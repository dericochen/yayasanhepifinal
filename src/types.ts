export type Language = 'id' | 'en';

export interface ProgramItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: 'health' | 'conservation' | 'livelihoods' | 'education';
  summary: {
    id: string;
    en: string;
  };
  fullDescription: {
    id: string;
    en: string;
  };
  keyActivities: {
    id: string[];
    en: string[];
  };
  impactStat: string;
  impactLabel: {
    id: string;
    en: string;
  };
  image: string;
}

export interface MediaStory {
  id: string;
  title: string;
  source: string;
  date: string;
  category: 'award' | 'news' | 'feature';
  excerpt: {
    id: string;
    en: string;
  };
  fullStory?: {
    id: string;
    en: string;
  };
  image: string;
  externalUrl?: string;
}

export interface ImpactMetric {
  id: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: {
    id: string;
    en: string;
  };
  bio: {
    id: string;
    en: string;
  };
  image: string;
  awards?: string[];
}

export interface FAQItem {
  id: string;
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
  category: 'general' | 'healthcare' | 'donation' | 'conservation';
}

export interface AnnualReport {
  id: string;
  year: string;
  title: {
    id: string;
    en: string;
  };
  downloadSize: string;
  highlights: {
    id: string[];
    en: string[];
  };
}
