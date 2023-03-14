'use client'
import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaFolderOpen, FaCloud, FaCertificate, FaAddressBook } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n-config'
import { getCurrentLocale } from '@/utils/utils'

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
        <li className={i18n.locales.some((locale) => ('/' + locale) === pathname) ? styles.active : ''}>
          <Link href={`/${getCurrentLocale(pathname)}`} onClick={handleMainClick}>
            <IoHome />
            <div>Home</div>
          </Link>
        </li>
        <li className={pathname.includes('projects') ? styles.active : ''}>
          <Link href={`/${getCurrentLocale(pathname)}/projects`} onClick={handleClick}>
            <FaFolderOpen />
            <div>Projects</div>
          </Link>
          <ul ref={projectsList} className={`${styles.projects}`}>
            {projects.map(({ id, name }) => (
              <li key={id} className={pathname.includes(id) ? styles.active : ''}>
                <Link href={`/${getCurrentLocale(pathname)}/projects/${id}`} onClick={handleMainClick}>
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={pathname.includes('deployments') ? styles.active : ''}>
          <Link href={`/${getCurrentLocale(pathname)}/deployments`} onClick={handleMainClick}>
            <FaCloud />
            <div>Deployments</div>
          </Link>
        </li>
        <li className={pathname.includes('certifications') ? styles.active : ''}>
          <Link href={`/${getCurrentLocale(pathname)}/certifications`} onClick={handleMainClick}>
            <FaCertificate />
            <div>Certifications</div>
          </Link>
        </li>
        <li className={pathname.includes('contact') ? styles.active : ''}>
          <Link href={`/${getCurrentLocale(pathname)}/contact`} onClick={handleMainClick}>
            <FaAddressBook />
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
