import Footer from '@/app/[lang]/components/Footer/Footer'
import DeploymentsElement from './DeploymentsElement'

const DeploymentContent = ({ deployments, lang, dictionary }) => {
  return (
    <>
      <DeploymentsElement deployments={deployments} lang={lang} dictionary={dictionary.deployments} />
      <Footer text={dictionary.footer}/>
    </>
  )
}

export default DeploymentContent
