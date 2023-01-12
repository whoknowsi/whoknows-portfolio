import Head from 'next/head'
import Main from '../../../components/Projects/Project/Main'
import { useRouter } from 'next/router'

export default function Contact ({ projects }) {
  const router = useRouter()
  const id = router.query.id
  const project = projects.find((project) => project._id === id)

  return (
    <>
      <Head>
        <title>{`Whoknows | ${project?.name ? project.name : 'Project not found'}`}</title>
      </Head>
      <Main project={project} />
    </>
  )
}
