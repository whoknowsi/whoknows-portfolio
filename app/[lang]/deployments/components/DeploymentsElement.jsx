import Head from '@/app/[lang]/head'
import DeploymentRow from './DeploymentRow'

const DeploymentsElement = ({ deployments, lang, dictionary }) => {
  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <section className="deploymentsSectionContainer">
        <h2>{dictionary.title}</h2>
        <section className="deploymentsContainer">
          <div className="deploymentsHeader">
            <h3>{dictionary.tableTitle.name}</h3>
            <h3 className="deploymentsDescription">{dictionary.tableTitle.description}</h3>
            <h3>{dictionary.tableTitle.repo}</h3>
            <h3>{dictionary.tableTitle.url}</h3>
            <h3>{dictionary.tableTitle.status}</h3>
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
