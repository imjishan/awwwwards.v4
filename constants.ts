import { Project, Experience } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2021 - Present',
    description: 'Leading the frontend migration to React 18 and Next.js. Improved core web vitals by 40%. Mentoring junior developers and establishing design systems.'
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Creative Digital Agency',
    period: '2019 - 2021',
    description: 'Developed interactive marketing sites for Fortune 500 clients using WebGL and GSAP. Collaborated closely with designers to implement pixel-perfect UIs.'
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'StartUp Inc',
    period: '2017 - 2019',
    description: 'Built and maintained full-stack features using Node.js and React. Optimized database queries and managed AWS deployment pipelines.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'A real-time analytics dashboard for SaaS platforms featuring high-performance data visualization.',
    tags: ['React', 'D3.js', 'TypeScript', 'Tailwind'],
    link: '#',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    title: 'Gemini Chat UI',
    description: 'An open-source clean chat interface built specifically for the Gemini API with streaming support.',
    tags: ['React', 'Gemini API', 'Vite'],
    link: '#',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'E-Commerce Redux',
    description: 'A headless e-commerce template focusing on accessibility and speed.',
    tags: ['Next.js', 'GraphQL', 'Stripe'],
    link: '#',
    image: 'https://picsum.photos/600/400?random=3'
  }
];

export const BIO = `
I am a software engineer with a passion for building exceptional digital experiences. 
Currently, I'm focused on accessible, human-centered products at TechFlow.
I specialize in the JavaScript ecosystem, specifically React and TypeScript, but I love exploring new technologies like WebAssembly and Generative AI.
`;

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Alex's portfolio website. 
Your goal is to answer questions about Alex's professional background, skills, and projects in a professional, concise, and friendly manner.
Use the following context to answer questions:

Name: Alex Dev
Role: Senior Software Engineer
Bio: ${BIO}
Experience: ${JSON.stringify(EXPERIENCE_DATA)}
Projects: ${JSON.stringify(PROJECTS_DATA)}
Skills: React, TypeScript, Node.js, Tailwind CSS, Gemini API, AWS, UI/UX Design.
Contact: alex.dev@example.com

If a user asks about something not in this context, politely say you don't have that information but suggest they contact Alex directly.
Do not make up facts. Keep responses under 3 sentences unless asked for detail.
`;
