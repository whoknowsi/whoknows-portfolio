'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Project = ({ name, description, media, _id }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/projects/${_id}`)
  }

  const handleMiddleClick = (e) => {
    if (e.button !== 1) return
    window.open(`/projects/${_id}`, '_blank')
  }

  return name ? (
    <div className='projectCardContainer' onClick={handleClick} onMouseDown={handleMiddleClick}>
      <Link href={`/projects/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <div className='projectCardImageContainer'>
        <Image src={media[0]} fill alt={name} />
      </div>
      <p>{description}</p>
    </div>
  ) : (
    <div className='projectCardContainerPlaceHolder'></div>
  )
}

export default Project