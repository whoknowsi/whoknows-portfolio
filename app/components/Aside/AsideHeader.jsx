import Image from "next/image"
import Link from "next/link"
import styles from './styles/AsideHeader.module.css'

export const AsideHeader = ({name, lastName, description, loading}) => {
  return (
    <div className={styles.container}>
      <div className={styles.profilePictureContainer}>
      <Link href='/' onClick={() => loading('/')}>
          <Image priority={true} src='/images/portrait.jpg' width='1944' height='2025' alt='portrait photo'/>
        </Link>
      </div>
      <div className={styles.descriptionContainer}>
        <Link href="/" onClick={() => loading('/')}>
          <h2>{`${name} ${lastName}`}</h2>
        </Link>
        {description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </div>
    </div>
  )
}
