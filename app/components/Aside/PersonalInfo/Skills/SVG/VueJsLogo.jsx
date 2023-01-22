import SvgContainer from '../SvgContainer'

const VueJsLogo = ({ colors, width, height, hoverColors, name }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 2500 2165.1" width={width} height={height} >
      <path d="M1538.7 0 1250 500 961.3 0H0l1250 2165.1L2500 0z" fill={currentColors.grayColor} />
      <path opacity={0.6} d="M1538.7 0 1250 500 961.3 0H500l750 1299L2000 0z" fill={currentColors.lightBackgroundColor} />
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors} name={name}>
      <SVG />
    </SvgContainer>
  )
}

export default VueJsLogo
