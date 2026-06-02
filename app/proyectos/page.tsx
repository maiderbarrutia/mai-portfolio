import type { Metadata } from 'next'
import { projects, type ProjectCategory } from '@/data/projects'
import { ProyectosClient } from '../proyectos-shared/ProyectosClient'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export const metadata: Metadata = {
  title: 'Todos los Proyectos | Maider Barrutia',
  description: 'Explora todos los proyectos de Maider Barrutia organizados por categorías: diseño gráfico, diseño web y desarrollo web.',
  alternates: {
    canonical: `${siteUrl}/proyectos`,
    languages: {
      es: `${siteUrl}/proyectos`,
      en: `${siteUrl}/projects`,
    },
  },
  openGraph: {
    title: 'Todos los Proyectos | Maider Barrutia',
    description: 'Explora todos los proyectos de Maider Barrutia organizados por categorías.',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
}

const categoryLabels: Record<ProjectCategory, { es: string; en: string }> = {
  'web-development': { es: 'Desarrollo Web', en: 'Web Development' },
  'web-design': { es: 'Diseño Web', en: 'Web Design' },
  'graphic-design': { es: 'Diseño Gráfico', en: 'Graphic Design' },
}

const webDevOrder: Record<string, number> = {
  aisiplan: 1,
  'energy-distribution-portal': 2,
  'ai-sales-simulator': 3,
  'real-estate-portal': 4,
  doryos: 5,
  'ecommerce-branding': 6,
}

export default function ProyectosPage() {
  const grouped = (Object.keys(categoryLabels) as ProjectCategory[])
    .map(key => ({
      key,
      label: categoryLabels[key],
      items: projects.filter(p => p.category === key)
        .sort((a, b) => (webDevOrder[a.id] ?? 99) - (webDevOrder[b.id] ?? 99))
        .map(p => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        subtitle: p.subtitle,
        image: p.image,
        tags: p.tags,
      })),
    }))
    .filter(g => g.items.length > 0)

  return <ProyectosClient categories={grouped} />
}
