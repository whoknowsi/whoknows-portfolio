import Footer from '@/app/[lang]/components/Footer/Footer'
import Head from '@/app/[lang]/head'
import { getProjectsBy } from '@/services/projects-service'
import Project from './components/Project'

export default async function ProjectPage({ params }) {
  const { id } = params
  const project = await getProjectsBy({ id, lang: params.lang })
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

export async function generateStaticParams({ params }) {
  const projects = await getProjectsBy({ lang: params.lang })
  return projects.map((project) => {
    return { id: project.id }
  })
}
