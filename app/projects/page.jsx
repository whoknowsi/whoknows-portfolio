import { getProjectsBy } from '@/services/projects-service'
import Head from '@/app/head'
import Projects from './components/Projects'
import Footer from '../components/Footer/Footer'

export default async function Contact () {
  const projects = await getProjectsBy()

  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Projects projects={projects} />
      <Footer />
    </>
  )
}
