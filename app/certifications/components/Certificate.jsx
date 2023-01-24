'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './styles/Certificate.module.css'

const Certificate = ({ certificate }) => {
  const { name, description, issuingOrganization, expires, expirationDate, issueDate, credentialId, credentialURL } =
    certificate
  const [showingMore, setShowingMore] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const dot = useRef(null)

  const handleReadMore = () => {
    setShowingMore(!showingMore)
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const fromApiDateToVerboseDate = (initialDate, finalDate, expires) => {
    // eslint-disable-next-line no-unused-vars
    const [_a, initMonth, initYear] = initialDate.split('/')
    // eslint-disable-next-line no-unused-vars
    const [_b, finalMonth, finalYear] = expires ? finalDate.split('/') : [undefined, undefined, undefined]

    return `${months[Number(initMonth) - 1]} ${initYear}${
      expires ? ` - ${months[Number(finalMonth) - 1]} ${finalYear}` : ''
    }`
  }

  const handleMouseEnter = () => {
    setIsHover(true)
    setIsAnimating(true)
  }
  const handleMouseLeave = () => setIsHover(false)

  useEffect(() => {
    const handleAnimationEnd = () => !isHover && setIsAnimating(false)

    const currentDot = dot.current
    currentDot.addEventListener('animationiteration', handleAnimationEnd)
    return () => currentDot.removeEventListener('animationiteration', handleAnimationEnd)
  }, [isHover])

  return (
    <div className={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.dotContainer}>
        <div ref={dot} className={`${styles.backDot} ${isHover || isAnimating ? styles.animated : ''}`}></div>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.certificateContainer}>
        <div className={styles.date}>
          <span>{fromApiDateToVerboseDate(issueDate, expirationDate, expires)}</span>
        </div>
        <section className={styles.title}>
          <h3>{name}</h3>
          <span>{issuingOrganization}</span>
        </section>
        <section className={styles.content}>
          <article>
            <h4>Description:</h4>
            <p className={styles.description}>
              {showingMore ? description : `${description.split('.')[0]}.`}{' '}
              <button onClick={handleReadMore}>{showingMore ? 'Show less' : '... Read more'}</button>
            </p>
          </article>
          <article>
            <h4>Credential ID:</h4>
            <p className={styles.credentialId}>{credentialId}</p>
          </article>
          <article>
            <h4>Credential URL:</h4>
            <Link href={credentialURL} target="_blank" rel="noopener noreferrer" aria-label={`${name} certificate url`}>
              {credentialURL}
            </Link>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Certificate
