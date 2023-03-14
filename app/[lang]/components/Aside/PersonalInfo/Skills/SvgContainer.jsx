import styles from './styles/SkillSvg.module.css'
import React, { useState } from 'react'

const SvgContainer = ({ children, name }) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  const rootColors = {
    '--back-color': '#20202a',
    '--middle-color-light': '#30303c',
    '--text-color-gray-semi-dark': '#94949a',
    '--text-color-gray-dark': '#717177',
    '--text-color-vivid': '#FFC107',
    '--text-color-vivid-dark': '#DFA100'
  }

  const props = {
    colors: {
      grayColor: rootColors['--text-color-gray-semi-dark'],
      darkGrayColor: rootColors['--text-color-gray-dark'],
      backgroundColor: rootColors['--back-color'],
      lightBackgroundColor: rootColors['--middle-color-light']
    },
    hoverColors: {
      grayColor: rootColors['--text-color-vivid'],
      darkGrayColor: rootColors['--text-color-vivid-dark'],
      backgroundColor: rootColors['--back-color'],
      lightBackgroundColor: rootColors['--middle-color-light']
    },
    width: 32,
    height: 32
  }

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.bubble} ${hover ? styles.hover : ''}`}>
        {name}
      </div>
      {React.cloneElement(children, { currentColors: hover ? props.hoverColors : props.colors })}
    </div>
  )
}

export default SvgContainer
