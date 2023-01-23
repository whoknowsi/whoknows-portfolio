const size = {
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '1024px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px' // for big screens
}

export const theme = {
  colors: {
    background: '#191923',
    backgroundFront: '#1e1e28',
    middle: '#262631',
    middleDark: '#090916',
    back: '#20202a',
    middleLight: '#30303c',
    front: '#2c2c39',
    textHighlight: '#f7f6ff',
    textGray: '#a4a4aa',
    textGraySemiDark: '#94949a',
    textGrayDark: '#717177',
    textVividLight: '#ffcc32',
    textVivid: '#FFC107',
    textVividDark: '#DFA100'
  },
  fonts: {
    poppins: 'Poppins'
  },
  header: {
    width: '5em',
    widthOpen: '15em',
    height: '4em'
  },
  root: {
    maxWidth: '1440px',
    maxHeight: '55em'
  },
  transitions: {
    menuOpenTime: '0.5s',
    menuOpenEase: 'ease-out'
  },
  shadows: {
    borderShadow: '0px 0px 7px 0px rgba(15, 15, 20, 0.2)',
    borderShadowBlock: '0px 2.5px 12px 0 rgb(15 15 20 / 20%)',
    montainGradient: 'linear-gradient(0deg, #1e1e28 0%, #262631 100%)'
  },
  aside: {
    width: '18em'
  },
  svg: {
    height: '1.5em'
  },
  border: {
    radius: '12px'
  },
  device: {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`
  }
}
