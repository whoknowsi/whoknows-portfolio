'use client'
import { useEffect, useRef, useState } from 'react'
import { FaFolderOpen, FaCloud, FaCertificate, FaAddressBook } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { NavLi, NavLink, NavUl, ProjectsLi, ProjectsLink, ProjectsUl, StyledNav } from './styles/Nav.styledComponents'

const Nav = ({ open, projects, handleMenuToggle, loading }) => {
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

  const setLoading = (url) => {
    loading(url)
  }

  return (
    <StyledNav open={open}>
      <NavUl ref={list}>
        <NavLi active={pathname === '/'}>
          <NavLink href={'/'} onClick={() => setLoading('/')}>
            <IoHome />
            <div>Home</div>
          </NavLink>
        </NavLi>
        <NavLi active={pathname.includes('/projects')}>
          <NavLink href={'/projects'} onClick={handleClick}>
            <FaFolderOpen />
            <div>Projects</div>
          </NavLink>
          <ProjectsUl ref={projectsList}>
            {projects.map(({ _id, name }) => (
              <ProjectsLi key={_id} active={pathname.includes(_id)}>
                <ProjectsLink href={`/projects/${_id}`} onClick={() => setLoading(`/projects/${_id}`)}>
                  <span>{name}</span>
                </ProjectsLink>
              </ProjectsLi>
            ))}
          </ProjectsUl>
        </NavLi>
        <NavLi active={pathname === '/deployments'}>
          <NavLink href={'/deployments'} onClick={() => setLoading('/deployments')}>
            <FaCloud />
            <div>Deployments</div>
          </NavLink>
        </NavLi>
        <NavLi active={pathname === '/certifications'}>
          <NavLink href={'/certifications'} onClick={() => setLoading('/certifications')}>
            <FaCertificate />
            <div>Certifications</div>
          </NavLink>
        </NavLi>
        <NavLi active={pathname === '/contact'}>
          <NavLink href={'/contact'} onClick={() => setLoading('/contact')}>
            <FaAddressBook />
            <div>Contact</div>
          </NavLink>
        </NavLi>
      </NavUl>
    </StyledNav>
  )
}

export default Nav
