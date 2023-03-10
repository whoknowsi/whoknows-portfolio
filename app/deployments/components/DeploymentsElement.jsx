import { FaGithub, FaLink, FaDotCircle } from 'react-icons/fa'
import Link from 'next/link'
import Head from '@/app/head'

const DeploymentsElement = ({ deployments }) => {
  const statusTypes = {
    OK: 'rowOk',
    UNKNOW: 'rowUnknow',
    DOWN: 'rowDown'
  }

  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <section className='deploymentsSectionContainer'>
        <h2>Deployments</h2>
        <section className='deploymentsContainer'>
            <div className='deploymentsHeader'>
              <h3>Name</h3>
              <h3 className='deploymentsDescription'>Description</h3>
              <h3>Repo</h3>
              <h3>Url</h3>
              <h3>Status</h3>
            </div>
          {deployments.map(({ id, name, description, repoUrl, url, status }) => {
            const statusClass = 'deploymentsRow' + ' ' + statusTypes[status]
            return (
              <div className={statusClass} key={id} >
                <p>{name}</p>
                <p className='deploymentsDescription'>{description}</p>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} repository`}><FaGithub /></Link>
                <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`}><FaLink /></Link>
                <p><FaDotCircle /></p>
              </div>
            )
          })}
        </section>
      </section>
  </>
  )
}

export default DeploymentsElement
