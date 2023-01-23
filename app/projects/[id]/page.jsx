import Footer from '@/app/components/Footer/Footer'
import Head from '@/app/head'
import { getProjects } from '@/services/projects'
import Project from './components/Project'
import ProjectNotFound from './components/ProjectNotFound'

export default async function Contact ({ params }) {
  const projects = await getProjects()
  const id = params.id
  const project = projects.find((project) => project._id === id)

  return (
    <>
      <Head>
        <title>{`Whoknows | ${project?.name ? project.name : 'Project not found'}`}</title>
      </Head>
      {project ? <><Project project={project} /><Footer /></> : <ProjectNotFound />}
    </>
  )
}
