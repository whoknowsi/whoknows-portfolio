'use client'

import Image from 'next/image'
import { FaGithub, FaLink } from 'react-icons/fa'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import {
  Description,
  Details,
  DetailsContainer,
  FirstSectionContainer,
  ImageContainer,
  ImagesContainer,
  Next,
  Prev,
  SecondSectionContainer,
  SliderPoints,
  ImagesSlider,
  SliderSvg
} from './styles/Project.styledComponents'

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

    const emToPixels = (em) => Number(styles.fontSize.split('px')[0]) * Number(em.split('em')[0])

    const maxWidth = Number(styles.getPropertyValue('--max-width').split('px')[0])
    const vw = window.innerWidth
    const isMobile = window.innerWidth <= 1023
    const headerWidth = isMobile ? 0 : emToPixels(styles.getPropertyValue('--header-width'))
    const asideWidth = isMobile ? 0 : emToPixels(styles.getPropertyValue('--aside-width'))
    const paddingWidth = isMobile ? emToPixels('4em') : emToPixels('6em')

    return Math.min(maxWidth, vw) - headerWidth - asideWidth - paddingWidth
  }

  const fromTranslateToNumber = (t) => Number(t.split('(')[1].split('px')[0])

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

    const toTranslate = `translateX(-${getValueToTranslate() * currentImg}px)`
    slider.current.style.transform = toTranslate

    setCurrentImage(currentImg + 1)
  }

  const handleClickSlide = (slide) => {
    const toTranslate = `translateX(-${getValueToTranslate() * (slide - 1)}px)`
    slider.current.style.transform = toTranslate

    if (slide === media.length) {
      next.current.style.visibility = 'hidden'
    } else {
      next.current.style.visibility = 'visible'
    }

    if (slide === 1) {
      prev.current.style.visibility = 'hidden'
    } else {
      prev.current.style.visibility = 'visible'
    }

    setCurrentImage(slide)
  }

  return (
    <>
      <FirstSectionContainer>
        <h2>{name}</h2>
        <ImagesContainer>
          <Prev ref={prev} onClick={handlePrev}>
            <span>{'<'}</span>
          </Prev>
          <Next ref={next} onClick={handleNext}>
            <span>{'>'}</span>
          </Next>
          <SliderPoints>
            {media.map((url, i) => (
              <SliderSvg
                key={'pointer ' + url}
                selected={i + 1 === currentImg}
                id={i}
                onClick={() => handleClickSlide(i + 1)}
              />
            ))}
          </SliderPoints>
          <ImagesSlider ref={slider}>
            {media.map((url, i) => (
              <ImageContainer key={url} current={currentImg - 1 === i}>
                <Image src={url} fill alt={`${name} image ${i}`} />
              </ImageContainer>
            ))}
          </ImagesSlider>
        </ImagesContainer>
      </FirstSectionContainer>
      <SecondSectionContainer>
        <h2>Project details</h2>
        <DetailsContainer>
          <Description>
            <h3>Description</h3>
            <p>{description}</p>
          </Description>
          <Details>
            <ul>
              <li>
                <strong>Date:</strong>
                {createdAt}
              </li>
              <li>
                <strong>Status:</strong>
                {status}
              </li>
              {repoUrl && (
                <li>
                  <strong>Repo:</strong>
                  <Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} repository`}>
                    <FaGithub />
                  </Link>
                </li>
              )}
              {url && (
                <li>
                  <strong>Website:</strong>
                  <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`}>
                    <FaLink />
                  </Link>
                </li>
              )}
            </ul>
          </Details>
        </DetailsContainer>
      </SecondSectionContainer>
    </>
  )
}

export default Project
