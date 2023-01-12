import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/Header/Nav.module.css'

const Nav = ({ open, projects }) => {
  const list = useRef(null)
  const [projectsOpen, setProjectsOpen] = useState(false)
  useEffect(() => {
    if (!list) return
    const interval = 0.03
    let delay = 0
    for (const iterator of list.current.childNodes) {
      iterator.style.transitionDelay = `${delay.toFixed(3)}s`
      delay += interval
    }
  }, [list])

  const handleClick = (e) => {
    e.preventDefault()
    setProjectsOpen(!projectsOpen)
  }

  useEffect(() => {
    if (!open) setProjectsOpen(false)
  }, [open])

  return (
    <nav className={`${styles.container} ${open ? styles.open : ''}`}>
        <ul ref={list}>
          <li>
            <Link href={'/'} tabIndex={open ? 0 : -1}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/projects'} tabIndex={open ? 0 : -1} onClick={handleClick}>Projects</Link>
          <ul className={`${styles.projects} ${projectsOpen ? styles.projectsOpen : ''}`}>
            {
              projects.map(({ _id, name }) => (
                <li key={_id}><Link href={`/projects/${_id}`}>{name}</Link></li>
              ))
            }
            </ul>
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
