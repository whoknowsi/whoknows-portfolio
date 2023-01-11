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
        <Link href={`/projects/${_id}`}><h3>Placeholder</h3></Link>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceHolder}></div>
        </div>
        <p>
          Donec quis ante lorem. Aenean at orci vehicula, vehicula mauris at, euismod augue.
          Integer tincidunt odio eu metus feugiat rhoncus. Vivamus rutrum, nulla non imperdiet
          sodales, mi enim scelerisque mauris, malesuada tempor lorem quam eu enim. Proin ornare
          commodo ligula, sed posuere ante cursus sed. Nulla risus enim, porta sit amet pulvinar
          vitae, tincidunt sit amet massa. Nulla aliquam enim nec justo tempor malesuada. Donec
          ac molestie ipsum, nec lacinia elit. Suspendisse vulputate massa eget ex mollis, at
          eleifend tellus fringilla. Aenean rutrum faucibus nunc, quis vestibulum urna feugiat at.
          Vestibulum non blandit massa. Donec fermentum ultricies ligula in tempus. Proin ullamcorper,
          sem in vehicula rutrum, leo libero consequat sapien, et imperdiet risus ante eget sapien.
        </p>
      </div>
      )
}

export default Project
