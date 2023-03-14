import Footer from '@/app/[lang]/components/Footer/Footer'
import DeploymentsElement from './DeploymentsElement'

const DeploymentContent = ({ deployments, lang }) => {
  return (
    <>
      <DeploymentsElement deployments={deployments} lang={lang} />
      <Footer />
    </>
  )
}

export default DeploymentContent
