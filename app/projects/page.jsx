import Head from '@/app/head'
import { getProjects } from '@/services/projects'
import Main from './components/Main'

export default async function Contact () {
  const projects = await getProjects()

  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Main projects={projects} />
    </>
  )
}
