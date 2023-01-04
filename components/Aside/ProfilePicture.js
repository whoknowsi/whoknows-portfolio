import Image from 'next/image'
import styles from '../../styles/components/Aside/ProfilePicture.module.css'

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <Image priority={true} src='/images/portrait.jpg' width='1944' height='2025' alt='portrait photo'/>
    </div>
  )
}

export default ProfilePicture
