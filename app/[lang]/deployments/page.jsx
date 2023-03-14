import Head from '@/app/[lang]/head'
import { getDeployments } from '@/app/[lang]/deployments/services/deployments-service'
import DeploymentContent from './components/DeploymentContent'
import { getDictionary } from '@/get-dictionary'

export default async function Deployments({ params }) {
  const deployments = await getDeployments({ lang: params.lang })
  const dictionary = await getDictionary({ locale: params.lang })

  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <DeploymentContent deployments={deployments} lang={params.lang} dictionary={dictionary} />
    </>
  )
}
