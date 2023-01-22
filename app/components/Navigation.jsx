'use client'

import { useRef, useState, useEffect } from 'react'
import Aside from './Aside/Aside'
import Header from './Header/Header'
import BackgroundPatron from './Background/BackgroundPatron'
import BlurFilter from './BlurFilter/BlurFilter'
import {usePathname, useSearchParams} from 'next/navigation'
import Loading from './loading'

export default function Navigation({ basicInfo, projects, children }) {
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [asideOpen, setAsideOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const timeoutRefEnd = useRef(null)
  const scrollableEl = useRef(null)
  const handleMenuToggle = () => setMenuOpen(!menuOpen)
  const handleAsideToggle = () => setAsideOpen(!asideOpen)

  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    timeoutRefEnd.current = setTimeout(() => {
      setLoading(false)
      timeoutRefEnd.current = null
    }, 300)

  }, [pathname, searchParams])

  const startLoading = (path) => {
    setMenuOpen(false)
    setAsideOpen(false)
    scrollableEl.current?.scrollTo(0, 0)

    if(path === pathname) return 

    if(timeoutRefEnd.current) {
      clearTimeout(timeoutRefEnd.current)
      timeoutRefEnd.current = null
    }

    setLoading(true)
  }

  const handleMainClick = () => {
    if (menuOpen) setMenuOpen(false)
    if (asideOpen) setAsideOpen(false)
  }

  return (
    <div className={`content ${asideOpen || menuOpen ? 'open' : ''}`}>
      <div ref={scrollableEl} className="scrollContainer">
        {loading ? <Loading /> : children}
      </div>
      <Aside info={basicInfo} handleAsideToggle={handleAsideToggle} open={asideOpen} menuOpen={menuOpen} loading={startLoading} />
      <BackgroundPatron open={menuOpen || asideOpen} />
      <BlurFilter open={menuOpen || asideOpen} handleClick={handleMainClick} />
      <Header handleMenuToggle={handleMenuToggle} open={menuOpen} asideOpen={asideOpen} projects={projects} loading={startLoading}/>
    </div>
  )
}