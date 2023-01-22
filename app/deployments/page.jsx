import styles from './styles/Deployments.module.css'
import { FaGithub, FaLink, FaDotCircle } from 'react-icons/fa'
import Link from 'next/link'
import { use } from 'react'
import { getDeployments } from './services/deployments'
import Head from '@/app/head'

export default function Deployments() {
  const statusTypes = {
    OK: styles.ok,
    UNKNOW: styles.unknow,
    DOWN: styles.down
  }

  const deployments = use(getDeployments())

  return (
    <>  
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      <div className={styles.container}>
        <h2>Deployments</h2>
        <section className={styles.deploymentsContainer}>
            <div className={styles.header}>
              <h3>Name</h3>
              <h3 className={styles.description}>Description</h3>
              <h3>Repo</h3>
              <h3>Url</h3>
              <h3>Status</h3>
            </div>
          {deployments.map(({ _id, name, description, repoUrl, url, status }) => {
            const statusClass = styles.row + ' ' + statusTypes[status]
            return (
              <div className={statusClass} key={_id} >
                <p>{name}</p>
                <p className={styles.description}>{description}</p>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} repository`}><FaGithub /></Link>
                <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`}><FaLink /></Link>
                <p><FaDotCircle /></p>
              </div>
            )
          })}
        </section>
      </div>
  </>
  )
}
