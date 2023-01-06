import SvgContainer from '../SvgContainer'

const ExpressJsLogo = ({ width, height, colors, hoverColors }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 500 500" width={width} height={height}>
      <circle
        fill={currentColors.darkGrayColor}
        cx={250}
        cy={250}
        r={250}
      />
      <text
        style={{
          fill: currentColors.backgroundColor,
          fontFamily: 'Arial,sans-serif',
          fontSize: 350,
          textAnchor: 'middle',
          whiteSpace: 'pre'
        }}
        x={244.942}
        y={342.414}
      >
        {'ex'}
      </text>
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors}>
      <SVG />
    </SvgContainer>
  )
}
export default ExpressJsLogo
