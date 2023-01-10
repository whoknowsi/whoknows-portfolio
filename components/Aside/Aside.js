import styles from '../../styles/components/Aside/Aside.module.css'
import { FaEllipsisV } from 'react-icons/fa'
import Header from './Header'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SocialMedia from './SocialMedia'

const Aside = ({ info, handleAsideToggle, open }) => {
  const { name, lastName, description, socialMedia, ...restInfo } = info
  return (
    <aside className={`${styles.container} ${open ? styles.open : ''}`}>
      <button className={`${styles.asideToggle} ${open ? styles.open : ''}`} onClick={handleAsideToggle} aria-label="aside menu">
        <FaEllipsisV />
      </button>
      <Header name={name} lastName={lastName} descriptions={description} />
      <PersonalInfo info={restInfo} />
      <SocialMedia urls={socialMedia} />
    </aside>
  )
}

export default Aside
