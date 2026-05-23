export type TechnologyCategory = 'frontend' | 'backend' | 'tools';

export interface TechnologyItem {
  techKey: string;
  name: string;
  category: TechnologyCategory;
}

export const technologiesRegistry: TechnologyItem[] = [
  { techKey: 'react', name: 'React', category: 'frontend' },
  { techKey: 'typescript', name: 'TypeScript', category: 'frontend' },
  { techKey: 'nextjs', name: 'Next.js', category: 'frontend' },
  { techKey: 'javascript', name: 'JavaScript', category: 'frontend' },
  { techKey: 'html5', name: 'HTML5', category: 'frontend' },
  { techKey: 'scss', name: 'CSS3/SCSS', category: 'frontend' },
  { techKey: 'tailwind', name: 'Tailwind CSS', category: 'frontend' },
  { techKey: 'nodejs', name: 'Node.js', category: 'backend' },
  { techKey: 'git', name: 'Git', category: 'tools' },
  { techKey: 'figma', name: 'Figma', category: 'tools' },
  { techKey: 'jest', name: 'Jest', category: 'tools' },
  { techKey: 'storybook', name: 'Storybook', category: 'tools' },
];