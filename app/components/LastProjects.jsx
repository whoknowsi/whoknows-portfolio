'use client'

import Link from 'next/link'
import styles from './styles/LastProjects.module.css'
import Project from './Project'
import { useRef, useEffect, useState } from 'react'
import { dateDDMMYYYYToTimestamp } from '../../utils/utils'

const LastProjects = ({ projects }) => {
  const maxProjectsToShow = 3
  const projectsContainer = useRef(null)
  const [maxProjectsOnLine, setMaxProjectsOnLine] = useState(null)

  const getCurrentProjectsInLine = () => {
    const bodyStyles = getComputedStyle(document.querySelector('body'))
    const fontSize = bodyStyles.getPropertyValue('font-size')

    const emToPxNum = (em) => pxToNum(fontSize) * em
    const pxToNum = (px) => Number(px.split('px')[0])

    const projectsContainerStyles = getComputedStyle(projectsContainer.current)
    const projectStyles = getComputedStyle(
      projectsContainer.current.children[1]
    )

    const containerWidth = projectsContainerStyles.getPropertyValue('width')
    const projectWidth = projectStyles.getPropertyValue('min-width')
    const numberOfProjectsInLineRightNow = Math.floor(
      pxToNum(containerWidth) / pxToNum(projectWidth)
    )

    const gap = emToPxNum(numberOfProjectsInLineRightNow - 1)

    return Math.floor((pxToNum(containerWidth) - gap) / pxToNum(projectWidth))
  }

  useEffect(() => {
    const handleResize = () => setMaxProjectsOnLine(getCurrentProjectsInLine())
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [maxProjectsOnLine])

  const handleClick = () => {
    document.querySelector('.scrollContainer')?.scrollTo(0, 0)
  }

  return (
    <div className={styles.container}>
      <h2>My last projects</h2>
      <div ref={projectsContainer} className={styles.projectsContainer}>
        <div className={styles.viewMore}>
          <Link href="/projects" onClick={handleClick}>View more...</Link>
        </div>
        {maxProjectsOnLine ? (
          [...projects]
            .sort((a, b) => dateDDMMYYYYToTimestamp(b.createdAt) - dateDDMMYYYYToTimestamp(a.createdAt))
            .slice(
              0,
              maxProjectsOnLine > 1 ? maxProjectsOnLine : maxProjectsToShow
            )
            .map((props) => <Project key={props.name} {...props} />)
        ) : (
          <Project />
        )}
      </div>
    </div>
  )
}

export default LastProjects
