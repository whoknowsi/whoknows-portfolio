import Image from 'next/image'
import styles from '../../../styles/components/Projects/Project/Project.module.css'
import { FaGithub, FaGithubAlt } from 'react-icons/fa'
import Link from 'next/link'

const Project = ({ project }) => {
  const { name, description, createdAt, status, repoUrl, url, media } = project
  return (
    <div className={styles.container}>
      <div className={styles.firstSectionContainer}>
        <h2>{name}</h2>
        <div className={styles.imagesContainer}>
          <div className={styles.imagesSlider}>
            {media.map((url, i) =>
              <div key={url} className={styles.imageContainer}>
                <div className={styles.prev}>{'<'}</div>
                <div className={styles.next}>{'>'}</div>
                <Image src={url} fill alt={`${name} image ${i}`} />
              </div>)}
          </div>
        </div>
      </div>
      <div className={styles.secondSectionContainer}>
        <h2>Project details</h2>
        <div className={styles.detailsContainer}>
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className={styles.details}>
            <ul>
              <li><strong>Date:</strong>{createdAt}</li>
              <li><strong>Status:</strong>{status}</li>
              <li><strong>Repo:</strong><Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} repository`}><FaGithub /></Link></li>
              <li><strong>Website:</strong><Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`}><FaGithubAlt /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Project
