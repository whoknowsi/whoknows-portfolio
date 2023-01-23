import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const BlurFilterContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  user-select: none;
  pointer-events: none;
  transition: opacity var(--menu-open-transition) var(--menu-open-cubic);
  z-index: 15;
  backdrop-filter: blur(1px);

  ${({ menuOpen }) =>
    menuOpen &&
    `
      opacity: 1;
      pointer-events: all !important;
    `}

  @media ${theme.device.md} {
    backdrop-filter: blur(0px);
  }
`
