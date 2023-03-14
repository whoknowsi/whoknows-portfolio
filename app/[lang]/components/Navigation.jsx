'use client'

import { useEffect, useState } from 'react'
import Aside from './Aside/Aside'
import Header from './Header/Header'
import BackgroundPatron from './Background/BackgroundPatron'
import BlurFilter from './BlurFilter/BlurFilter'
import { usePathname } from 'next/navigation'

export default function Navigation ({ basicInfo, projects, dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [asideOpen, setAsideOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.querySelector('.scrollContainer')?.scrollTo(0, 0)
  }, [pathname])

  const handleMenuToggle = () => {
    if (!menuOpen && asideOpen) setAsideOpen(false)
    setMenuOpen(!menuOpen)
  }
  const handleAsideToggle = () => {
    if (!asideOpen && menuOpen) setMenuOpen(false)
    setAsideOpen(!asideOpen)
  }

  const handleMainClick = () => {
    if (menuOpen) setMenuOpen(false)
    if (asideOpen) setAsideOpen(false)
  }

  return (
    <>
      <Aside
        info={basicInfo}
        open={asideOpen}
        menuOpen={menuOpen}
        handleMainClick={handleMainClick}
        handleAsideToggle={handleAsideToggle}
        dictionary={dictionary.aside}
      />
      <BackgroundPatron open={menuOpen || asideOpen} />
      <BlurFilter open={menuOpen || asideOpen} handleClick={handleMainClick} />
      <Header
        projects={projects}
        open={menuOpen}
        asideOpen={asideOpen}
        handleMainClick={handleMainClick}
        handleMenuToggle={handleMenuToggle}
        dictionary={dictionary.menu}
      />
    </>
  )
}
