import Image from 'next/image'
import styles from '../../../styles/components/Projects/Project/Project.module.css'
import { FaGithub, FaLink } from 'react-icons/fa'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Footer from '../../Footer'

const Project = ({ project }) => {
  const { name, description, createdAt, status, repoUrl, url, media } = project
  const slider = useRef(null)
  const next = useRef(null)
  const prev = useRef(null)
  const [currentImg, setCurrentImage] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (!slider.current.style.transform) return
      const toTranslate = `translateX(${-getValueToTranslate() * (currentImg - 1)}px)`
      slider.current.style.transform = toTranslate
    }

    window.addEventListener('resize', handleResize)

    if (media.length === 0) next.current.style.visibility = 'hidden'

    return () => window.removeEventListener('resize', handleResize)
  }, [media.length, currentImg])

  const getValueToTranslate = () => {
    const htmlEl = document.querySelector('body')
    const styles = getComputedStyle(htmlEl)

    const emToPixels = em => Number(styles.fontSize.split('px')[0]) * Number(em.split('em')[0])

    const maxWidth = Number(styles.getPropertyValue('--max-width').split('px')[0])
    const vw = window.innerWidth
    const isMobile = window.innerWidth <= 1023
    const headerWidth = isMobile ? 0 : emToPixels(styles.getPropertyValue('--header-width'))
    const asideWidth = isMobile ? 0 : emToPixels(styles.getPropertyValue('--aside-width'))
    const paddingWidth = isMobile ? emToPixels('4em') : emToPixels('6em')

    return Math.min(maxWidth, vw) - headerWidth - asideWidth - paddingWidth
  }

  const fromTranslateToNumber = t => Number(t.split('(')[1].split('px')[0])

  const handlePrev = () => {
    if (currentImg === 2) prev.current.style.visibility = 'hidden'
    if (currentImg === 1) return

    next.current.style.visibility = 'visible'

    const currentTranslate = fromTranslateToNumber(slider.current.style.transform)
    const toTranslate = `translateX(${currentTranslate + getValueToTranslate()}px)`
    slider.current.style.transform = toTranslate

    setCurrentImage(currentImg - 1)
  }

  const handleNext = () => {
    if (currentImg === media.length - 1) next.current.style.visibility = 'hidden'
    if (currentImg === media.length) return

    prev.current.style.visibility = 'visible'

    const toTranslate = `translateX(-${getValueToTranslate() * (currentImg)}px)`
    slider.current.style.transform = toTranslate

    setCurrentImage(currentImg + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.firstSectionContainer}>
        <h2>{name}</h2>
        <div className={styles.imagesContainer}>
          <div ref={prev} className={styles.prev} onClick={handlePrev}><span>{'<'}</span></div>
          <div ref={next} className={styles.next} onClick={handleNext}><span>{'>'}</span></div>
          <div className={styles.imagesSlider} ref={slider}>
            {media.map((url, i) =>
              <div key={url} className={`${styles.imageContainer} ${(currentImg - 1) === i ? styles.current : ''}`}>
                <Image src={url} fill alt={`${name} image ${i}`} />
              </div>)}
          </div>
        </div>
      </div>
      <div className={styles.secondSectionContainer}>
        <h2>Project details</h2>
        <div className={styles.detailsContainer}>
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className={styles.details}>
            <ul>
              <li><strong>Date:</strong>{createdAt}</li>
              <li><strong>Status:</strong>{status}</li>
              <li><strong>Repo:</strong><Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} repository`}><FaGithub /></Link></li>
              <li><strong>Website:</strong><Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`}><FaLink /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Project
