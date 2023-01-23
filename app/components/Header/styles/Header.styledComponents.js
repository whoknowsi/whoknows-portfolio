import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const HeaderContainer = styled.header`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  @media ${theme.device.md} {
    position: fixed;
    height: ${theme.header.height};
    background-color: ${theme.colors.back};
    left: 0;
    right: 0;
    top: 0;
    padding-left: 2em;
    display: flex;
    align-items: center;
    z-index: 15;
  }
`

export const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: ${theme.header.widthOpen};
  transform: translateX(calc(${theme.header.widthOpen} - ${theme.header.width}));
  transition: transform ${theme.transitions.menuOpenTime} ${theme.transitions.menuOpenEase};
  z-index: 25;

  & > * {
    -webkit-box-shadow: ${theme.shadows.borderShadow};
    -moz-box-shadow: ${theme.shadows.borderShadow};
    box-shadow: ${theme.shadows.borderShadow};
  }

  ${({ menuOpen }) =>
    menuOpen && `
      transform: translateX(0em) !important;

    & > * {
      pointer-events: all;
    }
  `}

  @media ${theme.device.md} {
    transform: translateX(${theme.header.widthOpen});
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
  }
`
