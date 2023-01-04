import { FaBars } from 'react-icons/fa'
import styles from '../../styles/components/Header/MenuTogge.module.css'

const MenuToggle = () => {
  return (
    <div className={styles.container}>
      <button>
        <FaBars />
      </button>
    </div>
  )
}

export default MenuToggle
