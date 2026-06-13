import type { Metadata } from 'next'
import { projects, type ProjectCategory } from '@/data/projects'
import { ProyectosClient } from '../../proyectos-shared/ProyectosClient'
import { SITE_URL, pageTitle } from '@/lib/constants'

export const metadata: Metadata = {
  title: pageTitle('All Projects - Portfolio'),
  description: 'Browse the full portfolio of Maider Barrutia: web development, web design, and graphic design projects featuring responsive sites, corporate portals, and brand identities.',
  alternates: {
    canonical: `${SITE_URL}/en/projects`,
    languages: {
      es: `${SITE_URL}/proyectos`,
      en: `${SITE_URL}/en/projects`,
    },
  },
  openGraph: {
    title: pageTitle('All Projects - Portfolio'),
    description: 'Browse the full portfolio of Maider Barrutia: web development, web design, and graphic design projects featuring responsive sites, corporate portals, and brand identities.',
    type: 'website',
    siteName: 'Maider Barrutia',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: `${SITE_URL}/en/projects`,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: pageTitle('All Projects - Portfolio'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle('All Projects - Portfolio'),
    description: 'Browse the full portfolio of Maider Barrutia: web development, web design, and graphic design projects featuring responsive sites, corporate portals, and brand identities.',
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

export default function ProjectsPage() {
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
