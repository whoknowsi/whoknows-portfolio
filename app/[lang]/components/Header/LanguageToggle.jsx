'use client'

import { i18n } from '@/i18n-config'
import { getCurrentLocale } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './styles/LenguageToggle.module.css'

const LanguageToggle = ({ dictionary }) => {
  const pathName = usePathname()
  const locale = getCurrentLocale(pathName)
  const [nextLocale, setNextLocale] = useState('')
  const [hover, setHover] = useState(false)

  const redirectedPathName = (l) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = l
    return segments.join('/')
  }

  const handleClick = (l) => {
    if (document) document.cookie = `NEXT_LOCALE=${l};path=/`
  }

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  useEffect(() => {
    setNextLocale(i18n.locales.find((x) => x !== locale))
  }, [locale])

  return (
    <Link
      className={styles.container}
      href={redirectedPathName(nextLocale)}
      onClick={() => handleClick(nextLocale)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div className={`${styles.bubble} ${hover ? styles.hover : ''}`}>
      {dictionary.langToggle}
    </div>
    <p>
      {locale}
    </p>
  </Link>
  )
}

export default LanguageToggle
