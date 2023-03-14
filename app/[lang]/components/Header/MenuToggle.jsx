import { FaBars } from 'react-icons/fa'
import styles from './styles/MenuTogge.module.css'

const MenuToggle = ({ handleMenuToggle, open, asideOpen }) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.menuToggle} ${open ? styles.open : asideOpen ? styles.asideOpen : ''}`} onClick={ handleMenuToggle } aria-label="hamburger menu">
        <FaBars />
      </button>
    </div>
  )
}

export default MenuToggle
