import { 
  SiReact, SiTypescript, SiNextdotjs, SiJavascript, 
  SiHtml5, SiSass, SiTailwindcss, SiNodedotjs, 
  SiGit, SiFigma, SiJest,
  SiVite, SiAngular, SiWordpress, SiExpress,
  SiPhp, SiMysql, SiVitest, SiPostgresql, 
  SiTestinglibrary, SiJira,
  SiGithubcopilot, SiOpenai, SiAnthropic,
} from 'react-icons/si';

import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { FaDatabase, FaRobot } from 'react-icons/fa';
import { MdViewKanban, MdBuild, MdStorage, MdAutorenew } from 'react-icons/md';

interface TechnologyIconProps {
  techKey: string;
  className?: string;
}

const iconLabel: Record<string, string> = {
  react: 'React',
  typescript: 'TypeScript',
  nextjs: 'Next.js',
  javascript: 'JavaScript',
  html5: 'HTML5',
  scss: 'SCSS',
  tailwind: 'Tailwind CSS',
  vite: 'Vite',
  angular: 'Angular',
  wordpress: 'WordPress',
  bem: 'BEM',
  nodejs: 'Node.js',
  express: 'Express',
  php: 'PHP',
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  oracle: 'Oracle',
  figma: 'Figma',
  photoshop: 'Photoshop',
  illustrator: 'Illustrator',
  git: 'Git',
  jest: 'Jest',
  vitest: 'Vitest',
  'testing-library': 'Testing Library',
  jira: 'Jira',
  scrum: 'Scrum',
  kanban: 'Kanban',
  'github-copilot': 'GitHub Copilot',
  openai: 'OpenAI',
  claude: 'Claude',
  opencode: 'OpenCode',
}

export default function TechnologyIcon({ techKey, className = "w-5 h-5" }: TechnologyIconProps) {
  const label = iconLabel[techKey]
  switch (techKey) {
    // Frontend
    case 'react':
      return <SiReact aria-label={label} className={`${className} text-[#61DAFB]`} />;
    case 'typescript':
      return <SiTypescript aria-label={label} className={`${className} text-[#3178C6]`} />;
    case 'nextjs':
      return <SiNextdotjs aria-label={label} className={`${className} dark:text-white text-black`} />;
    case 'javascript':
      return <SiJavascript aria-label={label} className={`${className} text-[#F7DF1E]`} />;
    case 'html5':
      return <SiHtml5 aria-label={label} className={`${className} text-[#E34F26]`} />;
    case 'scss':
      return <SiSass aria-label={label} className={`${className} text-[#CC6699]`} />;
    case 'tailwind':
      return <SiTailwindcss aria-label={label} className={`${className} text-[#06B6D4]`} />;
    case 'vite':
      return <SiVite aria-label={label} className={`${className} text-[#646CFF]`} />;
    case 'angular':
      return <SiAngular aria-label={label} className={`${className} text-[#DD0031]`} />;
    case 'wordpress':
      return <SiWordpress aria-label={label} className={`${className} text-[#21759B]`} />;
    case 'bem':
      return <span aria-label={label} className={`${className} font-mono font-bold text-xs text-gray-500`}>[BEM]</span>;

    // Backend & DDBB
    case 'nodejs':
      return <SiNodedotjs aria-label={label} className={`${className} text-[#339933]`} />;
    case 'express':
      return <SiExpress aria-label={label} className={`${className} dark:text-white text-black`} />;
    case 'php':
      return <SiPhp aria-label={label} className={`${className} text-[#777BB4]`} />;
    case 'mysql':
      return <SiMysql aria-label={label} className={`${className} text-[#4479A1]`} />;
    case 'postgresql':
      return <SiPostgresql aria-label={label} className={`${className} text-[#336791]`} />;
    case 'oracle':
      return <FaDatabase aria-label={label} className={`${className} text-[#F80000]`} />;

    // Design
    case 'figma':
      return <SiFigma aria-label={label} className={`${className} text-[#F24E1E]`} />;
    case 'photoshop':
      return <DiPhotoshop aria-label={label} className={`${className} text-[#001E36]`} />;
    case 'illustrator':
      return <DiIllustrator aria-label={label} className={`${className} text-[#FF9A00]`} />;

    // Tools & Testing
    case 'git':
      return <SiGit aria-label={label} className={`${className} text-[#F05032]`} />;
    case 'jest':
      return <SiJest aria-label={label} className={`${className} text-[#C21325]`} />;
    case 'vitest':
      return <SiVitest aria-label={label} className={`${className} text-[#6E9F18]`} />;
    case 'testing-library':
      return <SiTestinglibrary aria-label={label} className={`${className} text-[#E33332]`} />;
    case 'jira':
      return <SiJira aria-label={label} className={`${className} text-[#0052CC]`} />;
    case 'scrum':
      return <MdAutorenew aria-label={label} className={`${className} text-[#01487E]`} />;
    case 'kanban':
      return <MdViewKanban aria-label={label} className={`${className} text-[#007ACC]`} />;

      // AI Tools & OpenSource
    case 'github-copilot':
      return <SiGithubcopilot aria-label={label} className={`${className} text-[#24292E] dark:text-white`} />;
    case 'openai':
      return <SiOpenai aria-label={label} className={`${className} text-[#10A37F]`} />;
    case 'claude':
      return <SiAnthropic aria-label={label} className={`${className} text-[#CC9966]`} />;
    case 'opencode':
      return <FaRobot aria-label={label} className={`${className} text-[#10B981]`} />;

    default:
      return <MdBuild className={`${className} text-gray-400`} />;
  }
}