import { getProjectsBy } from '@/services/projects-service'
import Head from '@/app/[lang]/head'
import Projects from './components/Projects'
import Footer from '../components/Footer/Footer'
import { getDictionary } from '@/get-dictionary'

export default async function Contact ({ params }) {
  const projects = await getProjectsBy({ lang: params.lang })
  const dictionary = await getDictionary({ locale: params.lang })

  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Projects projects={projects} lang={params.lang} dictionary={dictionary.projects} />
      <Footer text={dictionary.footer}/>
    </>
  )
}
