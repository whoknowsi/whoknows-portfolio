'use client'

import { useEffect } from 'react'
import Header from './Header/Header'
import { usePathname } from 'next/navigation'

export default function Navigation ({ projects, dictionary }) {
  const pathname = usePathname()

  useEffect(() => {
    document.querySelector('.scrollContainer')?.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header
        projects={projects}
        dictionary={dictionary.menu}
      />
    </>
  )
}
