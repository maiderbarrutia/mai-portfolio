export type TechnologyCategory = 'frontend' | 'backend' | 'design' | 'tools'| 'ai';

export interface TechnologyItem {
  techKey: string;
  name: string;
  category: TechnologyCategory;
}

export const technologiesRegistry: TechnologyItem[] = [
  // --- FRONTEND ---
  { techKey: 'react', name: 'React', category: 'frontend' },
  { techKey: 'typescript', name: 'TypeScript', category: 'frontend' },
  { techKey: 'nextjs', name: 'Next.js', category: 'frontend' },
  { techKey: 'javascript', name: 'JavaScript', category: 'frontend' },
  { techKey: 'html5', name: 'HTML5', category: 'frontend' },
  { techKey: 'scss', name: 'CSS3/SCSS', category: 'frontend' },
  { techKey: 'tailwind', name: 'Tailwind CSS', category: 'frontend' },
  { techKey: 'vite', name: 'Vite', category: 'frontend' },
  { techKey: 'angular', name: 'Angular', category: 'frontend' },
  { techKey: 'wordpress', name: 'WordPress', category: 'frontend' },
  { techKey: 'bem', name: 'BEM', category: 'frontend' },

  // --- BACKEND & DATABASES ---
  { techKey: 'nodejs', name: 'Node.js', category: 'backend' },
  { techKey: 'express', name: 'Express', category: 'backend' },
  { techKey: 'php', name: 'PHP', category: 'backend' },
  { techKey: 'mysql', name: 'MySQL', category: 'backend' },
  { techKey: 'oracle', name: 'Oracle', category: 'backend' },

  // --- DESIGN ---
  { techKey: 'figma', name: 'Figma', category: 'design' },
  { techKey: 'photoshop', name: 'Photoshop', category: 'design' },
  { techKey: 'illustrator', name: 'Illustrator', category: 'design' },

  // --- TOOLS, TESTING & METHODOLOGIES ---
  { techKey: 'git', name: 'Git', category: 'tools' },
  { techKey: 'jest', name: 'Jest', category: 'tools' },
  { techKey: 'vitest', name: 'Vitest', category: 'tools' },
  { techKey: 'testing-library', name: 'React Testing Library', category: 'tools' },
  { techKey: 'jira', name: 'Jira', category: 'tools' },
  { techKey: 'scrum', name: 'Scrum', category: 'tools' },
  { techKey: 'kanban', name: 'Kanban', category: 'tools' },

  // --- AI ASSISTED DEVELOPMENT ---
  { techKey: 'github-copilot', name: 'GitHub Copilot', category: 'ai' },
  { techKey: 'openai', name: 'ChatGPT / OpenAI', category: 'ai' },
  { techKey: 'claude', name: 'Claude AI', category: 'ai' },
  { techKey: 'opencode', name: 'OpenCode', category: 'ai' }
];