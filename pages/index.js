import Head from 'next/head'
import Main from '../components/Home/Main'
import { getProjects } from '../services/projects'

export default function Home ({ projects, info }) {
  return (
    <>
      <Head>
        <title>Whoknows | Web Developer Portfolio</title>
      </Head>
      <Main projects={projects} info={info} />
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
