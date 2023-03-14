import Link from 'next/link'
import styles from './styles/CV.module.css'
import { FaFileDownload } from 'react-icons/fa'

const CV = ({ path, dictionary }) => {
  return (
    <div className={styles.container}>
      <Link
        href={`${process.env.STATICS_BASE_URL}${path}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'download curriculum vitae'}
      >
        {dictionary.cv} <FaFileDownload />
      </Link>
    </div>
  )
}

export default CV
