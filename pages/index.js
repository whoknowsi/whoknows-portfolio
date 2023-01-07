import Head from 'next/head'
import Main from '../components/Home/Main'
import { getLastProjects } from '../services/projects'

export default function Home ({ projects }) {
  return (
    <>
      <Head>
        <title>{'Whoknows\'s Portfolio'}</title>
      </Head>
      <Main projects={projects} />
    </>
  )
}

export async function getStaticProps () {
  const projects = await getLastProjects()
  return {
    props: {
      projects
    }
  }
}
