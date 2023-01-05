import { FaBars } from 'react-icons/fa'
import styles from '../../styles/components/Header/MenuTogge.module.css'

const MenuToggle = ({ handleMenuToggle }) => {
  return (
    <div className={styles.container}>
      <button onClick={ handleMenuToggle }>
        <FaBars />
      </button>
    </div>
  )
}

export default MenuToggle
