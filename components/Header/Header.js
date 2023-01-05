import { useState } from 'react'
import styles from '../../styles/components/Header/Header.module.css'
import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleMenuToggle = () => {
    setOpen(!open)
  }

  return (
    <header className={`${styles.container} ${open ? styles.open : ''}`}>
      <MenuToggle handleMenuToggle={handleMenuToggle} />
      <Nav open={open} />
      <LenguageToggle />
    </header>
  )
}

export default Header
