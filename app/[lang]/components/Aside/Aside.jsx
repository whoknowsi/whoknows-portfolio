'use client'

import { FaEllipsisV } from 'react-icons/fa'
import styles from './styles/Aside.module.css'

const Aside = ({ info, handleAsideToggle, open, menuOpen, handleMainClick, dictionary }) => {
  return (
    <aside className={`${styles.container} ${open ? styles.open : menuOpen ? styles.menuOpen : ''}`}>
      <button className={styles.asideToggle} onClick={handleAsideToggle} aria-label="aside menu">
        <FaEllipsisV />
      </button>
    </aside>
  )
}

export default Aside
