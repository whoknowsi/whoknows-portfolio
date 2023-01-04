import styles from '../../styles/components/Header/Header.module.css'
import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.container}>
      <MenuToggle />
      <Nav>

      </Nav>
      <LenguageToggle />
    </header>
  )
}

export default Header
