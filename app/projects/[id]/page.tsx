import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  const project = getProjectById(id)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title.en,
    description: project.subtitle.en || project.description.en,
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug.en}`,
      languages: {
        es: `${siteUrl}/proyectos/${project.slug.es}`,
        en: `${siteUrl}/projects/${project.slug.en}`,
      },
    },
    openGraph: {
      title: `${project.title.en} | Maider Barrutia`,
      description: project.subtitle.en || project.description.en,
      locale: 'en_US',
      alternateLocale: 'es_ES',
    },
  }
}

export default function Page(props: { params: Promise<{ id: string }> }) {
  return <ProjectDetailPage params={props.params} />
}
