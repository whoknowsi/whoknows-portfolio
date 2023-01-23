import { getProjects } from '@/services/projects'
import Head from '@/app/head'
import Projects from './components/Projects'

export default async function Contact () {
  const projects = await getProjects()

  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Projects projects={projects} />
    </>
  )
}
