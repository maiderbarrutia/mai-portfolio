import ProjectDetailPage from '../../proyectos-shared/ProjectDetailPage'

export default function Page(props: { params: Promise<{ id: string }> }) {
  return <ProjectDetailPage params={props.params} />
}
