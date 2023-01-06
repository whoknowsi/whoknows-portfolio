import SvgContainer from '../SvgContainer'

const FireBaseLogo = ({ width, height, colors, hoverColors }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 32 32" width={width} height={height}>
      <path
        fill={currentColors.darkGrayColor}
        d="m19.62 11.558-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
      />
      <path
        fill={currentColors.lightBackgroundColor}
        d="m13.445 8.543 2.972 5.995-11.97 11.135z"
      />
      <path
        fill={currentColors.grayColor}
        d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
      />
      <path
        fill={currentColors.darkGrayColor}
        d="m13.445 8.543-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
      />
    </svg>
  )
  return (
    <SvgContainer colors={colors} hoverColors={hoverColors}>
      <SVG />
    </SvgContainer>
  )
}

export default FireBaseLogo
