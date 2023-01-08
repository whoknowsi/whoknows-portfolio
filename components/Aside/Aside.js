import styles from '../../styles/components/Aside/Aside.module.css'
import Header from './Header'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SocialMedia from './SocialMedia'

const Aside = ({ info }) => {
  const { name, lastName, description, socialMedia, ...restInfo } = info
  return (
    <aside className={styles.container}>
      <Header name={name} lastName={lastName} descriptions={description} />
      <PersonalInfo info={restInfo} />
      <SocialMedia urls={socialMedia} />
    </aside>
  )
}

export default Aside
