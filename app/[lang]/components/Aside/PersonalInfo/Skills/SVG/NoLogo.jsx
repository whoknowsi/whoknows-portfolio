import SvgContainer from '../SvgContainer'

const NoLogo = ({ colors, width, height, hoverColors, name }) => {
  const SVG = ({ currentColors }) => (
    <svg width={width} height={height} viewBox="0 0 500 500">
      <rect
        width={500}
        height={500}
        fill={currentColors.darkGrayColor}
        rx={65.345}
        ry={65.345}
      />
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors} name={name}>
      <SVG />
    </SvgContainer>
  )
}
export default NoLogo
