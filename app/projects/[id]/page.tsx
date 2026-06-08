import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import { stripHtml } from '@/lib/stripHtml'
import { SITE_URL, pageTitle } from '@/lib/constants'
import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  const project = getProjectById(id)

  if (!project) {
    return { title: pageTitle('Project Not Found') }
  }

  const description = stripHtml(project.subtitle.en || project.description.en)

  return {
    title: pageTitle(project.title.en),
    description,
    alternates: {
      canonical: `${SITE_URL}/projects/${project.slug.en}`,
      languages: {
        es: `${SITE_URL}/proyectos/${project.slug.es}`,
        en: `${SITE_URL}/projects/${project.slug.en}`,
      },
    },
    openGraph: {
      title: `${project.title.en} | Maider Barrutia`,
      description,
      type: 'article',
      siteName: 'Maider Barrutia',
      locale: 'en_US',
      alternateLocale: 'es_ES',
      url: `${SITE_URL}/projects/${project.slug.en}`,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${project.title.en} | Maider Barrutia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title.en} | Maider Barrutia`,
      description,
      images: ['/og-image.svg'],
    },
  }
}

export async function generateStaticParams() {
  const { projects } = await import('@/data/projects')
  return projects.map((p) => ({ id: p.slug.en }))
}

export default function Page(props: { params: Promise<{ id: string }> }) {
  return <ProjectDetailPage params={props.params} />
}
