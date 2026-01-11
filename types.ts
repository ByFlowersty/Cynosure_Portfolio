
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link?: string;
  image: string;
  gallery?: string[]; // New field for multiple images
  certificate?: {
    name: string;
    url: string;
  };
  impact: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
