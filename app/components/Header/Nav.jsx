'use client'
import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaFolderOpen, FaCloud, FaCertificate, FaAddressBook } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { usePathname } from 'next/navigation'

const Nav = ({ open, projects, handleMenuToggle, handleMainClick }) => {
  const pathname = usePathname()
  const list = useRef(null)
  const projectsList = useRef(null)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)

  const setMaxHeightOnEl = () => {
    projectsList.current.style.maxHeight = `${maxHeight}em`
  }

  const resetMaxHeightOnEl = () => {
    projectsList.current.style.maxHeight = '0px'
  }

  const handleClick = (e) => {
    e.preventDefault()
    projectsOpen ? resetMaxHeightOnEl() : setMaxHeightOnEl()
    setProjectsOpen(!projectsOpen)
    !open && handleMenuToggle()
  }

  useEffect(() => {
    if (!list) return
    const interval = 0.03
    let delay = 0
    for (const iterator of list.current.childNodes) {
      iterator.children[0].style.transitionDelay = `${delay.toFixed(3)}s`
      delay += interval
    }
  }, [list])

  useEffect(() => {
    if (!open) {
      setProjectsOpen(false)
      resetMaxHeightOnEl()
    }
  }, [open])

  useEffect(() => {
    const setMaxHeightOfProjectsList = () => {
      const margin = 1
      const projectsSpace = projects.length * 3
      const totalHeight = projectsSpace + margin
      return totalHeight
    }

    setMaxHeight(setMaxHeightOfProjectsList())
  }, [projects.length])

  return (
    <nav className={`${styles.container} ${open ? styles.open : ''}`}>
      <ul ref={list}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href={'/'} onClick={handleMainClick}>
            <IoHome />
            <div>Home</div>
          </Link>
        </li>
        <li className={pathname.includes('/projects') ? styles.active : ''}>
          <Link href={'/projects'} onClick={handleClick}>
            <FaFolderOpen />
            <div>Projects</div>
          </Link>
          <ul ref={projectsList} className={`${styles.projects}`}>
            {projects.map(({ id, name }) => (
              <li key={id} className={pathname.includes(id) ? styles.active : ''}>
                <Link href={`/projects/${id}`} onClick={handleMainClick}>
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={pathname === '/deployments' ? styles.active : ''}>
          <Link href={'/deployments'} onClick={handleMainClick}>
            <FaCloud />
            <div>Deployments</div>
          </Link>
        </li>
        <li className={pathname === '/certifications' ? styles.active : ''}>
          <Link href={'/certifications'} onClick={handleMainClick}>
            <FaCertificate />
            <div>Certifications</div>
          </Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href={'/contact'} onClick={handleMainClick}>
            <FaAddressBook />
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
