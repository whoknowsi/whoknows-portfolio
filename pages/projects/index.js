import Head from 'next/head'
import Main from '../../components/Projects/Main'
import { getProjects } from '../../services/projects'

export default function Contact ({ projects }) {
  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Main projects={projects} />
    </>
  )
}

export async function getServerSideProps () {
  const projects = await getProjects()
  return {
    props: {
      projects
    }
  }
}
