import styles from '../../styles/components/Aside/Aside.module.css'
import Header from './Header'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SocialMedia from './SocialMedia'

const Aside = () => {
  return (
    <aside className={styles.container}>
      <Header />
      <PersonalInfo />
      <SocialMedia />
    </aside>
  )
}

export default Aside
