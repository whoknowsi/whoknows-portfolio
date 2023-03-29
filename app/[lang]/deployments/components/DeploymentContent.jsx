import DeploymentsElement from './DeploymentsElement'

const DeploymentContent = ({ deployments, lang, dictionary }) => {
  return (
    <DeploymentsElement deployments={deployments} lang={lang} dictionary={dictionary.deployments} />
  )
}

export default DeploymentContent
