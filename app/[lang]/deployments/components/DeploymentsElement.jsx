import Head from '@/app/[lang]/head'
import DeploymentRow from './DeploymentRow'

const DeploymentsElement = ({ deployments, lang }) => {
  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <section className="deploymentsSectionContainer">
        <h2>Deployments</h2>
        <section className="deploymentsContainer">
          <div className="deploymentsHeader">
            <h3>Name</h3>
            <h3 className="deploymentsDescription">Description</h3>
            <h3>Repo</h3>
            <h3>Url</h3>
            <h3>Status</h3>
          </div>
          {deployments.map((deployment) => (
            <DeploymentRow key={lang + deployment.url} deployment={deployment} />
          ))}
        </section>
      </section>
    </>
  )
}

export default DeploymentsElement
