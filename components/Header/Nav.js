import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/Header/Nav.module.css'
import { FaFolderOpen, FaCloud, FaCertificate, FaAddressBook } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { useRouter } from 'next/router'

const Nav = ({ open, projects, handleMenuToggle }) => {
  const router = useRouter()
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
          <li className={router.pathname === '/' ? styles.active : ''}>
            <Link href={'/'}>
              <IoHome />
              <div>Home</div>
            </Link>
          </li>
          <li className={router.pathname.includes('/projects') ? styles.active : ''}>
            <Link href={'/projects'} onClick={handleClick}>
              <FaFolderOpen />
              <div>Projects</div>
            </Link>
            <ul ref={projectsList} className={`${styles.projects}`}>
              {
                projects.map(({ _id, name }) => (
                    <li key={_id} className={router.query?.id === _id ? styles.active : ''}>
                      <Link href={`/projects/${_id}`}>
                        <span>{name}</span>
                      </Link>
                    </li>
                ))
              }
            </ul>
          </li>
          <li className={router.pathname === '/deployments' ? styles.active : ''}>
            <Link href={'/deployments'}>
              <FaCloud />
              <div>Deployments</div>
            </Link>
          </li>
          <li className={router.pathname === '/certifications' ? styles.active : ''}>
            <Link href={'/certifications'}>
              <FaCertificate />
              <div>Certifications</div>
            </Link>
          </li>
          <li className={router.pathname === '/contact' ? styles.active : ''}>
            <Link href={'/contact'}>
              <FaAddressBook />
              <div>Contact</div>
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
