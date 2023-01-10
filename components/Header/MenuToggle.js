import { FaBars } from 'react-icons/fa'
import styles from '../../styles/components/Header/MenuTogge.module.css'

const MenuToggle = ({ handleMenuToggle, handleAsideToggle, open }) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.menuToggle} ${open ? styles.open : ''}`} onClick={ handleMenuToggle } aria-label="hamburger menu">
        <FaBars />
      </button>
    </div>
  )
}

export default MenuToggle
