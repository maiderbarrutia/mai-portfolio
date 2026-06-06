import type { Metadata } from 'next'
import { projects, type ProjectCategory } from '@/data/projects'
import { ProyectosClient } from '../proyectos-shared/ProyectosClient'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Todos los Proyectos - Portfolio',
  description: 'Explora el portfolio completo de Maider Barrutia: desarrollo web, diseño web y diseño gráfico con sitios responsive, portales corporativos e identidades de marca.',
  alternates: {
    canonical: `${SITE_URL}/proyectos`,
    languages: {
      es: `${SITE_URL}/proyectos`,
      en: `${SITE_URL}/projects`,
    },
  },
  openGraph: {
    title: 'Todos los Proyectos - Portfolio | Maider Barrutia',
    description: 'Explora el portfolio completo de Maider Barrutia: desarrollo web, diseño web y diseño gráfico con sitios responsive, portales corporativos e identidades de marca.',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: `${SITE_URL}/proyectos`,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Todos los Proyectos - Portfolio | Maider Barrutia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todos los Proyectos - Portfolio | Maider Barrutia',
    description: 'Explora el portfolio completo de Maider Barrutia: desarrollo web, diseño web y diseño gráfico con sitios responsive, portales corporativos e identidades de marca.',
    images: ['/og-image.svg'],
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
