'use client'

import styles from './styles/Nav.module.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '@/i18n-config'
import { getCurrentLocale } from '@/utils/utils'
import { IoHome } from 'react-icons/io5'
import { useEffect } from 'react'

const Nav = ({ open, dictionary }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleMainClick = async (e, link) => {
    e.preventDefault()
    const anchor = link.split('#')[1]
    const el = document.querySelector(`#${anchor}`)
    if (el) {
      router.push(link)
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }

    router.push(link)
  }

  useEffect(() => {
    console.log(pathname.split('/').length)
  }, [pathname])

  return (
    <nav className={`${styles.container} ${open ? styles.open : ''}`}>
      <ul>
        <li
          className={
            i18n.locales.some((locale) => '/' + locale === pathname)
              ? styles.active
              : ''
          }
        >
          <Link href={`/${getCurrentLocale(pathname)}`}>
            <IoHome />
            <div>{dictionary.home}</div>
          </Link>
        </li>
        <li className={pathname.includes('projects') ? styles.active : ''}>
          <Link href={`/${getCurrentLocale(pathname)}/projects`}>
            <div>{dictionary.projects}</div>
          </Link>
        </li>
        {pathname.split('/').length < 3 && (
          <>
            <li
              className={pathname.includes('#deployments') ? styles.active : ''}
            >
              <Link
                href={`/${getCurrentLocale(pathname)}#deployments`}
                onClick={(e) =>
                  handleMainClick(
                    e,
                    `/${getCurrentLocale(pathname)}#deployments`
                  )
                }
              >
                <div>{dictionary.deployments}</div>
              </Link>
            </li>
            <li
              className={
                pathname.includes('#certifications') ? styles.active : ''
              }
            >
              <Link
                href={`/${getCurrentLocale(pathname)}#certifications`}
                onClick={(e) =>
                  handleMainClick(
                    e,
                    `/${getCurrentLocale(pathname)}#certifications`
                  )
                }
              >
                <div>{dictionary.certifications}</div>
              </Link>
            </li>
            <li className={pathname.includes('#contact') ? styles.active : ''}>
              <Link
                href={`/${getCurrentLocale(pathname)}#contact`}
                onClick={(e) =>
                  handleMainClick(e, `/${getCurrentLocale(pathname)}#contact`)
                }
              >
                <div>{dictionary.contact}</div>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
