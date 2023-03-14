'use client'

import PersonalInfo from './PersonalInfo/PersonalInfo'
import SocialMedia from './SocialMedia'
import { AsideHeader } from './AsideHeader'
import { FaEllipsisV } from 'react-icons/fa'
import styles from './styles/Aside.module.css'

const Aside = ({ info, handleAsideToggle, open, menuOpen, handleMainClick, dictionary }) => {
  const { name, lastName, description, socialMedia, ...restInfo } = info
  return (
    <aside className={`${styles.container} ${open ? styles.open : menuOpen ? styles.menuOpen : ''}`}>
      <button className={styles.asideToggle} onClick={handleAsideToggle} aria-label="aside menu">
        <FaEllipsisV />
      </button>
      <AsideHeader name={info.name} lastName={info.lastName} description={info.description} handleMainClick={handleMainClick}/>
      <PersonalInfo info={restInfo} dictionary={dictionary}/>
      <SocialMedia urls={socialMedia} dictionary={dictionary} />
    </aside>
  )
}

export default Aside
