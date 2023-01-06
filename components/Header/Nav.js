import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from '../../styles/components/Header/Nav.module.css'

const Nav = ({ open, handleMenuToggle }) => {
  const list = useRef(null)
  useEffect(() => {
    if (!list) return
    const interval = 0.03
    let delay = 0
    for (const iterator of list.current.childNodes) {
      iterator.style.transitionDelay = `${delay.toFixed(3)}s`
      delay += interval
    }
  }, [list])

  return (
    <nav className={`${styles.container} ${open ? styles.open : ''}`}>
        <ul ref={list}>
          <li>
            <Link href={'/'} onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/portfolio'} onClick={handleMenuToggle}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href={'/deployments'} onClick={handleMenuToggle}>
              Deployments
            </Link>
          </li>
          <li>
            <Link href={'/certifications'} onClick={handleMenuToggle}>
              Certifications
            </Link>
          </li>
          <li>
            <Link href={'/contact'} onClick={handleMenuToggle}>
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
