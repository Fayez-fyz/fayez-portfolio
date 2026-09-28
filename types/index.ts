export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyMeta?: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
}

export interface ProjectEntry {
  id: string;
  name: string;
  tagline: string;
  kind: 'personal' | 'professional';
  context: string;
  description: string;
  features: string[];
  stack: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  level: number; // 1-100, relative proficiency indicator
  items: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface AIExpertiseItem {
  label: string;
  detail: string;
}
