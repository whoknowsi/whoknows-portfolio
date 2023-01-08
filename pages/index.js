import Head from 'next/head'
import Main from '../components/Home/Main'
import { getLastProjects } from '../services/projects'

export default function Home ({ projects, info }) {
  return (
    <>
      <Head>
        <title>{'Whoknows\'s Portfolio'}</title>
      </Head>
      <Main projects={projects} info={info} />
    </>
  )
}

export async function getServerSideProps () {
  const projects = await getLastProjects()
  return {
    props: {
      projects
    }
  }
}
