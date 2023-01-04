import styles from '../../styles/components/Aside/Header.module.css'
import Description from './Description'
import ProfilePicture from './ProfilePicture'

const Header = () => {
  return (
    <div className={styles.container}>
      <ProfilePicture />
      <Description />
    </div>
  )
}

export default Header
