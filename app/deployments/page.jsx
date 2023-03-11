import Head from '@/app/head'
import { getDeployments } from '@/app/deployments/services/deployments-service'
import DeploymentContent from './components/DeploymentContent'

export default async function Deployments() {
  const deployments = await getDeployments()
  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <DeploymentContent deployments={deployments} />
    </>
  )
}
