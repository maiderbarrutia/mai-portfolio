import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import { stripHtml } from '@/lib/stripHtml'
import { SITE_URL, pageTitle } from '@/lib/constants'
import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  const project = getProjectById(id)

  if (!project) {
    return { title: pageTitle('Proyecto no encontrado') }
  }

  const description = stripHtml(project.subtitle.es || project.description.es)

  return {
    title: pageTitle(project.title.es),
    description,
    alternates: {
      canonical: `${SITE_URL}/proyectos/${project.slug.es}`,
      languages: {
        es: `${SITE_URL}/proyectos/${project.slug.es}`,
        en: `${SITE_URL}/en/projects/${project.slug.en}`,
      },
    },
    openGraph: {
      title: `${project.title.es} | Maider Barrutia`,
      description,
      type: 'article',
      siteName: 'Maider Barrutia',
      locale: 'es_ES',
      alternateLocale: 'en_US',
      url: `${SITE_URL}/proyectos/${project.slug.es}`,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${project.title.es} | Maider Barrutia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title.es} | Maider Barrutia`,
      description,
      images: ['/og-image.svg'],
    },
  }
}

export async function generateStaticParams() {
  const { projects } = await import('@/data/projects')
  return projects.map((p) => ({ id: p.slug.es }))
}

export default function Page(props: { params: Promise<{ id: string }> }) {
  return <ProjectDetailPage params={props.params} />
}
