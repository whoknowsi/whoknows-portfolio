'use client'
import SvgContainer from '../SvgContainer'

const TailwindcssLogo = ({ colors, width, height, hoverColors, name }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 1000 1000" width={width} height={height}>
      <path
        d="M489.5 226.499c-161.5 5.133-209.5 120.5-220.5 183 14.333-23.167 59.5-73.999 126-73.999 77.5 0 136.5 86.5 172.5 113.5 43.737 32.803 131.623 76.115 247 41 92-28 134.667-125.668 144-172.001-44.5 60.5-112 96.839-195.5 54-57.5-29.5-100.5-150.999-273.5-145.5ZM261 500.999c-161.5 5.133-209.5 120.5-220.5 183C54.833 660.832 100 610 166.5 610 244 610 303 696.5 339 723.5c43.737 32.803 131.623 76.115 247 41 92-28 134.667-125.668 144-172.001-44.5 60.5-112 96.839-195.5 54C477 616.999 434 495.5 261 500.999Z"
        opacity={0.9}
        fill={currentColors.grayColor}
      />
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors} name={name}>
      <SVG />
    </SvgContainer>
  )
}

export default TailwindcssLogo
