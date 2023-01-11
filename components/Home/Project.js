import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/Home/Project.module.css'
import { useRouter } from 'next/router'

const Project = ({ name, description, createdAt, status, client, media, _id }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/projects/${_id}`)
  }

  const handleMiddleClick = (e) => {
    if (e.button !== 1) return
    window.open(`/projects/${_id}`, '_blank')
  }

  return name
    ? (
    <div className={styles.container} onClick={handleClick} onMouseDown={handleMiddleClick}>
      <Link href={`/projects/${_id}`}><h3>{name}</h3></Link>
      <div className={styles.imageContainer}>
        <Image
          src={media[0]}
          fill
          alt={name}
        />
      </div>
      <p>{description}</p>
    </div>
      )
    : (
      <div className={styles.containerPlaceHolder}>
        <Link href={`/projects/${_id}`}><h3>{}</h3></Link>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceHolder}></div>
        </div>
        <p>{description}</p>
      </div>
      )
}

export default Project
