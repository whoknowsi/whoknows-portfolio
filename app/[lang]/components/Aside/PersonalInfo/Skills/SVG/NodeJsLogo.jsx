'use client'
import SvgContainer from '../SvgContainer'

const NodeJsLogo = ({ colors, width, height, hoverColors, name }) => {
  const SVG = ({ currentColors }) => (
    <svg viewBox="0 0 109 122.88" width={width} height={height}>
      <path
        fill={currentColors.darkGrayColor}
        d="M68.43 87.08c-19.7 0-23.83-9.04-23.83-16.63 0-.72.58-1.3 1.3-1.3h5.82c.64 0 1.18.47 1.28 1.1.88 5.93 3.49 8.92 15.41 8.92 9.49 0 13.52-2.14 13.52-7.18 0-2.9-1.15-5.05-15.89-6.49-12.33-1.22-19.95-3.93-19.95-13.8 0-9.08 7.66-14.49 20.5-14.49 14.42 0 21.56 5 22.46 15.76.03.37-.1.73-.35 1-.25.26-.6.42-.96.42H81.9c-.61 0-1.14-.43-1.26-1.01-1.41-6.23-4.81-8.23-14.07-8.23-10.36 0-11.56 3.61-11.56 6.31 0 3.28 1.42 4.24 15.4 6.09 13.84 1.84 20.41 4.43 20.41 14.16 0 9.81-8.18 15.43-22.45 15.43l.06-.06zm-13.91 35.8c-1.65 0-3.28-.43-4.72-1.26l-15.03-8.9c-2.25-1.26-1.15-1.7-.41-1.96 2.99-1.05 3.6-1.28 6.8-3.1.34-.19.78-.12 1.12.08l11.55 6.85c.42.23 1.01.23 1.4 0l45.03-25.99c.42-.24.69-.72.69-1.22V35.43c0-.52-.27-.98-.7-1.24L55.23 8.22c-.42-.25-.97-.25-1.39 0l-45 25.97c-.44.25-.71.73-.71 1.23v51.96c0 .5.27.97.7 1.21l12.33 7.12c6.69 3.35 10.79-.6 10.79-4.56V39.86c0-.73.57-1.3 1.31-1.3h5.7c.71 0 1.3.56 1.3 1.3v51.31c0 8.93-4.87 14.05-13.33 14.05-2.6 0-4.66 0-10.38-2.82L4.72 95.59A9.505 9.505 0 0 1 0 87.38V35.42c0-3.38 1.8-6.54 4.72-8.21l45.07-26c2.85-1.61 6.64-1.61 9.47 0l45.02 26.01c2.91 1.68 4.72 4.82 4.72 8.21v51.96c0 3.37-1.81 6.51-4.72 8.21l-45.02 26a9.5 9.5 0 0 1-4.74 1.26v.02zm0 0z"
      />
    </svg>
  )

  return (
    <SvgContainer colors={colors} hoverColors={hoverColors} name={name}>
      <SVG />
    </SvgContainer>
  )
}
export default NodeJsLogo
