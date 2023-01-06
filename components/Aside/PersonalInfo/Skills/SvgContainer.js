import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'
import React, { useState } from 'react'

const SvgContainer = ({ children, colors, hoverColors }) => {
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
    {React.cloneElement(children, { currentColors: hover ? hoverColors : colors })}
    </div>
  )
}

export default SvgContainer
