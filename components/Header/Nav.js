import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from '../../styles/components/Header/Nav.module.css'

const Nav = ({ open }) => {
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
            <Link href={'/'} tabIndex={open ? 0 : -1}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/portfolio'} tabIndex={open ? 0 : -1}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href={'/deployments'} tabIndex={open ? 0 : -1}>
              Deployments
            </Link>
          </li>
          <li>
            <Link href={'/certifications'} tabIndex={open ? 0 : -1}>
              Certifications
            </Link>
          </li>
          <li>
            <Link href={'/contact'} tabIndex={open ? 0 : -1}>
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
