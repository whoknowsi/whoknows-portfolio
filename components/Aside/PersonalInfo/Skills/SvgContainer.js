import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'
import React, { useState } from 'react'

const SvgContainer = ({ children, colors, hoverColors, name }) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
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
      {React.cloneElement(children, { currentColors: hover ? hoverColors : colors })}
    </div>
  )
}

export default SvgContainer
