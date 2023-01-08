import styles from '../../styles/components/Header/Header.module.css'
import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'

const Header = ({ handleMenuToggle, open }) => {
  // TODO: take care of tabulation when menu is not open (when tabulating the menu "opens" but just broke the page)

  return (
    <header className={`${styles.container} ${open ? styles.open : ''}`}>
      <MenuToggle handleMenuToggle={handleMenuToggle} />
      <Nav handleMenuToggle={handleMenuToggle} open={open} />
      <LenguageToggle />
    </header>
  )
}

export default Header
