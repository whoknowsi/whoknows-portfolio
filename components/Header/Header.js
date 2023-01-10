import styles from '../../styles/components/Header/Header.module.css'
import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'

const Header = ({ handleMenuToggle, open }) => {
  // TODO: take care of tabulation when menu is not open (when tabulating the menu "opens" but just broke the page)

  return (
    <header className={`${styles.container} ${open ? styles.open : ''}`}>
      <div className={`${styles.menuContainer} ${open ? styles.open : ''}`}>
        <MenuToggle handleMenuToggle={handleMenuToggle} open={open} />
        <Nav handleMenuToggle={handleMenuToggle} open={open} />
        <LenguageToggle open={open} />
      </div>
    </header>
  )
}

export default Header
