'use client'

import { useState } from 'react'
import Aside from './Aside/Aside'
import Header from './Header/Header'
import BackgroundPatron from './Background/BackgroundPatron'
import BlurFilter from './BlurFilter/BlurFilter'

export default function Navigation ({ basicInfo, projects }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [asideOpen, setAsideOpen] = useState(false)

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
      />
      <BackgroundPatron open={menuOpen || asideOpen} />
      <BlurFilter open={menuOpen || asideOpen} handleClick={handleMainClick} />
      <Header
        projects={projects}
        open={menuOpen}
        asideOpen={asideOpen}
        handleMainClick={handleMainClick}
        handleMenuToggle={handleMenuToggle}
      />
    </>
  )
}
