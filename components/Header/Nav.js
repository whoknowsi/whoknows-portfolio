import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/Header/Nav.module.css'
import { FaFolderOpen, FaCloud, FaCertificate, FaAddressBook } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { useRouter } from 'next/router'

const Nav = ({ open, projects, handleMenuToggle }) => {
  const router = useRouter()
  const list = useRef(null)
  const [projectsOpen, setProjectsOpen] = useState(false)
  useEffect(() => {
    if (!list) return
    const interval = 0.03
    let delay = 0
    for (const iterator of list.current.childNodes) {
      iterator.children[0].style.transitionDelay = `${delay.toFixed(3)}s`
      delay += interval
    }
  }, [list])

  const handleClick = (e) => {
    e.preventDefault()
    setProjectsOpen(!projectsOpen)
    !open && handleMenuToggle()
  }

  useEffect(() => {
    if (!open) setProjectsOpen(false)
  }, [open])

  return (
    <nav className={`${styles.container} ${open ? styles.open : ''}`}>
        <ul ref={list}>
          <li className={router.pathname === '/' ? styles.active : ''}>
            <Link href={'/'} tabIndex={open ? 0 : -1}>
              <IoHome />
              <div>Home</div>
            </Link>
          </li>
          <li className={router.pathname.includes('/projects') ? styles.active : ''}>
            <Link href={'/projects'} tabIndex={open ? 0 : -1} onClick={handleClick}>
              <FaFolderOpen />
              <div>Projects</div>
            </Link>
            <ul className={`${styles.projects} ${projectsOpen ? styles.projectsOpen : ''}`}>
              {
                projects.map(({ _id, name }) => (
                  <li key={_id}><Link href={`/projects/${_id}`}>{name}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className={router.pathname === '/deployments' ? styles.active : ''}>
            <Link href={'/deployments'} tabIndex={open ? 0 : -1}>
              <FaCloud />
              <div>Deployments</div>
            </Link>
          </li>
          <li className={router.pathname === '/certifications' ? styles.active : ''}>
            <Link href={'/certifications'} tabIndex={open ? 0 : -1}>
              <FaCertificate />
              <div>Certifications</div>
            </Link>
          </li>
          <li className={router.pathname === '/contact' ? styles.active : ''}>
            <Link href={'/contact'} tabIndex={open ? 0 : -1}>
              <FaAddressBook />
              <div>Contact</div>
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
