import Link from 'next/link'
import styles from './styles/CV.module.css'
import { FaFileDownload } from 'react-icons/fa'

const CV = ({ path }) => {
  return (
    <div className={styles.container}>
      <Link
        href={`${process.env.STATICS_BASE_URL}${path}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'download curriculum vitae'}
      >
        Download <FaFileDownload />
      </Link>
    </div>
  )
}

export default CV
