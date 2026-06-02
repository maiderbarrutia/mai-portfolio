import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import { stripHtml } from '@/lib/stripHtml'
import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  const project = getProjectById(id)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  const description = stripHtml(project.subtitle.en || project.description.en)

  return {
    title: project.title.en,
    description,
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug.en}`,
      languages: {
        es: `${siteUrl}/proyectos/${project.slug.es}`,
        en: `${siteUrl}/projects/${project.slug.en}`,
      },
    },
    openGraph: {
      title: `${project.title.en} | Maider Barrutia`,
      description,
      locale: 'en_US',
      alternateLocale: 'es_ES',
      images: [
        {
          url: `${siteUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${project.title.en} | Maider Barrutia`,
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
  return projects.map((p) => ({ id: p.slug.en }))
}

export default function Page(props: { params: Promise<{ id: string }> }) {
  return <ProjectDetailPage params={props.params} />
}
