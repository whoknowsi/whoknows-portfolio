import styles from '../../styles/components/Aside/Header.module.css'
import Description from './Description'
import ProfilePicture from './ProfilePicture'

const Header = (props) => {
  return (
    <div className={styles.container}>
      <ProfilePicture />
      <Description {...props} />
    </div>
  )
}

export default Header
