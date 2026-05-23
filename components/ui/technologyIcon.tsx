import { 
  SiReact, SiTypescript, SiNextdotjs, SiJavascript, 
  SiHtml5, SiSass, SiTailwindcss, SiNodedotjs, 
  SiGit, SiFigma, SiJest, SiStorybook 
} from 'react-icons/si';

interface TechnologyIconProps {
  techKey: string;
  className?: string;
}

export default function TechnologyIcon({ techKey, className = "w-5 h-5" }: TechnologyIconProps) {
  switch (techKey) {
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
    case 'nodejs':
      return <SiNodedotjs className={`${className} text-[#339933]`} />;
    case 'git':
      return <SiGit className={`${className} text-[#F05032]`} />;
    case 'figma':
      return <SiFigma className={`${className} text-[#F24E1E]`} />;
    case 'jest':
      return <SiJest className={`${className} text-[#C21325]`} />;
    case 'storybook':
      return <SiStorybook className={`${className} text-[#FF4785]`} />;
    default:
      return <span className={className} role="img" aria-label="Tool fallback icon">🛠️</span>;
  }
}