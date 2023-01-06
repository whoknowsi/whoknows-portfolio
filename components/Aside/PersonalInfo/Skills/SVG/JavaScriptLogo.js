import SvgContainer from '../SvgContainer'

const JavaScriptLogo = ({ colors, width, height, hoverColors }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 124 141.532" width={width} height={height}>
      <path
        fill={currentColors.darkGrayColor}
        d="M10.383 126.894 0 0l124 .255-10.979 126.639-50.553 14.638z"
      />
      <path
        fill={currentColors.grayColor}
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
      />
      <path
        fill={currentColors.backgroundColor}
        d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zm10.127 0H104.5L102 40z"
      />
      <path
        fill={currentColors.lightBackgroundColor}
        d="M57 26.5zm10.127 0H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"
      />
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors}>
      <SVG />
    </SvgContainer>
  )
}

export default JavaScriptLogo
