import { getProjectsBy } from '@/services/projects-service'
import Head from '@/app/[lang]/head'
import Projects from './components/Projects'
import Footer from '../components/Footer/Footer'

export default async function Contact ({ params }) {
  const projects = await getProjectsBy({ lang: params.lang })

  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Projects projects={projects} lang={params.lang} />
      <Footer />
    </>
  )
}
