export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Experience = 'experience',
  Projects = 'projects',
  Contact = 'contact',
}
