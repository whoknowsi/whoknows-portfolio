import Head from 'next/head'
import Main from '../../components/Deployments/Main'
import { getDeployments } from '../../services/deployments'

export default function Contact ({ deployments }) {
  return (
    <>
      <Head>
        <title>{'Whoknows | Deployments'}</title>
      </Head>
      <Main deployments={deployments} />
    </>
  )
}

export async function getServerSideProps () {
  const deployments = await getDeployments()
  return {
    props: {
      deployments
    }
  }
}
