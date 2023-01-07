import styles from '../../styles/components/Aside/Aside.module.css'
import Header from './Header'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SocialMedia from './SocialMedia'

const Aside = ({ info }) => {
  return (
    <aside className={styles.container}>
      <Header name={info.name} lastName={info.lastName} descriptions={info.description} />
      <PersonalInfo />
      <SocialMedia urls={info.socialMedia} />
    </aside>
  )
}

export default Aside
