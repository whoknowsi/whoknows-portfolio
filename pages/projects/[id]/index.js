import Head from 'next/head'
import Main from '../../../components/Projects/Project/Main'
import { getProjectBy } from '../../../services/projects'

export default function Contact ({ project }) {
  return (
    <>
      <Head>
        <title>{`Whoknows | ${project?.name ? project.name : 'Project not found'}`}</title>
      </Head>
      <Main project={project} />
    </>
  )
}

export async function getServerSideProps (context) {
  const { id } = context.query
  const project = await getProjectBy(id)
  return {
    props: {
      project
    }
  }
}
