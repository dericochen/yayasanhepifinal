export type Language = 'id' | 'en';

export interface ProgramItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: 'health' | 'conservation' | 'livelihoods' | 'education' | 'livestock' | 'research';
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
  category: 'award' | 'news' | 'feature' | 'field';
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
  type?: 'founder' | 'board' | 'team';
}

export interface PartnerItem {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
  logoText?: string;
  role?: {
    id: string;
    en: string;
  };
  category?: 'academic' | 'conservation' | 'government' | 'international';
}

export interface FAQItem {
  id: string;
  category: 'general' | 'healthcare' | 'donation' | 'conservation' | 'livestock';
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
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

export interface LivestockPackage {
  id: string;
  name: {
    id: string;
    en: string;
  };
  type: 'chicken' | 'goat';
  optionLabel: {
    id: string;
    en: string;
  };
  femaleCount: number;
  maleCount: number;
  priceIdr: number;
  updatedYear: number;
  description: {
    id: string;
    en: string;
  };
  impact: {
    id: string;
    en: string;
  };
}

export interface PartnerVillage {
  id: string;
  name: string;
  subdistrict: string;
  households: number;
  status: 'green' | 'yellow' | 'red';
  nurseriesCount: number;
  saplingsCollected: number;
  hasClinicPost: boolean;
  hasLivestockGroup: boolean;
  coordinates: { x: number; y: number };
}
