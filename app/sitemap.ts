import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${SITE_URL}/en`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/proyectos`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/en/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_URL}/legal`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/en/legal`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const projectRoutes = projects.flatMap((p) => [
    {
      url: `${SITE_URL}/en/projects/${p.slug.en}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/proyectos/${p.slug.es}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ])

  return [...staticRoutes, ...projectRoutes]
}
