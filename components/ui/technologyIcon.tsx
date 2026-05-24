import { 
  SiReact, SiTypescript, SiNextdotjs, SiJavascript, 
  SiHtml5, SiSass, SiTailwindcss, SiNodedotjs, 
  SiGit, SiFigma, SiJest,
  SiVite, SiAngular, SiWordpress, SiExpress,
  SiPhp, SiMysql, SiVitest, 
  SiTestinglibrary, SiJira, SiScrumalliance, 
  SiGithubcopilot, SiOpenai, SiAnthropic,
} from 'react-icons/si';

import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { FaDatabase, FaRobot } from 'react-icons/fa';
import { MdViewKanban, MdBuild, MdStorage } from 'react-icons/md';

interface TechnologyIconProps {
  techKey: string;
  className?: string;
}

export default function TechnologyIcon({ techKey, className = "w-5 h-5" }: TechnologyIconProps) {
  switch (techKey) {
    // Frontend
    case 'react':
      return <SiReact className={`${className} text-[#61DAFB]`} />;
    case 'typescript':
      return <SiTypescript className={`${className} text-[#3178C6]`} />;
    case 'nextjs':
      return <SiNextdotjs className={`${className} dark:text-white text-black`} />;
    case 'javascript':
      return <SiJavascript className={`${className} text-[#F7DF1E]`} />;
    case 'html5':
      return <SiHtml5 className={`${className} text-[#E34F26]`} />;
    case 'scss':
      return <SiSass className={`${className} text-[#CC6699]`} />;
    case 'tailwind':
      return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
    case 'vite':
      return <SiVite className={`${className} text-[#646CFF]`} />;
    case 'angular':
      return <SiAngular className={`${className} text-[#DD0031]`} />;
    case 'wordpress':
      return <SiWordpress className={`${className} text-[#21759B]`} />;
    case 'bem':
      return <span className={`${className} font-mono font-bold text-xs text-gray-500`}>[BEM]</span>;

    // Backend & DDBB
    case 'nodejs':
      return <SiNodedotjs className={`${className} text-[#339933]`} />;
    case 'express':
      return <SiExpress className={`${className} dark:text-white text-black`} />;
    case 'php':
      return <SiPhp className={`${className} text-[#777BB4]`} />;
    case 'mysql':
      return <SiMysql className={`${className} text-[#4479A1]`} />;
    case 'oracle':
      return <FaDatabase className={`${className} text-[#F80000]`} />;

    // Design
    case 'figma':
      return <SiFigma className={`${className} text-[#F24E1E]`} />;
    case 'photoshop':
      return <DiPhotoshop className={`${className} text-[#001E36]`} />;
    case 'illustrator':
      return <DiIllustrator className={`${className} text-[#FF9A00]`} />;

    // Tools & Testing
    case 'git':
      return <SiGit className={`${className} text-[#F05032]`} />;
    case 'jest':
      return <SiJest className={`${className} text-[#C21325]`} />;
    case 'vitest':
      return <SiVitest className={`${className} text-[#6E9F18]`} />;
    case 'testing-library':
      return <SiTestinglibrary className={`${className} text-[#E33332]`} />;
    case 'jira':
      return <SiJira className={`${className} text-[#0052CC]`} />;
    case 'scrum':
      return <SiScrumalliance className={`${className} text-[#01487E]`} />;
    case 'kanban':
      return <MdViewKanban className={`${className} text-[#007ACC]`} />;

      // AI Tools & OpenSource
    case 'github-copilot':
      return <SiGithubcopilot className={`${className} text-[#24292E] dark:text-white`} />;
    case 'openai':
      return <SiOpenai className={`${className} text-[#10A37F]`} />;
    case 'claude':
      return <SiAnthropic className={`${className} text-[#CC9966]`} />;
    case 'opencode':
      return <FaRobot className={`${className} text-[#10B981]`} />;

    default:
      return <MdBuild className={`${className} text-gray-400`} />;
  }
}