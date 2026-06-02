import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

const siteUrl = 'https://maiderbarrutia.vercel.app'

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params
  const project = getProjectById(id)

  if (!project) {
    return { title: 'Proyecto no encontrado' }
  }

  return {
    title: project.title.es,
    description: project.subtitle.es || project.description.es,
    alternates: {
      canonical: `${siteUrl}/proyectos/${project.slug.es}`,
      languages: {
        es: `${siteUrl}/proyectos/${project.slug.es}`,
        en: `${siteUrl}/projects/${project.slug.en}`,
      },
    },
    openGraph: {
      title: `${project.title.es} | Maider Barrutia`,
      description: project.subtitle.es || project.description.es,
      locale: 'es_ES',
      alternateLocale: 'en_US',
    },
  }
}

export default function Page(props: { params: Promise<{ id: string }> }) {
  return <ProjectDetailPage params={props.params} />
}
