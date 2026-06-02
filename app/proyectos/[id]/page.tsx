import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import { stripHtml } from '@/lib/stripHtml'
import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  const project = getProjectById(id)

  if (!project) {
    return { title: 'Proyecto no encontrado' }
  }

  const description = stripHtml(project.subtitle.es || project.description.es)

  return {
    title: project.title.es,
    description,
    alternates: {
      canonical: `${siteUrl}/proyectos/${project.slug.es}`,
      languages: {
        es: `${siteUrl}/proyectos/${project.slug.es}`,
        en: `${siteUrl}/projects/${project.slug.en}`,
      },
    },
    openGraph: {
      title: `${project.title.es} | Maider Barrutia`,
      description,
      locale: 'es_ES',
      alternateLocale: 'en_US',
      images: [
        {
          url: `${siteUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${project.title.es} | Maider Barrutia`,
        },
      ],
    },
    twitter: {
      images: [`${siteUrl}/og-image.svg`],
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
