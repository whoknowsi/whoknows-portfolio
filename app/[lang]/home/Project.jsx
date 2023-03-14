'use client'

import { getCurrentLocale } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Project = ({ name, description, media, id }) => {
  const pathname = usePathname()
  const router = useRouter()
  const handleClick = () => {
    router.push(`/${getCurrentLocale(pathname)}/projects/${id}`)
  }

  const handleMiddleClick = (e) => {
    if (e.button !== 1) return
    window.open(`${getCurrentLocale(pathname)}/projects/${id}`, '_blank')
  }

  return name ? (
    <div
      className="projectCardContainer"
      onClick={handleClick}
      onMouseDown={handleMiddleClick}
    >
      <Link href={`/${getCurrentLocale(pathname)}/projects/${id}`}>
        <h3>{name}</h3>
      </Link>
      <div className="projectCardImageContainer">
        <Image
          src={`${process.env.STATICS_BASE_URL}${media[0]}`}
          fill
          alt={name}
        />
      </div>
      <p>{description}</p>
    </div>
  ) : (
    <div className="projectCardContainerPlaceHolder"></div>
  )
}

export default Project
