import { createGlobalStyle } from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1440px;
    --border-radius: 12px;
    --background-color: #191923;
    --background-front-color: #1e1e28;
    --back-color: #20202a;
    --middle-color-light: #30303c;
    --middle-color: #262631;
    --middle-color-dark: #090916;
    --front-color: #2c2c39;
    --text-color-highlight: #f7f6ff;
    --text-color-gray: #a4a4aa;
    --text-color-gray-semi-dark: #94949a;
    --text-color-gray-dark: #717177;
    --text-color-vivid-light: #ffcc32;
    --text-color-vivid: #FFC107;
    --text-color-vivid-dark: #DFA100;
    --menu-open-transition: 0.5s;
    --menu-open-cubic: ease-out;
    --border-shadow: 0px 0px 7px 0px rgba(15, 15, 20, 0.2);
    --border-shadow-block: 0px 2.5px 12px 0 rgb(15 15 20 / 20%);
    --montain-gradient: linear-gradient(0deg, ${theme.colors.front} 0%, ${theme.transitions.middle} 100%);
    --svg-basic-height: 1.5em;
    --aside-width: 18em;
    --header-width: 5em;
    --header-width-open: 15em;
    --max-height: 55em;
    --header-height: 4em;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow: hidden;
    font-family: ${theme.fonts.poppins}, sans-serif;
    font-size: clamp(.9em, 1em, min(1.7vh, 1em));
  }

  *::-webkit-scrollbar {
    width: .3em;
    background-color: transparent;
  }

  *::-webkit-scrollbar-track {
    box-shadow: none; 
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.15);
    border-radius: 1em;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${theme.colors.textHighlight};
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.3em;
  }

  h3 {
    font-size: 1em;
  }

  p {
    color: ${theme.colors.textGray};
    font-size: max(.9em, 12px);
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  svg {
    color: ${theme.colors.textGrayDark};
    user-select: none;
    height: ${theme.svg.height};
    width: auto;
    transition: color .3s ease-in-out;
  }


  svg:hover {
    color: ${theme.colors.textHighlight}
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  .container {
    background-color: ${theme.colors.background};
    height: 100vh;
    width: 100vw;
    padding: 1em;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: calc(${theme.root.maxWidth} - 2em);
    background: linear-gradient(0deg, ${theme.colors.backgroundFront} 0%, ${theme.colors.front} 100%);
    -webkit-box-shadow: 0px 0px 20px 0px rgba(20, 20, 30, .2);
    -moz-box-shadow: 0px 0px 20px 0px rgba(20, 20, 30, .2);
    box-shadow: 0px 0px 20px 0px rgba(20, 20, 30, .2);
    overflow: hidden;
    overflow-y: overlay;
    margin: 0 auto;
  }

  .scrollContainer {
    position: absolute;
    left:${theme.aside.width};
    bottom: 0;
    top: 0;
    right: ${theme.header.width};
    z-index: 5;
    overflow-y: overlay;
    transition: transform ${theme.transitions.menuOpenTime} ${theme.transitions.menuOpenEase};
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    transition: transform ${theme.transitions.menuOpenTime} ${theme.transitions.menuOpenEase};
    padding: 2em;
  }

  .main h1,
  .main h2,
  .main h3,
  .main h4 {
      margin-bottom: 1em;
  }

  .content.open .scrollContainer {
    transform: translateX(-9.5em);
  }

  .content.open > * {
    pointer-events: none;
  }

  input, textarea {
    outline: none;
    border: none;
    font-family: inherit;
    min-width: 0;
  }

  textarea {
    resize: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active,
  input:-internal-autofill-selected {
      -webkit-box-shadow: 0 0 0px 5em ${theme.colors.middle} inset;
      -webkit-text-fill-color: ${theme.colors.textHightlight} !important;
  }

  @media ${theme.device.md} { {
    .container {
      padding: 0;
      position: absolute;
      left: 0;
      top: 0;
    }

    .scrollContainer {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      transition:
    }

    .content.open .scrollContainer {
      transform: translateX(0);
    }

    .main {
      margin-top: ${theme.header.height};
      padding: 2em;
      height: fit-content;
    }
  } 
`

export default GlobalStyle
