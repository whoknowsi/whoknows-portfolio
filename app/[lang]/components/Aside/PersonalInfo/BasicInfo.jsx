import Link from 'next/link'
import { FaFileDownload } from 'react-icons/fa'
import styles from './styles/BasicInfo.module.css'

const getAgeFrom = (dateOfBirth) => {
  const birthSplited = dateOfBirth.split('/')
  const birth = new Date(birthSplited[2], birthSplited[1] - 1, birthSplited[0])
  return Math.floor((new Date() - birth) / 31557600000) // Divide by 1000*60*60*24*365.25
}

const BasicInfo = ({ info, dictionary, cv }) => {
  const { dateOfBirth, country, city } = info

  return (
    <div className={styles.container}>
      <ul>
        <li>{country}</li>
        <li>{city}</li>
        <li>{getAgeFrom(dateOfBirth)}</li>
        <Link
          href={`${process.env.STATICS_BASE_URL}${cv}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={'download curriculum vitae'}
        >
          {dictionary.cv} <FaFileDownload />
      </Link>
      </ul>
    </div>
  )
}

export default BasicInfo
