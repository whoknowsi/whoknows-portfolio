import SvgContainer from '../SvgContainer'

const ReactLogo = ({ colors, width, height, hoverColors, name }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="-11.5 -10.232 23 20.463" width={width} height={height}>
      <title>{'React Logo'}</title>
      <circle r={2.05} fill={currentColors.darkGrayColor} />
      <g stroke={currentColors.darkGrayColor} fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors} name={name}>
      <SVG />
    </SvgContainer>
  )
}

export default ReactLogo
