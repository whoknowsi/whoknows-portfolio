import React, { useState } from 'react'
import { theme } from '@/app/styles/themeStyles'
import { Bubble, SvgContainerEl } from './styles/Skills.styledComponents'

const SvgContainer = ({ children, name }) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <SvgContainerEl onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Bubble>{name}</Bubble>
      {React.cloneElement(children, {
        currentColors: hover
          ? {
              grayColor: theme.colors.textVivid,
              darkGrayColor: theme.colors.textVividDark,
              backgroundColor: theme.colors.back,
              lightBackgroundColor: theme.colors.middleLight
            }
          : {
              grayColor: theme.colors.textGraySemiDark,
              darkGrayColor: theme.colors.textGrayDark,
              backgroundColor: theme.colors.back,
              lightBackgroundColor: theme.colors.middleLight
            }
      })}
    </SvgContainerEl>
  )
}

export default SvgContainer
