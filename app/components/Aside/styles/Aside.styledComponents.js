import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const AsideContainer = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--aside-width);
  background-color: var(--back-color);
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: var(--border-shadow);
  -moz-box-shadow: var(--border-shadow);
  box-shadow: var(--border-shadow);
  flex-shrink: 0;
  z-index: 25;
  pointer-events: all !important;

  @media ${theme.device.md} {
    position: fixed;
    height: auto;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform ${theme.transitions.menuOpenTime} ${theme.transitions.menuOpenEase};

    ${({ asideOpen }) => asideOpen && `
        transform: translateX(0);
    `}

    ${({ menuOpen }) => menuOpen && `
    pointer-events: none !important;
    `}
  }
`

export const Button = styled.button`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1em;
  right: 2em;
  top: calc(${theme.header.height} / 2 - ${theme.svg.height} / 2);

  @media ${theme.device.md} {
    display: flex;
    transition: transform var(--menu-open-transition) var(--menu-open-cubic);
    transition-property: transform, opacity;
    transform: translateX(var(--header-width));

    ${({ menuOpen }) => menuOpen && `
      opacity: 0.5;
    `}

    ${({ asideOpen }) => asideOpen && `
      transform: translateX(0);
    `}
    
  }
`
