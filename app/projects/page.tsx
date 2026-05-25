import type { Metadata } from 'next'
import { projects, type ProjectCategory } from '@/data/projects'
import { ProyectosClient } from '../proyectos-shared/ProyectosClient'

export const metadata: Metadata = {
  title: 'All Projects | Maider Barrutia',
  description: 'Explore all projects by Maider Barrutia organized by categories: graphic design, web design, and web development.',
}

const categoryLabels: Record<ProjectCategory, { es: string; en: string }> = {
  'web-development': { es: 'Desarrollo Web', en: 'Web Development' },
  'web-design': { es: 'Diseño Web', en: 'Web Design' },
  'graphic-design': { es: 'Diseño Gráfico', en: 'Graphic Design' },
}

export default function ProjectsPage() {
  const grouped = (Object.keys(categoryLabels) as ProjectCategory[])
    .map(key => ({
      key,
      label: categoryLabels[key],
      items: projects.filter(p => p.category === key).map(p => ({
        id: p.id,
        title: p.title,
        subtitle: p.subtitle,
        image: p.image,
        tags: p.tags,
      })),
    }))
    .filter(g => g.items.length > 0)

  return <ProyectosClient categories={grouped} />
}
