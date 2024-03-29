'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Certificate = ({ certificate, dictionary }) => {
  const { name, description, issuingOrganization, expires, expirationDate, issueDate, credentialId, credentialURL } =
    certificate
  const [showingMore, setShowingMore] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const dot = useRef(null)

  const handleReadMore = () => {
    setShowingMore(!showingMore)
  }

  const months = dictionary.months

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
    <div className='certificateArticleContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='certificateDotContainer'>
        <div ref={dot} className={`certificateBackDot ${(isHover || isAnimating) && 'dotAnimated'}`}></div>
        <div className='certificateDot'></div>
      </div>
      <div className='certificateContainer'>
        <div className='certificateDate'>
          <span>{fromApiDateToVerboseDate(issueDate, expirationDate, expires)}</span>
        </div>
        <section className='certificateTitle'>
          <h3>{name}</h3>
          <span>{issuingOrganization}</span>
        </section>
        <section className='certificateContent'>
          <article>
            <h4>{dictionary.description}:</h4>
            <p className='certificateDescription'>
              {showingMore ? description : `${description.split('.')[0]}.`}{' '}
              <button onClick={handleReadMore}>{showingMore ? dictionary.readLess : `... ${dictionary.readMore}` }</button>
            </p>
          </article>
          <article>
            <h4>{dictionary.credentialId}:</h4>
            <p className='certificateCredentialId'>{credentialId}</p>
          </article>
          <article>
            <h4>{dictionary.credentialUrl}:</h4>
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
