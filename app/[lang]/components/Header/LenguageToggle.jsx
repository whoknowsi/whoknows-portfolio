'use client'

import { i18n } from '@/i18n-config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './styles/LenguageToggle.module.css'

const LenguageToggle = ({ open }) => {
  const pathName = usePathname()
  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleClick = (locale) => {
    if (document) document.cookie = `NEXT_LOCALE=${locale};path=/`
  }

  return (
    <div className={styles.container}>
      <button tabIndex={open ? 0 : -1}>
          <ul>
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link href={redirectedPathName(locale)} onClick={() => handleClick(locale)}>{locale}</Link>
              </li>
            )
          })}
        </ul>
      </button>
    </div>
  )
}

export default LenguageToggle
