import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../../styles/components/Aside/SocialMedia.module.css'

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/whoknowsi/" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/carlos-jofr%C3%A9-830273210/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </Link>
    </div>
  )
}

export default SocialMedia
