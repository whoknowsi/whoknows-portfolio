'use client'
import SvgContainer from '../SvgContainer'

const HtmlLogo = ({ width, height, colors, hoverColors, name }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 452 520" width={width} height={height}>
      <title>{'HTML5 Logo Badge'}</title>
      <path
        fill={currentColors.darkGrayColor}
        d="M41 460 0 0h451l-41 460-185 52" />
      <path
        fill={currentColors.grayColor}
        d="m226 472 149-41 35-394H226" />
      <path
        fill={currentColors.backgroundColor}
        d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147-64-17-4-45h-56l7 89 117 32z"
      />
      <path
        fill={currentColors.lightBackgroundColor}
        d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
      />
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors} name={name}>
      <SVG />
    </SvgContainer>
  )
}

export default HtmlLogo
