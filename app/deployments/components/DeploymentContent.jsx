import Footer from '@/app/components/Footer/Footer'
import DeploymentsElement from './DeploymentsElement'

const DeploymentContent = ({ deployments }) => {
  return (
    <>
      <DeploymentsElement deployments={deployments} />
      <Footer />
    </>
  )
}

export default DeploymentContent
