import type { Metadata } from 'next'
import { projects, type ProjectCategory } from '@/data/projects'
import { ProyectosClient } from './ProyectosClient'

export const metadata: Metadata = {
  title: 'Todos los Proyectos | Maider Barrutia',
  description: 'Explora todos los proyectos de Maider Barrutia organizados por categorías: diseño gráfico, diseño web y desarrollo web.',
}

const categoryLabels: Record<ProjectCategory, { es: string; en: string }> = {
  'graphic-design': { es: 'Diseño Gráfico', en: 'Graphic Design' },
  'web-design': { es: 'Diseño Web', en: 'Web Design' },
  'web-development': { es: 'Desarrollo Web', en: 'Web Development' },
}

export default function ProyectosPage() {
  const nonFeatured = projects.filter(p => !p.featured)
  const grouped = (Object.keys(categoryLabels) as ProjectCategory[])
    .map(key => ({
      key,
      label: categoryLabels[key],
      items: nonFeatured.filter(p => p.category === key).map(p => ({
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
