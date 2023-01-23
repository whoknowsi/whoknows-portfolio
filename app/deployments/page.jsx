import { use } from 'react'
import { getDeployments } from './services/deployments'
import DeploymentsElement from './components/Deployments'
import Head from '@/app/head'
import Footer from '../components/Footer/Footer'

export default function Deployments () {
  const deployments = use(getDeployments())

  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <DeploymentsElement deployments={deployments}/>
      <Footer />
    </>
  )
}
