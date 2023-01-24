import styles from './styles/Header.module.css'
import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'

const Header = ({ handleMenuToggle, open, asideOpen, projects, handleMainClick }) => {
  return (
    <header className={`${styles.container} ${open ? styles.open : ''}`}>
      <div className={`${styles.menuContainer} ${open ? styles.open : ''}`}>
        <MenuToggle handleMenuToggle={handleMenuToggle} open={open} asideOpen={asideOpen}/>
        <Nav handleMainClick={handleMainClick} handleMenuToggle={handleMenuToggle} open={open} projects={projects}/>
        <LenguageToggle open={open} />
      </div>
    </header>
  )
}

export default Header
