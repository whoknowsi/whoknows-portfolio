import Footer from '@/app/components/Footer/Footer'
import Head from '@/app/head'
import { getProjectsBy } from '@/services/projects-service'
import Project from './components/Project'

export default async function ProjectPage({ params }) {
  const { id } = params
  const project = await getProjectsBy(id)
  return (
    <>
      <Head>
        <title>{`Whoknows | ${project.name}`}</title>
      </Head>
      <>
        <Project project={project} />
        <Footer />
      </>
    </>
  )
}

export async function generateStaticParams() {
  const projects = await getProjectsBy()
  return projects.map(({ id }) => ({ id }))
}
