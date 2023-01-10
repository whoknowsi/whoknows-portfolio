import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/Aside/ProfilePicture.module.css'

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image priority={true} src='/images/portrait.jpg' width='1944' height='2025' alt='portrait photo'/>
      </Link>
    </div>
  )
}

export default ProfilePicture
