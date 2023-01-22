import styles from './styles/Header.module.css'
import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'

const Header = ({ handleMenuToggle, open, asideOpen, projects, loading }) => {
  return (
    <header className={`${styles.container} ${open ? styles.open : ''}`}>
      <div className={`${styles.menuContainer} ${open ? styles.open : ''}`}>
        <MenuToggle handleMenuToggle={handleMenuToggle} open={open} asideOpen={asideOpen}/>
        <Nav handleMenuToggle={handleMenuToggle} open={open} projects={projects} loading={loading} />
        <LenguageToggle open={open} />
      </div>
    </header>
  )
}

export default Header
