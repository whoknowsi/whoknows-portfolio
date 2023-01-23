import { getProjects } from '@/services/projects'
import Head from '@/app/head'
import Projects from './components/Projects'
import Footer from '../components/Footer/Footer'

export default async function Contact () {
  const projects = await getProjects()

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
